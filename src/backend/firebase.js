import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnCAwVw2Zrhrj_B9ysqrMKu6v2aOq3BZE",
  authDomain: "education-website-5636a.firebaseapp.com",
  projectId: "education-website-5636a",
  storageBucket: "education-website-5636a.appspot.com",
  messagingSenderId: "621096373117",
  appId: "1:621096373117:web:3757667c41f244d8ba9a14",
  measurementId: "G-3N69CMQ3F2"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);