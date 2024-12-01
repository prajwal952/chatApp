// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,signOut } from "firebase/auth";
import { getFirestore, setDoc } from "firebase/firestore";
import { doc } from "firebase/firestore"; // Import doc and setDoc
import { toast } from "react-toastify";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhy4YCbHCqWxfg4xuwR1bT2ZgBKT221Ew",
  authDomain: "chat-app-a41b3.firebaseapp.com",
  projectId: "chat-app-a41b3",
  storageBucket: "chat-app-a41b3.firebasestorage.app",
  messagingSenderId: "582467858157",
  appId: "1:582467858157:web:4fde890e8407d4d83ee6e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);
const db=getFirestore(app);

const signup=async(username,email,password)=>{
    try{
        const res =await createUserWithEmailAndPassword(auth,email,password);
        const user=res.user;
        await setDoc(doc(db,"users",user.uid),{
            id:user.uid,
            username:username.toLowerCase(),
            email:email,
            name:"",
            avatar:"",
            bio:"Hey, I am using Chat App",
            lastSeen:Date.now()
        })
        await setDoc(doc(db,"chats",user.uid),{
            chatData:[]
        })
    }
    catch(err){
        console.error(err);
        toast.error(err.code);
    }
}

const login=async(email,password)=>{
    try{
        await signInWithEmailAndPassword( auth,email,password);
        toast.success(`Login Successfull ${email}`);
    }
    catch(err){
        console.error(err);
        toast.error(err.code.split("/")[1].split("-").join(" "));
    }
}

const logout=async()=>{
    try{
        await signOut(auth);
        toast.success(`Logout Successfull`);
    }
    catch(err){
        console.error(err);
        toast.error(err.code);
    }
}


export {signup,login,logout,auth,db}