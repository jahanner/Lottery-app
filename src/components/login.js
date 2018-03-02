import * as firebase from "firebase";
import database, { googleAuthProvider } from "../firebase/firebase.js";
import { dispatchSet, watch } from "redux-easy";

const signIn = () => {
  firebase
    .auth()
    .signInWithPopup(googleAuthProvider)
    .then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      const name = user.displayName;
      const email = user.email;
      const id = user.uid;
      const entry = {
        name: name,
        email: email
      };
      // ...
      console.log(name, email);
      dispatchSet("lotteryApp.name", name);
      dispatchSet("lotteryApp.email", email);
      database.ref(`Entries/${id}`).set(entry);
      database.ref(`NumberOfEntries`).set(+1);
    })
    .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
};

export default signIn;
