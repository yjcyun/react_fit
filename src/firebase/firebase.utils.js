// https://firebase.google.com/docs/web/setup#node.js-apps
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBGpfvsajpLcDnElffS8a7E2gW-yJiCgJo",
  authDomain: "outdoor-ecommerce.firebaseapp.com",
  databaseURL: "https://outdoor-ecommerce.firebaseio.com",
  projectId: "outdoor-ecommerce",
  storageBucket: "outdoor-ecommerce.appspot.com",
  messagingSenderId: "629116165441",
  appId: "1:629116165441:web:ec1e704260ed74b8f615c0",
  measurementId: "G-8J5DZH78Q0"
};

export const createUserProfileDocument = async(userAuth, additionalData) =>{
  if(!userAuth) return;

  console.log(firestore.doc('users/allakj2lkdjf'));
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// https://firebase.google.com/docs/auth/web/google-signin
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;