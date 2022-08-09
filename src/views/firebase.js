import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "adfasfavnaAJFDKCnjkasjlkASJLFNKSA",
authDomain: "myapp-d92bc.firebaseapp.com",
projectId: "myapp-d92bc",
storageBucket: "myapp-d92bc.appspot.com",
messagingSenderId: "15645156456156",
appId: "1:15645156456156:web:1516532e652c5459f5f6b44",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth };
export default db;