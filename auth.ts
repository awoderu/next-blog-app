
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import User from "@/models/user"
import connect from "@/utils/db"
import bcrypt from "bcrypt"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        await connect()

        const user = await User.findOne({ email: credentials.email })
        if (!user) return null

        const passwordMatches = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!passwordMatches) return null

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        }
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/dashboard/login",
  },
})