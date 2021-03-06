import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDx68ObMES4lnHdDvQ_ey00639aUrVbFNo",
  authDomain: "slack-clone-siapuda.firebaseapp.com",
  projectId: "slack-clone-siapuda",
  storageBucket: "slack-clone-siapuda.appspot.com",
  messagingSenderId: "1009464419720",
  appId: "1:1009464419720:web:015d04a7dcc253b0bc863d",
  measurementId: "G-LHKWN7KHRQ",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
