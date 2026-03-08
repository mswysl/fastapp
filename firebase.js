import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBoq2gVTYZCG8CIpleS3E1K_ieRnm2kCPM",
  authDomain: "printist.firebaseapp.com",
  projectId: "printist",
  storageBucket: "printist.firebasestorage.app",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);