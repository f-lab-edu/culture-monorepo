/* eslint-disable turbo/no-undeclared-env-vars */

import { initializeApp, FirebaseApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// eslint-disable-next-line @rushstack/typedef-var
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);

// const analytics = getAnalytics(app);

export { db };
