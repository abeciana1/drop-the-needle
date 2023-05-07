import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    callbacks: {
        async signIn({ account, profile }) {
        if (account.provider === "google") {
            return profile.email_verified && profile.email.endsWith("@gmail.com")
        }
            return true
        },
    }
}

export default NextAuth(options)