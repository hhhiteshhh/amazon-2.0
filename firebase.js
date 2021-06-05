import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCw3iB2pOPDAp6Iyrubi55d6k6Eiszk1D4",
  authDomain: "fir-28b29.firebaseapp.com",
  projectId: "fir-28b29",
  storageBucket: "fir-28b29.appspot.com",
  messagingSenderId: "398524853111",
  appId: "1:398524853111:web:23efc4da966b06e3ee0f72",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
export default db;
