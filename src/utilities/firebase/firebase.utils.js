// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {
  // signInWithPopup,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore/lite";
import { firebaseConfig } from "./firebase.config";
import { firestore as db } from "./firebase.utils";

import { articles } from "./data/articles_init_data";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

export const getStoredDocumentsPromise = getDocs(
  collection(db, "articles"),
).then((querySnapshot) =>
  querySnapshot.docs.map((docsnapshot) => docsnapshot.data()),
);

export const auth = getAuth();

//To initialize articles data
export const initializeItemsData = async () => {
  const { data } = articles;

  data.forEach(async (article, idx) => {
    const article_id = String(idx);
    const docRef = doc(db, "articles", article_id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      try {
        await setDoc(doc(db, "articles", article_id), {
          id: idx,
          title: article.title,
          category: article.category,
          published_date: article.published_date,
          closing: article.closing,
          text: article.text,
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  });
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserEmailAndPassword = async (auth, email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject,
    );
  });
};

export const getStoredPicturesPromise = getDocs(collection(db, "images")).then(
  (res) => res.docs.map((docsnapshot) => docsnapshot.data()),
);
