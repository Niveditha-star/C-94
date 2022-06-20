// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzcm6nLyq6lh1TXkCpZhUhWzSBI0PGcDo",
  authDomain: "practise-activity-bab9b.firebaseapp.com",
  databaseURL: "https://practise-activity-bab9b-default-rtdb.firebaseio.com",
  projectId: "practise-activity-bab9b",
  storageBucket: "practise-activity-bab9b.appspot.com",
  messagingSenderId: "999092108250",
  appId: "1:999092108250:web:d381902f5853a391575ee3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function addUser()
{
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
  purpose : "adding user"
});
}




