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
      // const { emails } = this.props;
      // dispatchSet("lotteryApp.emails", email);

      //TODO: convert to class, avoid duplicate emails

      // emails.includes(!entry.email)
      //   ? dispatchSet("lotteryApp.users", [...users, entry])(
      //       dispatchSet("lotteryApp.emails", email)
      //     )(database.ref(`Entries/${id}`).set(entry))(
      //       (window.location = "/status")
      //     )
      //   : window.alert("This email has already been entered");

      dispatchSet("lotteryApp.users", [...users, entry]);
      database.ref(`Entries/${id}`).set(entry);
      window.location = "/status";
      // database.ref("Entries").on("value", function(snapshot, prevChildKey) {
      //   const user = snapshot.val();
      //   console.log(user);
      // });
    })
    .catch(function(error) {
      if (error.code === "auth/account-exists-with-different-credential") {
        window.alert("That email has already been taken");
      }
      console.log(error);
      console.log(users.email);
    });
};

export default signIn;
// export default watch(signIn, {
//   users: "lotteryApp.users",
//   emails: "lotteryApp.emails"
// });
