
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth,GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { toast } from "react-toastify";


const firebaseConfig = {
    apiKey: "AIzaSyA_ccVRUTinEK1mdRrHq2VsW_5R3qA6e4g",
    authDomain: "netflix-clone-94a5a.firebaseapp.com",
    projectId: "netflix-clone-94a5a",
    storageBucket: "netflix-clone-94a5a.appspot.com",
    messagingSenderId: "571842058262",
    appId: "1:571842058262:web:eea373894b1c3a53f5fd37",
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
const db=getFirestore();

const signUp=async (name,email,password)=>{
    try {
        const response=await createUserWithEmailAndPassword(auth,email,password);
        const user=response.user;

        await addDoc(collection(db,"users"),{                                  //?storing in firestore database
            uid:user.uid,
            name,
            authProvider:'local',
            email
        })
        toast.success('Signed In Successfully');

    } catch (error) {
        console.log(error);
        toast.error(error.code.split("/")[1].split("-").join(" "));

    
    }
}

const login= async (email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password);

    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

const logout=()=>{
    signOut(auth)
    toast.success("Signed Out Successfully");

}

const handleGoogleSignIn = () => {
    event.preventDefault();
    signInWithPopup(auth, provider);
};


export { auth, provider, db, signUp, login, logout, handleGoogleSignIn };
 