import {initializeApp} from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOPpyE4u7-1DfCIHEcugkB8fgOLWsXFuM",
    authDomain: "mystudypal-39c9c.firebaseapp.com",
    projectId: "mystudypal-39c9c",
    storageBucket: "mystudypal-39c9c.appspot.com",
    messagingSenderId: "466102574842",
    appId: "1:466102574842:web:a600e4f98ec915ff27f343"
};
export const setup = () => { initializeApp(firebaseConfig) }

import {
    getAuth,
    GoogleAuthProvider,
    getRedirectResult,
    signInWithPopup,
    User
  } from 'firebase/auth'
  import { Ref, ref } from 'vue'
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

import {useStore} from '../stores/store'

  
export function googleAuth() {
    //signInWithRedirect(auth, provider);

    getRedirectResult(auth)
        .then((result) => {
        const store = useStore();
        // This gives you a Google Access Token. You can use it to access Google APIs.
        if (result)
        {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            console.log(credential);
            if (credential != null) {
                const token = credential.accessToken;
                console.log(token);
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                //this.user = user;
                // name = displayName
                // email = email
                // photo = photoURL
                console.log(user);
                store.loggedIn = true;
                store.user_name = user.displayName?user.displayName:"";
            }
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            }
        }
        ).catch((error) => {
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

    signInWithPopup(auth, provider)
        .then((result) => {
        const store = useStore();
        // This gives you a Google Access Token. You can use it to access the Google API.
        //const credential = GoogleAuthProvider.credentialFromResult(result);
        //const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        //this.$store.state.user = user;
        //this.$store.state.loggedIn = true;
        // name = displayName
        // email = email
        // photo = photoURL
        console.log(user);
        store.user_name = user.displayName?user.displayName:"";
        store.loggedIn = true;
        store.user_avatar=user.photoURL?user.photoURL:"";
        console.log(store.user_avatar);
        
        //this.$emit('userLoggedIn');
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
export function googleLogout() {
    const store = useStore();
    store.user_name = "";
    store.loggedIn = false;
    store.user_avatar="";
    store.current_nav="";
}