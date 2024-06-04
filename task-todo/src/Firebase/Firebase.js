import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import getFirestore to get the Firestore database object

const firebaseConfig = {
  apiKey: "AIzaSyDExMDMEAMrZYWmb8XmdNWMfEJb5XnFYbc",
  authDomain: "todo-task-8e287.firebaseapp.com",
  projectId: "todo-task-8e287",
  storageBucket: "todo-task-8e287.appspot.com",
  messagingSenderId: "614415016369",
  appId: "1:614415016369:web:2cc1c9b267ad4e6f6c5d90",
  measurementId: "G-GTGCFNCNZ8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app); // Get the Firestore database object

export { app, analytics, auth, db }; // Export the db object along with other objects
