import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      // !! is an easy way to convert a value to a boolean
      // return !!auth?.user
      return auth?.user ? true : false;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
