import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  query,
  doc,
  getDoc,
  onSnapshot,
  where,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";
export async function GetVourcher() {
  const ListUser = [];
  const querySnapshot = await getDocs(collection(db, "vouchers"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshotsa
    ListUser.push({ id: doc.id, ...doc.data() });
  });

  return ListUser;
}
export async function UpdateVourcher(VourcherId,UserID) {
  const washingtonRef = doc(db, 'users', UserID)
  const docSnap = await getDoc(washingtonRef)
  // Set the "capital" field of the city 'DC'
  if (docSnap.exists()) {
    await updateDoc(washingtonRef, {
      vouchers: [...docSnap.data().vouchers, `${VourcherId}`]
    })
    Alert.alert(
      "Thông báo",
      "Lưu mã thành công",
      [
        
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    )
  } else {
    // doc.data() will be undefined in this case
    Alert.alert(
      "Thông báo",
      "Lưu mã thất bại  Mã không tồn tại hoặc đã hết hạn sử dụng",
      [
        
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    )
    console.log('No such document!')
  }
}