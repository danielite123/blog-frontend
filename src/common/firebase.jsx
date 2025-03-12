// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBidtfPm0j-wW-98DYIlx_dooN_pd-o2ts",
  authDomain: "blog-project-77264.firebaseapp.com",
  projectId: "blog-project-77264",
  storageBucket: "blog-project-77264.firebasestorage.app",
  messagingSenderId: "752863422642",
  appId: "1:752863422642:web:c2b0aa439689f04263c1ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);

    if (!credential) throw new Error("No credential returned from Google");

    const idToken = await result.user.getIdToken(); // Get Firebase ID token

    return { access_token: idToken, user: result.user }; // Ensure correct token is returned
  } catch (error) {
    console.error("Google Auth Error:", error);
    throw error;
  }
};
