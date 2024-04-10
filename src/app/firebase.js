// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAZZ_-wXRwbJXX113KM0BOKIuvO7lcAVZw",
    authDomain: "prueba-firebase-bbc78.firebaseapp.com",
    projectId: "prueba-firebase-bbc78",
    storageBucket: "prueba-firebase-bbc78.appspot.com",
    messagingSenderId: "722808277597",
    appId: "1:722808277597:web:4c3b999c427ad23a0c1bb4"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  export const db = getFirestore(app)


