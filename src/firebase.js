import firebase from "firebase/app"

import "firebase/auth"

const firebaseConfig = {
 apiKey: "AIzaSyA-X473butnngOdkzpZNvGEdF3DMxAnlhE",
 authDomain: "react--clone-166a0.firebaseapp.com",
 projectId: "react--clone-166a0",
 storageBucket: "react--clone-166a0.appspot.com",
 messagingSenderId: "187638226952",
 appId: "1:187638226952:web:7044a273d4db30ca5ff1bd"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()