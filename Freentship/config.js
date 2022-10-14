// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMJnMdif0KalIOQqGqOTdwrCMlrzkyCi0",
  authDomain: "demoapp-c57e5.firebaseapp.com",
  databaseURL: "https://demoapp-c57e5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "demoapp-c57e5",
  storageBucket: "demoapp-c57e5.appspot.com",
  messagingSenderId: "1095819396974",
  appId: "1:1095819396974:web:c0370fe34da3f72f83e37f",
  measurementId: "G-ZSZHQ0NPNR"
};

// Initialize Firebase
let appId
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
}else{
    app = firebase.app
}
const auth = firebase.auth()

const analytics = getAnalytics(app);
export {auth}