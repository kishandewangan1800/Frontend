// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB3nRl0gvYqqm8rNjfbnVlnsUKj3m4Bvrw",
    authDomain: "linkedin-clone-1800.firebaseapp.com",
    projectId: "linkedin-clone-1800",
    storageBucket: "linkedin-clone-1800.appspot.com",
    messagingSenderId: "619442866704",
    appId: "1:619442866704:web:674e36616428b63c98d895",
    measurementId: "G-C6GD5EM9B9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};