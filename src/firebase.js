import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBzx_QXne9s_W-pNWiWFUWFsyYuDJIfBZE",
  authDomain: "bt3103-week-6-2ad45.firebaseapp.com",
  projectId: "bt3103-week-6-2ad45",
  storageBucket: "bt3103-week-6-2ad45.appspot.com",
  messagingSenderId: "1030793458280",
  appId: "1:1030793458280:web:8bc7adbb8160c2db3fc1dd",
  measurementId: "G-54GC858WZ0"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;