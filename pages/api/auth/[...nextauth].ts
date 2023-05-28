import type { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import prisma from '@/hooks/prisma'
// import axios from 'axios'

export const options: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
    debug: false
  }
  
  export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)

// export const options: AuthOptions = {
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID as string,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//         })
//     ],
//     secret: process.env.NEXTAUTH_SECRET,
//     session: {
//         strategy: 'jwt',
//         maxAge: 30 * 24 * 60 * 60,
//         updateAge: 24 * 60 * 60
//     },
//     callbacks: {
//         async signIn({ account, profile }: any) {
//             if (account.provider === "google") {
//                 return profile.email_verified && profile.email.endsWith("@gmail.com")
//             } else {
//                 return false
//             }
//         },
//         async jwt({ token, account, profile}: any) {
//             if (account) {
//                 token.accessToken = account.access_token
//             }
//             if (profile) {
//                 let user = await prisma.user.findFirst({
//                     where: {
//                         email: {
//                             equals: profile.email
//                         }
//                     }
//                 })
//                 console.log('jwt user', user)
//                 if (!!user === false) {
//                     let newUser = await prisma.user.create({
//                         data: {
//                             name: profile.name,
//                             email: profile.email,
//                         }
//                     })
//                     return newUser
//                 }
//                 return user
//             }
//             return token
//         },
//     },
//     jwt: {
//         secret: process.env.NEXTAUTH_SECRET,
//         maxAge: 30 * 24 * 60 * 60
//     },
// }

// export const options: AuthOptions = {
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID as string,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//         })
//     ],
// }