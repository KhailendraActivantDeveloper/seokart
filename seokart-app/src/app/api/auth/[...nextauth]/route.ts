// import NextAuth, { NextAuthOptions } from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";

// export const authOptions: NextAuthOptions = {

// };
// const handler =  NextAuth(authOptions);
import NextAuth from "next-auth"

const handler = NextAuth({
  providers: [
    AppleProvider({
      clientId: process.env.APPLE_ID as string || "",
      clientSecret: process.env.APPLE_SECRET as string || ""
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string || "",
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID as string || "",
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string || "",
    })
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Redirect to homepage after login
      if (url === "/") {
        return baseUrl;
      }

      // Return the URL to redirect to (can also use `window.location.href = ...`)
      return url.startsWith(baseUrl) ? url : baseUrl;
    }
  }
})

export { handler as GET, handler as POST }

