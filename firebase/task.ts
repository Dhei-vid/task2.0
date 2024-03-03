import { db } from "./utils";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore/lite";

export const getTask = async () => {
  const collectionRef = collection(db, "tasks");
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);

  return querySnapShot.docs.map((doc) => {
    doc.data();
  });
};
