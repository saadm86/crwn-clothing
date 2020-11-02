import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAPoNY3v5aZnejBinVlnrFeM6BeSf4uoAM",
  authDomain: "crwn-db-6f59b.firebaseapp.com",
  databaseURL: "https://crwn-db-6f59b.firebaseio.com",
  projectId: "crwn-db-6f59b",
  storageBucket: "crwn-db-6f59b.appspot.com",
  messagingSenderId: "743409487560",
  appId: "1:743409487560:web:b96deff7f40035bfeedffd",
  measurementId: "G-V2VSGG02M2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
