// https://firebase.google.com/docs/web/setup#node.js-apps
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB,
  projectId: "outdoor-ecommerce",
  storageBucket: "outdoor-ecommerce.appspot.com",
  messagingSenderId: "629116165441",
  appId: "1:629116165441:web:ec1e704260ed74b8f615c0",
  measurementId: "G-8J5DZH78Q0"
};

// API request
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // create if user doesn't exist
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log('Error creating user', err.message);
    }
  }

  return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth(); //Firebase authentication
export const firestore = firebase.firestore(); //Firebase database

// https://firebase.google.com/docs/auth/web/google-signin
// trigger Google pop-up 
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;