import * as firebase from "firebase";
import database, { googleAuthProvider } from "../firebase/firebase.js";
import { dispatchSet } from "redux-easy";

const signIn = users => {
  firebase
    .auth()
    .signInWithPopup(googleAuthProvider)
    .then(function(result) {
      // The signed-in user info.
      const user = result.user;
      const name = user.displayName;
      const email = user.email;
      const id = user.uid;
      const entry = {
        name: name,
        email: email
      };
      // const avoidDuplicate =
      //   users.includes(entry.name || entry.email) === false
      //     ? dispatchSet("lotteryApp.users", [...users, entry])
      //     : return users;
      dispatchSet("lotteryApp.users", [...users, entry]);
      database.ref(`Entries/${id}`).set(entry);
      window.location = "/status";
      // database.ref("Entries").on("value", function(snapshot, prevChildKey) {
      //   const user = snapshot.val();
      //   console.log(user);
      // });
      //TODO: retrieve data, forEach() push to array to get count
    })
    .catch(function(error) {
      if (error.code === "auth/account-exists-with-different-credential") {
        window.alert("That email has already been taken");
      }
      console.log(error);
    });
};

export default signIn;
