import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAnqd2QK8AorErYSy5DfN5ZSgRUSWjF0sg",
  authDomain: "lottery-app-1f17c.firebaseapp.com",
  databaseURL: "https://lottery-app-1f17c.firebaseio.com",
  projectId: "lottery-app-1f17c",
  storageBucket: "lottery-app-1f17c.appspot.com",
  messagingSenderId: "818612162284"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// Initialize Firebase
