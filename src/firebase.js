import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCSRZhg2nflTq53TFNrIpub00NTgY3ONqY",
    authDomain: "clone-4745b.firebaseapp.com",
    databaseURL: "https://clone-4745b.firebaseio.com",
    projectId: "clone-4745b",
    storageBucket: "clone-4745b.appspot.com",
    messagingSenderId: "649092289647",
    appId: "1:649092289647:web:48b46a58271fa6d8d2a99a",
    measurementId: "G-3C8G982G5V"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db  = firebaseApp.firestore();
  const auth = firebase.auth();


  export {db , auth};