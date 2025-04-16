// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Firebase config
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

// Sign Up Logic
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Signup successful!");
      window.location.href = "login.html"; // Redirect to login page
    })
    .catch((error) => {
      alert("Signup failed: " + error.message);
    });
});
