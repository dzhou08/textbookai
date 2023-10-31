import firebase from 'firebase/app';
import {
    getAuth,
    GoogleAuthProvider,
    //signInWithRedirect,
    getRedirectResult,
    signInWithPopup
    } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOPpyE4u7-1DfCIHEcugkB8fgOLWsXFuM",
    authDomain: "mystudypal-39c9c.firebaseapp.com",
    projectId: "mystudypal-39c9c",
    storageBucket: "mystudypal-39c9c.appspot.com",
    messagingSenderId: "466102574842",
    appId: "1:466102574842:web:a600e4f98ec915ff27f343"
};

firebase.initializeApp(firebaseConfig);

import 'firebase/auth';

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export function googleAuth () {
    firebase.auth().signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        //const credential = GoogleAuthProvider.credentialFromResult(result);
        //const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        this.$store.state.user = user;
        this.$store.state.loggedIn = true;
        // name = displayName
        // email = email
        // photo = photoURL
        console.log(user);
        this.$emit('userLoggedIn');
        // IdP data available using getAdditionalUserInfo(result)
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        if (errorCode != null) {
        console.log(errorCode);
        }
        const errorMessage = error.message;
        if (errorMessage != null) {
        console.log(errorMessage);
        }
        // The email of the user's account used.
        const customData = error.customData;
        if (customData != null) {
        console.log(customData);
        }

        // The AuthCredential type that was used.
        if (GoogleAuthProvider != null) {
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
        }
    });
}

export { firebase, googleAuthProvider };