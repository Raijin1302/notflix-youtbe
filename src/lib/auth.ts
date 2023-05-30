import { db } from "@/lib/db"
import { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { compare } from "bcrypt"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

// function getGoogleCredentials(): { clientId: string; clientSecret: string } {
//   const clientId = process.env.GOOGLE_CLIENT_ID
//   const clientSecret = process.env.GOOGLE_CLIENT_SECRET
//   if (!clientId || clientId.length === 0) {
//     throw new Error(
//       "Missing GOOGLE_CLIENT_ID - No clientID for google provider set"
//     )
//   }
//   if (!clientSecret || clientSecret.length === 0) {
//     throw new Error(
//       "Missing GOOGLE_CLIENT_SECRET - No clientSecret for google provider set"
//     )
//   }

//   return { clientId, clientSecret }
// }

// function getGitHubCredentials(): { clientId: string; clientSecret: string } {
//   const clientId = process.env.GITHUB_CLIENT_ID
//   const clientSecret = process.env.GITHUB_CLIENT_SECRET
//   if (!clientId || clientId.length === 0) {
//     throw new Error(
//       "Missing GITHUB_CLIENT_ID - No clientID for google provider set"
//     )
//   }
//   if (!clientSecret || clientSecret.length === 0) {
//     throw new Error(
//       "Missing GITHUB_CLIENT_SECRET - No clientSecret for google provider set"
//     )
//   }

//   return { clientId, clientSecret }
// }
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "passord",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password required")
        }

        const user = await db.user.findUnique({
          where: {
            email: credentials.email,
          },
        })
        if (!user || !user.hashedPassword) {
          throw new Error("Email does not exist")
        }

        const isCorrectPassword = await compare(
          credentials.password,
          user.hashedPassword
        )

        if (!isCorrectPassword) {
          throw new Error("Incorrect password")
        }

        return user
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    redirect() {
      return "/"
    },
  },
}
