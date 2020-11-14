import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyA8hmUZrXko-o4LkGrF9gnDkkhO9nT6SVU",
   authDomain: "volunteer-network-sabuj.firebaseapp.com",
   databaseURL: "https://volunteer-network-sabuj.firebaseio.com",
   projectId: "volunteer-network-sabuj",
   storageBucket: "volunteer-network-sabuj.appspot.com",
   messagingSenderId: "328892662852",
   appId: "1:328892662852:web:8e2f155a6e4062e9ed6811",
   measurementId: "G-SCZPHDS091",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
var google = new firebase.auth.GoogleAuthProvider();
var storage = firebase.storage();
export { auth, google, storage };
