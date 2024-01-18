import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';  // Import storage directly

const firebaseConfig = {
  apiKey: "AIzaSyDn1x4ZXh61fnK-Bwv2sRWyLnVqEl-8XCA",
  authDomain: "complaintsolution-6cece.firebaseapp.com",
  projectId: "complaintsolution-6cece",
  storageBucket: "complaintsolution-6cece.appspot.com",
  messagingSenderId: "496597882551",
  appId: "1:496597882551:web:e7c2b2422b2995450fdf32",
  measurementId: "G-33G62B8CED"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();  // Corrected line

// You can optionally export the entire firebase object if needed
export default firebase;

//project-496597882551