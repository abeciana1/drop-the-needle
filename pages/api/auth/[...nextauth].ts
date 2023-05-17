import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
// import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const options: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
    secret: process.env.JWT_SECRET,
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
        async jwt({ token, account, profile, trigger}: any) {

            if (account) {
                token.accessToken = account.access_token
            }

            if (profile) {
                if (trigger === 'signUp') {
                    await prisma.user.create({
                        data: {
                            name: profile.name,
                            email: profile.email,
                        }
                    })
                } else if (trigger === 'signIn') {
                    // ! Create page for signin and signup
                    // ! - need to have different options so be4 case works
                    await prisma.user.findFirst({
                        where: {
                            email: profile.email
                        }
                    })
                }
            }
            return token
        },
        async session({ session }) {
            return session
        }
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        maxAge: 30 * 24 * 60 * 60
    }
}

export default NextAuth(options)