import { Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
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
import { DATAFOOD } from '../../screens/Store/DataAo'
import { async } from '@firebase/util'
import { food } from '../../screens/Store/FoodFirebase'

export default function CategoriesBar({ categoriesData }) {
  const [foodId, setFootId] = useState('')
  const idCateAll = ''
  categoriesData(foodId)
  const [categories, setCategory] = useState([])

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

  // useEffect(() => {
  //   categoriesData(foodId)
  // }, [foodId])

  // console.log('food', foodId)

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity
        onPress={() => {
       setFootId(idCateAll)
        }}
      >
        {foodId === idCateAll ? (
          <Text style={styles.textT}>Tất cả</Text>
        ) : (
          <Text style={styles.textF}>Tất cả</Text>
        )}
      </TouchableOpacity>

      {categories.map(item => (
        <TouchableOpacity
          onPress={() => {
            setFootId(item.id)
          }}
        >
          {foodId === item.id ? (
            <Text style={styles.textT}>{item.category_Name}</Text>
          ) : (
            <Text style={styles.textF}>{item.category_Name}</Text>
          )}
        </TouchableOpacity>
      ))}

      {/* {DATAFOOD[0].categories.map(item => {
        
        return (
          <TouchableOpacity
          setFootId = {item.id}
          
          onPress={() => {
            setFootId(item.id)
            scrollHandler
          }}
        >
          {foodId === item.id ? <Text
          
            style={
              styles.textT
            }
          >
            {item.name}
          </Text> : <Text
            style={
              styles.textF
            }
          >
            {item.name}
          </Text>}
          
        </TouchableOpacity>
        )
       
      })} */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  textT: {
    fontSize: 20,
    marginLeft: 20,
    textDecoration: 'underline',
    color: 'red',
    borderBottomColor: 'red',
    borderBottomWidth: 1
  },
  textF: {
    fontSize: 20,
    marginLeft: 20,
    textDecoration: 'underline'
  }
})
