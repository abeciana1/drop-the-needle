import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const options: AuthOptions = {
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
    callbacks: {
        async signIn({ account, profile }: any) {
        if (account.provider === "google") {
            return profile.email_verified && profile.email.endsWith("@example.com")
        }
        return true // Do different verification for other providers that don't have `email_verified`
        },
    }
}

export default NextAuth(options)