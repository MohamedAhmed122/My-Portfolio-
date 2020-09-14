import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBj_qzkBW--LP6uDYJ9Jgx51v26FNw7igU",
    authDomain: "mohamed-yussef.firebaseapp.com",
    databaseURL: "https://mohamed-yussef.firebaseio.com",
    projectId: "mohamed-yussef",
    storageBucket: "mohamed-yussef.appspot.com",
    messagingSenderId: "701167558188",
    appId: "1:701167558188:web:a0d68257d13d274ca67b89",
    measurementId: "G-N79RC6RYHG"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export  const db = firebase.firestore()

export default firebase