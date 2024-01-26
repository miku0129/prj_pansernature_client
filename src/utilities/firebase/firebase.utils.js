// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { firebaseConfig } from "./firebase.config";

import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore/lite";
import { firestore as db } from "./firebase.utils";

//To initialize articles data
import { articles } from "./data/articles_init_data";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

export const getAllDocuments = async () => {
  const querySnapshot = await getDocs(collection(db, "articles"));
  return querySnapshot.docs.map((docsnapshot) => docsnapshot.data());
};

export const initializeItemsData = async () => {
  const { data } = articles;
  console.log("data", data);

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
          text: article.text
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  });
};