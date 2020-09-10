import firebase from "firebase";
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB431_h3oR9wFnWY9xE91fkEgLIFfnaroI",
    authDomain: "fb-messenger-karna.firebaseapp.com",
    databaseURL: "https://fb-messenger-karna.firebaseio.com",
    projectId: "fb-messenger-karna",
    storageBucket: "fb-messenger-karna.appspot.com",
    messagingSenderId: "151989819664",
    appId: "1:151989819664:web:95d044e91a8295b650ed95",
    measurementId: "G-RTMCP0XVJ4"
    });


  const db = firebaseApp.firestore();
  

  export default db ;