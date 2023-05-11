import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyC6tTX9dnIFU7BK52mRTrXHLUEf8bUSZlc",
    authDomain: "admin-app-b591e.firebaseapp.com",
    projectId: "admin-app-b591e",
    storageBucket: "admin-app-b591e.appspot.com",
    messagingSenderId: "217918207735",
    appId: "1:217918207735:web:f1952ae59193ad365185f2"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

const getCollection = async (coleccion: string) => {
    return await getDocs(collection(firestore, coleccion))
}

export {
    app,
    storage,
    auth,
    firestore,
    getCollection
}