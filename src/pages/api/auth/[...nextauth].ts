import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import YandexProvider from 'next-auth/providers/yandex';
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // YandexProvider({
    //   clientId: process.env.YANDEX_CLIENT_ID || '',
    //   clientSecret: process.env.YANDEX_CLIENT_SECRET || '',
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};
export default NextAuth(authOptions);
