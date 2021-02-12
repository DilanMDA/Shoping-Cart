import *as firebase from "firebase";  
  
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCShd8Wu0JjER4292oVVNpmfKOsk69MBVE",
    authDomain: "ecommerce-13c54.firebaseapp.com",
    projectId: "ecommerce-13c54",
    storageBucket: "ecommerce-13c54.appspot.com",
    messagingSenderId: "93192172508",
    appId: "1:93192172508:web:afe494747140ca720fd519"
  };
  // Initialize Firebase
firebase.initializeApp( firebaseConfig );
  
//export 
export const auth = firebase.auth();
export const googleAuthProvider = new firbase.auth.GoogleAuthProvider();