// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, updateDoc } from "firebase/firestore/lite";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUM7-YZqhhcg5MYTPzvYD47KY6R-ln3Jc",
  authDomain: "task2-0-802b2.firebaseapp.com",
  projectId: "task2-0-802b2",
  storageBucket: "task2-0-802b2.appspot.com",
  messagingSenderId: "523283752524",
  appId: "1:523283752524:web:11f21ae20ad90f0685b6e9",
  measurementId: "G-PDGEKRSY94",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Setting up the database access implementation
export const db = getFirestore();
