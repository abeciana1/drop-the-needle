import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import prisma from '@/hooks/prisma'
import { PrismaAdapter } from '@next-auth/prisma-adapter'


export const options: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
    // adapter: PrismaAdapter(prisma),
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
                    await prisma.user.findFirst({
                        where: {
                            email: profile.email
                        }
                    })
                }
            }
            return token
        },
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        maxAge: 30 * 24 * 60 * 60
    }
}

export default NextAuth(options)

// let user = await prisma.user.findUnique({
//     where: {
//         email: profile.email
//     }
// })
// if (!!user) {
//     return true
// } else {
//     await prisma.user.create({
//         data: {
//             name: profile.name,
//             email: profile.email,
//         }
//     })
//     return true
// }