import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
// import { FirestoreAdapter } from '@auth/firebase-adapter';
// import { Firestore } from '@google-cloud/firestore';
// import { auth, signInWithEmailAndPassword } from '../../../../utils/firebase';

import { firestore } from '../../../../utils/firebase';
import { FirestoreAdapter } from '@next-auth/firebase-adapter';

// const firestore: Firestore = new Firestore();
// eslint-disable-next-line @rushstack/typedef-var
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
    }),
    // 다른 인증 제공자를 추가할 수 있습니다.
  ],
  adapter: FirestoreAdapter(firestore as any),

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token, user }) {
      return session;
    },
    async jwt({ token, user, account, profile }) {
      return token;
    },
  },

  // callbacks: {
  //   async signIn({ user }: { user: User }) {
  //     try {
  //       const password = '0';
  //       await signInWithEmailAndPassword(auth, user.email!, password);
  //       return true;
  //     } catch (error) {
  //       console.error(error);
  //       return false;
  //     }
  //   },
  //   async session({ session, token, user }) {
  //     if (session.user) {
  //       session.user.id = user.id;
  //     }
  //     return session;
  //   },
  // },
  // 데이터베이스 설정 (선택 사항)
  // database: process.env.DATABASE_URL,
});

export { handler as GET, handler as POST };
