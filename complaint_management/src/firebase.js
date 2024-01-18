import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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
