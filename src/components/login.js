import * as firebase from "firebase";
import database, { googleAuthProvider } from "../firebase/firebase.js";
import { dispatchSet } from "redux-easy";

const signIn = users => {
  firebase
    .auth()
    .signInWithPopup(googleAuthProvider)
    .then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const token = result.credential.accessToken;
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
      dispatchSet("lotteryApp.users", [...users, entry]);
      database.ref(`Entries/${id}`).set(entry);
      // database
      //   .ref("Entries")
      //   .on("child_added", function(snapshot, prevChildKey) {
      //     const name = snapshot.val().name;
      //   });
      //TODO: retrieve data, forEach() push to array to get count
      // database.ref(`Entries/NumberOfEntries`).update(updates);
    })
    .catch(function(error) {
      if (error.code === "auth/account-exists-with-different-credential") {
        window.alert("That email has already been taken");
      }
      console.log(error);
    });
};

export default signIn;
