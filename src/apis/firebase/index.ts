import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  
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