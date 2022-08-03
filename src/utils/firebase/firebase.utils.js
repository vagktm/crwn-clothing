// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth"

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"
import { useTransition } from "react"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCkTLMUVNUqDZrfi8NHxgY9oF87LwWffwQ",

  authDomain: "crwn-clothing-db-35830.firebaseapp.com",

  projectId: "crwn-clothing-db-35830",

  storageBucket: "crwn-clothing-db-35830.appspot.com",

  messagingSenderId: "1040025090186",

  appId: "1:1040025090186:web:ad7c9d0deb43ba1eab1573",
}

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account",
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid)
  console.log("User Reference", userDocRef)
  const userSnapshot = await getDoc(userDocRef)
  console.log("User Snap in DB", userSnapshot)
  console.log("User Snap exists", userSnapshot.exists())

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, { displayName, email, createdAt })
    } catch (error) {
      console.log("error creating the user", error.message)
    }
  }
}
