import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyClknnldbqB_nwPjJ4BdzxA93mS9akK0ws",
    authDomain: "tailorme-auth.firebaseapp.com",
    projectId: "tailorme-auth",
    storageBucket: "tailorme-auth.appspot.com",
    messagingSenderId: "914638068528",
    appId: "1:914638068528:web:772625542a6f62242846f5",
    measurementId: "G-LJT88V1KPF"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export {auth , firebase};
