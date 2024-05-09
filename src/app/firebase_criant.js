// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage  } from "firebase/storage";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyAXGe_UwAtV4Zzw8tGGFRmCCo9vQaLOp-c",
    authDomain: "myon-cbc85.firebaseapp.com",
    projectId: "myon-cbc85",
    storageBucket: "myon-cbc85.appspot.com",
    messagingSenderId: "255490106894",
    appId: "1:255490106894:web:fe6a265679531d31b6fe5f",
    measurementId: "G-86LK6S8YGX"
  };

  // Initialize Firebase

//const analytics = getAnalytics(app);

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestorage = getStorage(app);
const db = getFirestore(app);
export default db;
