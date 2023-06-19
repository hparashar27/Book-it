import NextAuth from "next-auth"
import User from "@/modals/userModal"
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/config/dbConnect"
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  session: {
    jwt: true
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET_ID
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "enter your email" },
        password: { label: "Password", type: "password" ,placeholder: "enter your email" }
      },
      async authorize(credentials) {
        dbConnect();
        const { email, password } = credentials;

        // check if user exists or not 
        if (!email || !password) {
          throw new Error("Please enter a valid email and password")
        }
        // find user in the database 
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
          throw new Error("Invalid email and password!")
        }
        // check if the entered password is correct or not 
        const isMatchedPassword = await user.comparePassword(password);

        if (!isMatchedPassword) {
          throw new Error("Entered password is not correct!")
        }
        return Promise.resolve(user);
      }
    })
  ],
  callbacks: {
    jwt: async (token, user) => {
      user && (token.user = user);
      return Promise.resolve(token)
    },
    session: async (session, user) => {
      session.user = user.user;
      return Promise.resolve(session)
    }
  }
})
