import React, { useState, useEffect, useRef } from 'react'
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native'
import Styles from './StoreStyle'

import { AntDesign } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { Octicons } from '@expo/vector-icons'
import { Fontisto } from '@expo/vector-icons'
import { DATA } from './DataAo'
import CategoriesBar from '../../components/CategoriesBar'
import ListFood from '../../components/ListFood'
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

function StoreScreen({ navigation }) {
  const [stores, setStores] = useState([])
  const storeID = '7T5uG3Si5NHioADgam1Z'
  console.log('STORE : ', stores)

  useEffect(() => {
    const getStore = async () => {
      //   const foodRef = collection(db, 'food_stores')
      //   const q = query(foodRef, where('id', '==', '7T5uG3Si5NHioADgam1Z'))
      //   const querySnapshot = await getDocs(q)
      //   querySnapshot.forEach(doc => {
      //     console.log(doc.id, " => ", doc.data())
      //     // setStores(stores.push({ ...doc.data(), id: doc.id }))
      //   })
      const store = []
      getDoc(doc(db, 'food_stores', '7T5uG3Si5NHioADgam1Z')).then(docData => {
        if (docData.exists()) {
          store.push(docData.data())
        } else {
          console.log('No such a data!')
        }
        setStores(store)
      })
    }

    getStore()
  }, [])

  const [count, setCount] = useState(null)
  //   console.log('hjhj', count)
  const HeaderComponent = () => (
    <View>
      {stores.map(data => (
        <View>
          <ImageBackground style={Styles.imgFood} source={{ uri: data.image }}>
            <TouchableOpacity
              style={[Styles.iconCicle, Styles.rightIcon]}
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="arrowleft" size={21} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={[Styles.iconCicle, Styles.heartIcon]}>
              <AntDesign name="heart" size={21} color="red" />
            </TouchableOpacity>
            <TouchableOpacity style={[Styles.iconCicle, Styles.srearchIcon]}>
              <FontAwesome5 name="search" size={21} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={[Styles.iconCicle, Styles.sharechIcon]}>
              <FontAwesome5 name="external-link-alt" size={21} color="#000" />
            </TouchableOpacity>
          </ImageBackground>

          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#FF3333',
              justifyContent: 'center',
              borderRadius: 30,
              padding: 3,
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20,
              maxWidth: '100%'
            }}
          >
            <FontAwesome5 name="star" size={18} color="#fff" />
            <Text style={{ color: '#fff', marginLeft: 15 }}>{data.slogan}</Text>
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10
            }}
          >
            {data.name}
          </Text>

          <View style={Styles.btnCategory}>
            <TouchableOpacity style={Styles.category}>
              <Text>Ăn sáng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.category}>
              <Text>Ăn trưa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.category}>
              <Text>Ăn tối</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              alignItems: 'center'
            }}
          >
            <Octicons name="location" style={Styles.loation} />
            <Text style={{ minWidth: 100 }}>3Km</Text>
            {data.status === 1 ? <Text style={[Styles.orderStatusTrue, Styles.ml15]}>
              Đang mở cửa
            </Text> : <Text style={[Styles.orderStatusFalse, Styles.ml15]}>
              Chưa mở cửa
            </Text>}
            
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 40,
              marginTop: 5
            }}
          >
            <Fontisto
              name="star"
              size={25}
              color="#FFCC00"
              style={{ marginRight: 5 }}
            />
            <Text
              style={{
                marginRight: 50,
                fontSize: 17,
                color: '#000',
                fontWeight: 'bold',
                borderRadius: 10,
                backgroundColor: '#FFFF99'
              }}
            >
              {' '}
              4.1 <Text style={{ color: '#666666', fontSize: 15 }}>(15+)</Text>
            </Text>
            <TouchableOpacity>
              {/* onPress={() => navigation.navigate('RatingView')} */}
              <Text style={{ color: '#0099FF', minWidth: 100 }}>Xem thêm</Text>
            </TouchableOpacity>
          </View>

          <View style={[Styles.mr10, Styles.horizonline]} />
          <View style={{ flexDirection: 'row', marginLeft: 10 }}>
            <FontAwesome5
              name="shipping-fast"
              size={24}
              color="black"
              style={{ marginRight: 20 }}
            />
            <Text>FreeShip dưới 2km</Text>
          </View>
          <View style={[Styles.mr10, Styles.horizonline]} />
        </View>
      ))}
    </View>
  )

  const Store = () => (
    <FlatList
      data={stores}
      renderItem={() => (
        <View>
          <HeaderComponent />
          <CategoriesBar categoriesData={setCount} />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10
            }}
          >
            Bánh ướt ram giò
          </Text>
          <ListFood storeName = {stores[0].name} storeImage = {stores[0].image} storeAddress = {stores[0].address} navigation={navigation} categoriesData={count} />
        </View>
      )}
    ></FlatList>
  )

  return (
    <SafeAreaView style={Styles.container}>
      <Store />
    </SafeAreaView>
  )
}

export default StoreScreen
