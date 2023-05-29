import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpWaM_hAiqK79ZdTwVdTNrN9I1hfI8fkc",
  authDomain: "ayushi-app.firebaseapp.com",
  projectId: "ayushi-app",
  storageBucket: "ayushi-app.appspot.com",
  messagingSenderId: "831759565552",
  appId: "1:831759565552:web:8771386015472f9b5b7835",
  measurementId: "G-CHCB4MV1W3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup( auth, googleProvider);
const analytics = getAnalytics(app);