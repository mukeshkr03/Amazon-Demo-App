// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBR86eQP8PUS03Dub2IzQBg6iJzPu6JiDU",
  authDomain: "clone-challenge-59c39.firebaseapp.com",
  projectId: "clone-challenge-59c39",
  storageBucket: "clone-challenge-59c39.appspot.com",
  messagingSenderId: "323656487637",
  appId: "1:323656487637:web:b479d9e378f5e36a14485c",
  measurementId: "G-MZSG617N2K",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth(); // for signing in all stuff

export { db, auth };
