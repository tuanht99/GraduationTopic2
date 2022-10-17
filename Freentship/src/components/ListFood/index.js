import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Dimensions
} from 'react-native'
import Styles from '../../screens/Store/StoreStyle'
import { db } from '../../services/firebase'

import { collection, getDocs, where, query } from 'firebase/firestore'
const widthDis = Dimensions.get("window").width
const ListFood = ({
  categoriesData,
  navigation,
  storeName,
  storeAddress,
  storeImage,
  storeId
}) => {
  const [food, setFood] = useState([])
  // console.log('food', food)
  const [loading, setLoading] = useState(false)
  const [categoryId, setCategoryId] = useState('')
  
  useEffect(() => {
    const getFood = async () => {
      const food = []
      let foodRef = collection(db, 'foods')
      let q
      if (categoryId == '') {
        q = query(foodRef, where('food_store_id', '==', `${storeId}`))
      } else {
        foodRef = collection(db, 'foods')
        q = query(
          foodRef,
          where('category_Id', 'array-contains', `${categoryId}`)
        )
      }
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach(doc => {
        food.push({ ...doc.data(), id: doc.id })
      })
      setFood(food)
      setLoading(true)
    }
    getFood()
  }, [categoryId])

  const Loading = () => (
    <ActivityIndicator size="large" color="#E94730" style={{ margin: 150 }} />
  )

  const CategoriesBar = () => (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        onPress={() => {
          setCategoryId('')
        }}
      >
        {categoryId === '' ? (
          <Text style={styles.textT}>Tất cả</Text>
        ) : (
          <Text style={styles.textF}>Tất cả</Text>
        )}
      </TouchableOpacity>

      <FlatList
        horizontal={true}
        data={categoriesData}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              setCategoryId(item.id)
            }}
          >
            {categoryId === item.id ? (
              <Text style={styles.textT}>{item.category_Name}</Text>
            ) : (
              <Text style={styles.textF}>{item.category_Name}</Text>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  )
  const ListFood = () =>
   
      <FlatList
        data={food}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              // [Styles.htrOrder, Styles.disabledButton]
              style={
                item.status === 1
                  ? Styles.htrOrder
                  : [Styles.htrOrder, Styles.disabledButton]
              }
              onPress={() =>
                navigation.navigate('DetailsScreenView', {
                  title: item.name,
                  image: item.image,
                  description: item.description,
                  price: item.price,
                  status: item.status,
                  storeName: storeName,
                  storeAddress: storeAddress,
                  storeImage: storeImage,
                  storeId : storeId,
                  food : food,
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
                <Text style={[Styles.bold, Styles.textSize17]}>
                  {item.name}
                </Text>

                <Text numberOfLines={1} style={Styles.textGif}>
                  {item.description}
                </Text>
                <Text style={{ fontSize: 13 }}>{item.price}</Text>

                {item.status === 1 ? (
                  <Text style={Styles.orderStatusTrue}> Còn bán </Text>
                ) : (
                  <Text style={Styles.orderStatusFalse}>Đã bán hết</Text>
                )}
              </View>
            </TouchableOpacity>
          )
        }}
      ></FlatList>
   
  return (
    <FlatList     
    ListHeaderComponent={loading ? <CategoriesBar /> : <Loading />}
    ListFooterComponent={loading ? <ListFood /> : <Loading />}
/>
    
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

export default ListFood
