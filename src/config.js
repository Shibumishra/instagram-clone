// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyB_ADSzgwHxYrQtyHjRWvZlijM4bgP-6dA",
    authDomain: "instagram-b862d.firebaseapp.com",
    projectId: "instagram-b862d",
    storageBucket: "instagram-b862d.appspot.com",
    messagingSenderId: "533775296306",
    appId: "1:533775296306:web:0c784afabf6dbb40d2992b",
    measurementId: "G-1QLNRJTX4N"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };