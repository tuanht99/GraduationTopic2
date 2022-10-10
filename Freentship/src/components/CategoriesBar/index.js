import {Text, TouchableOpacity,ScrollView} from 'react-native'
import React, { useState, useEffect } from 'react'
import { db } from '../../services/firebase'
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
  collectionGroup
} from 'firebase/firestore'

export default function CategoriesBar() {

  const [foodId, setFootId] = useState(1)
  console.log(foodId);
  const headleChangeColor = (value) => (
      setFootId(value)
  )

  
  const [categories, setCategory] = useState([])

  console.log(categories)

  useEffect(() => {
    const getCategory = async () => {
      const categories = []
      const foodRef = collection(db, 'categories')
      const querySnapshot = await getDocs(foodRef)
      querySnapshot.forEach(doc => {
        categories.push({ ...doc.data(), id: doc.id })
      })
      setCategory(categories)
    }
    getCategory()
  }, [])

  return (
    <ScrollView horizontal>
      {categories.map(item => (
        <TouchableOpacity
          onPress={() => {
            setFootId(item.id)
          }}
        >
          <Text
            style={{
              fontSize: 20,
              marginLeft: 20,
              textDecoration: 'underline',
              color: foodId === item.id ? 'red' : 'black'
            }}
          >
            {item.category_Name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}
