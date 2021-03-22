import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const Config={ apiKey: "AIzaSyAy1yG6dhhEgvIAzhiJdqKKlCLgA8e14as",
authDomain: "crown-clothing-10e05.firebaseapp.com",
projectId: "crown-clothing-10e05",
storageBucket: "crown-clothing-10e05.appspot.com",
messagingSenderId: "726535953278",
appId: "1:726535953278:web:7f20873b4297c4775fb12f",
measurementId: "G-LJ5SJNSWXN"};
firebase.initializeApp(Config);
export const auth =firebase.auth();
export const firestore =firebase.firestore();
const provider =new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"});
export const signInWithGoogle = ()=>auth.signInWithPopup(provider);
export default firebase;