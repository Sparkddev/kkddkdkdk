// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { initializeFirestore, CACHE_SIZE_UNLIMITED, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional






const firebaseConfig = {
  apiKey: "AIzaSyDQBCJog_t6I5NeefZxE3PQdeTn_fqVfHQ",
  authDomain: "metis-6f091.firebaseapp.com",
  projectId: "metis-6f091",
  storageBucket: "metis-6f091.appspot.com",
  messagingSenderId: "1037568581376",
  appId: "1:1037568581376:web:92811a055bb675c7d79de5"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//const db = getFirestore(app);

// const db = initializeFirestore(app, {
//     cacheSizeBytes: CACHE_SIZE_UNLIMITED,
//   });

const db = initializeFirestore(app, {
    localCache: persistentLocalCache({
      tabManager: persistentMultipleTabManager(),
      settings: {
        cacheSizeBytes: CACHE_SIZE_UNLIMITED,
      },
    }),
  });


  const auth = getAuth(app);


  export {auth, db};