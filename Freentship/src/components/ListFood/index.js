import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { DATAFOOD } from '../../screens/Store/DataAo'
import Styles from '../../screens/Store/StoreStyle'
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

const ListFood = ({ navigation, categoriesData }) => {
  
 console.log('aaaaaaaaaa',categoriesData)

  const [food, setFood] = useState([])


  useEffect(() => {
    const getFood = async () => {
      const food = []
      const foodRef = collection(db, 'foods')
    //  const q = query(foodRef, where("category_Id", "array-contains", `${categoriesData}`));
      const querySnapshot = await getDocs(foodRef)
      querySnapshot.forEach(doc => {
        food.push({ ...doc.data(), id: doc.id })
      })
      setFood(food)
    }
    getFood()
    
  }, [])

  return (
    <FlatList
      data={food}
      keyExtractor ={item => item.id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            style={Styles.htrOrder}
            onPress={() =>
              navigation.navigate('DetailsScreenView', {
                title: item.name,
                image: item.image,
                description: item.discription,
                price: item.price
              })
            }
          >
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Image
                style={{
                  height: 90,
                  width: 90,
                  borderRadius: 15,
                  overflow: 'hidden',
                  resizeMode: 'contain'
                }}
                source={{ uri: item.image }}
              />
            </View>

            <View style={{ flexDirection: 'column', flex: 4 }}>
              <Text style={[Styles.bold, Styles.textSize17]}>{item.name}</Text>

              <Text numberOfLines={1} style={Styles.textGif}>
                {item.description}
              </Text>
              <Text style={{ fontSize: 13 }}>{item.price}</Text>

              {item.status === 1 ? (
                <Text style={Styles.orderStatusTrue}> Đang mở cửa </Text>
              ) : (
                <Text style={Styles.orderStatusFalse}>Đang đóng cửa</Text>
              )}
            </View>
          </TouchableOpacity>
        )
      }}
    ></FlatList>
  )
}
export default ListFood
