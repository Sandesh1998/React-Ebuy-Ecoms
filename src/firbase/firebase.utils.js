import firebase  from "firebase/app";

import 'firebase/firestore';
import 'firebase/auth';

const config = {

        apiKey: "AIzaSyDOvvD-G_Y7e249BEDuX-sEpk7ASDAEkEM",
        authDomain: "ebuy-db.firebaseapp.com",
        projectId: "ebuy-db",
        storageBucket: "ebuy-db.appspot.com",
        messagingSenderId: "78759612906",
        appId: "1:78759612906:web:8165e4b228b58c0e03a293",
        measurementId: "G-JQ3RLLXV22"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;