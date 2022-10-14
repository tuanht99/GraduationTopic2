import React, { useEffect, useState } from "react";
import { db } from "../../services";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
  where,
  query,
} from "firebase/firestore";

export const [food , setFood] = useState([])
console.log(food)
useEffect(() => {
    const getFood = async () => {
       const food = []
       const foodRef = collection(db , 'foods')
       const q = query(foodRef)
       const querySnapshot = await getDocs(q)
       querySnapshot.forEach((doc) => {
        food.push({...doc.data() , id: doc.id})
       })
       setFood(food)
    }
    getFood()
})