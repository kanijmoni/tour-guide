// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxOyV_ZuIS2akOxsnN7LL-YXwsljhoFHg",
    authDomain: "independent-tour-guide-1b1b5.firebaseapp.com",
    projectId: "independent-tour-guide-1b1b5",
    storageBucket: "independent-tour-guide-1b1b5.appspot.com",
    messagingSenderId: "468914885797",
    appId: "1:468914885797:web:1fe90476cbb7d1f34ae94c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;