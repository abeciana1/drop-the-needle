import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import prisma from '@/hooks/prisma'

export const options: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60
    },
    callbacks: {
        async signIn({ account, profile }: any) {
            if (account.provider === "google") {
                return profile.email_verified && profile.email.endsWith("@gmail.com")
            } else {
                return false
            }
        },
        async jwt({ token, account, profile}: any) {
            if (account) {
                token.accessToken = account.access_token
            }
            if (profile) {
                let user = await prisma.user.findFirst({
                    where: {
                        email: profile.email
                    }
                })
                if (!!user === false) {
                    let newUser = await prisma.user.create({
                        data: {
                            name: profile.name,
                            email: profile.email,
                        }
                    })
                    return newUser
                }
                return user
            }
            return token
        },
        async session({session, token}: any) {
            session.user.id = token.id
            return session
        }
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
        maxAge: 30 * 24 * 60 * 60
    },
}

export default NextAuth(options)