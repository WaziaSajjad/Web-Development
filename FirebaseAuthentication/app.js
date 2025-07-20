// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
//  built-in methods in firebase
//   createUserWithEmailAndPassword --- sign up 
//   createUserWithEmailAndPassword --- log in 
  
  
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCJ0kKUXA6VfXi_Iwz9tiniJ4XaxxCt1ZM",
    authDomain: "fir-1-online.firebaseapp.com",
    projectId: "fir-1-online",
    storageBucket: "fir-1-online.firebasestorage.app",
    messagingSenderId: "61902669929",
    appId: "1:61902669929:web:c990aa2e938d114325faf8",
    measurementId: "G-GZM0HCF16B"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  getAnalytics(app);

// ------------------------------------------------------
// Sign up function
// window.functionName = function() {}
window.signUp = async function(){
    // user_name, email, password

    var user_name = document.getElementById("user_name").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    console.log(user_name, email, password);

    try {           //when calling or sending data to database
        
        // var userCreate = createUserWithEmailAndPassword(auth variable created above this is authentication that will be send to database, email, password)
        var userCreate = await createUserWithEmailAndPassword(auth, email, password)
        console.log("Sign up succesful", userCreate);
        // console.log("Sign up succesful", userCreate.user);
        


    } catch (error) {                   //if error occurs
        
        // console.log("Sign up failed", error);
        console.log("Sign up failed", error.message);
    }
    
}
window.logIn = async function(){
    // user_name, email, password

    var email_logIn = document.getElementById("email_logIn").value
    var password_logIn = document.getElementById("password_logIn").value

    console.log(email_logIn, password_logIn);

    try {           //when calling or sending data to database
        
        // var loginuser = signInWithEmailAndPassword(auth variable created above this is authentication that will be send to database, email, password)
        var loginUser = await signInWithEmailAndPassword(auth, email_logIn, password_logIn)
        console.log("Sign up succesful", loginUser);
        // console.log("Sign up succesful", userCreate.user);
        


    } catch (error) {                   //if error occurs
        
        // console.log("Sign up failed", error);
        console.log("log in failed", error.message);
    }
    
}
