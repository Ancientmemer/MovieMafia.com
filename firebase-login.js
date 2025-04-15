// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD26r-TDOsvamPDejGENknSMDzsfNXKWLk",
  authDomain: "moviemafiaauth.firebaseapp.com",
  projectId: "moviemafiaauth",
  storageBucket: "moviemafiaauth.appspot.com",
  messagingSenderId: "405195689093",
  appId: "1:405195689093:web:880a5e30c175597e51edec",
  measurementId: "G-CY2PLKGR2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login Form Logic
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "index.html"; // Redirect
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
});
