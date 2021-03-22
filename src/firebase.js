import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAKwxFLrU6ZZVJozeXZ74lBFpErqd-iDLs",
    authDomain: "clone-ad349.firebaseapp.com",
    projectId: "clone-ad349",
    storageBucket: "clone-ad349.appspot.com",
    messagingSenderId: "180541667797",
    appId: "1:180541667797:web:3eab6f8a7b271c1934655c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};