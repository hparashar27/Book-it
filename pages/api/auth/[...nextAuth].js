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
      type : "credentials",
      credentials : {},
      async authorize(credentials,req) {
        const { email, password } = credentials;
        dbConnect();
        // Check if email and password is entered
        if (!email || !password) {
            throw new Error('Please enter email or password');
        }

        // Find user in the database
        const user = await User.findOne({ email })
        if (!user) {
            throw new Error('Invalid Email or Password')
        }

        // Check if password is correct or not
        const isPasswordMatched = await user.comparePassword(password);

        if (!isPasswordMatched) {
            throw new Error('Invalid Email or Password')
        }

        return {
          name : user.name,
          email : user.email,
          id: user._id,
        };
      }
    }),
  ],
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session(session, user) {
      session.user = user?.user;
      return session;
  },
}
});