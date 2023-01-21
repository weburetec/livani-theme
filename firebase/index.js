import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Need to update below config
const config = {
    apiKey: "AIzaSyChdcToqcw5I1ZeSLCP-h4pOKVCCIQxZSI",
    authDomain: "hkgadgets-22d07.firebaseapp.com",
    databaseURL: "database-url.firebaseio.com",
    projectId: "hkgadgets-22d07",
    storageBucket: "hkgadgets-22d07.appspot.com",
    messagingSenderId: "1031251462277",
    appId: "1:1031251462277:web:39f3d0458ff6ece9ac81ec"
    measurementId: "G-Z07MNTZT5T"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
const auth = firebase.auth();
export {
    auth,
    firebase
};
