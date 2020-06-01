import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB2OsI7TLxySgKGf7Lq0zmcPGWWnoL1MnY",
  authDomain: "muniqlo.firebaseapp.com",
  databaseURL: "https://muniqlo.firebaseio.com",
  projectId: "muniqlo",
  storageBucket: "muniqlo.appspot.com",
  messagingSenderId: "650825492871",
  appId: "1:650825492871:web:c7c91b59fef417327f0b22",
  measurementId: "G-J2KXK7GCDJ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore();

// firebase.analytics();
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
