import * as firebase from "firebase";

// Config info unique to your project
const firebaseConfig = {
  apiKey: "AIzaSyDL2zdUs_3UWj6WNraYVGK6bFbiAvHXGkc",
  authDomain: "smartfood-81920.firebaseapp.com",
  projectId: "smartfood-81920",
  databaseURL: "https://smartfood-81920-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "smartfood-81920.appspot.com",
  messagingSenderId: "124126257285",
  appId: "1:124126257285:web:ea30c9e83a66b1c77049ec",
  measurementId: "G-G3XQVG82VL"
};

const firebase_ = require('firebase/app').default

if (!firebase.apps.length) {
    firebase_.initializeApp(firebaseConfig)
}

export default firebase_;