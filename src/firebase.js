import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBcmcRPR_Fn11XSkwLEgc_GJ_J9WAZ-Qn0",
  authDomain: "sih1286-fb3c9.firebaseapp.com",
  projectId: "sih1286-fb3c9",
  storageBucket: "sih1286-fb3c9.appspot.com",
  messagingSenderId: "960506450863",
  appId: "1:960506450863:web:da730a5a639f60a80e555a",
  measurementId: "G-RKZXLE6V8G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
