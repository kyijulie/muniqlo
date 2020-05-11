import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = $FIREBASE_API;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
