import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

// type NextAuthOptions = {
//     providers: [];
//     callbacks: any;
//     session: {
//         strategy: string;
//         maxAge: number;
//         updateAge: number;
//     }
// }

const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    secret: process.env.JWT_SECRET as string,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60
    },
}

export default NextAuth(options)