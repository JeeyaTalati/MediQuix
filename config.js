import firebase from 'firebase';
require ('@firebase/firestore') 
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDaiDHgNQZLLUdCnNZio1ZfPAzdGboHMSo",
    authDomain: "medi-quix.firebaseapp.com",
    projectId: "medi-quix",
    storageBucket: "medi-quix.appspot.com",
    messagingSenderId: "210303414461",
    appId: "1:210303414461:web:ce7fe9fbf4506aadbb87d4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()