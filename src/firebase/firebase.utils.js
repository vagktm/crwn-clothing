import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyApuqqg1R2IdbsHvv8qNvaE0BOLSmYFbDY",
  authDomain: "crwn-db-81ccf.firebaseapp.com",
  projectId: "crwn-db-81ccf",
  storageBucket: "crwn-db-81ccf.appspot.com",
  messagingSenderId: "910783005472",
  appId: "1:910783005472:web:35d8f64e0979a67228cd45",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
 // console.log(userRef);
  //console.log(snapShot);
  // console.log(userAuth.email);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {console.log('Error creating user',error.message)}
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
