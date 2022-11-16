import { db } from './config';
import {collection, doc, getDoc, onSnapshot} from "firebase/firestore";

export const getShippers = async (id) => {
    const data = []
    const shipRef = doc(db, "shippers", "1Xi8FCf7RzdWT48YJJCDboJUVh33");
    const unsubscribe =  onSnapshot(shipRef, (querySnapshot) => {
        console.log("Current data: ", querySnapshot.data());
        data.push(querySnapshot.data())
    });
    unsubscribe()
    return data
}