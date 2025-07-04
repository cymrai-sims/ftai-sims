import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMVSKJt4pNhGANYiiiCAKbSPrxnunyNFA",
  authDomain: "ftai-99c58.firebaseapp.com",
  projectId: "ftai-99c58",
  storageBucket: "ftai-99c58.firebasestorage.app",
  messagingSenderId: "429918544524",
  appId: "1:429918544524:web:29a5f5edb4d908bd1311a9",
  measurementId: "G-06V9X86NBD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;