import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhBnIHaPjH7TC7LRyljRfkL1QlzouXKk0",
  authDomain: "ce-space.firebaseapp.com",
  databaseURL:
    "https://ce-space-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ce-space",
  storageBucket: "ce-space.appspot.com",
  messagingSenderId: "1185463815",
  appId: "1:1185463815:web:dd57d61bb52eace769f4a2",
};

//init firebase
firebase.initializeApp(firebaseConfig);


const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
