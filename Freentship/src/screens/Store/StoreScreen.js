import Spinner from 'react-native-loading-spinner-overlay'
import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator
} from 'react-native'
import Styles from './StoreStyle'

import { AntDesign } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { Octicons } from '@expo/vector-icons'
import { Fontisto } from '@expo/vector-icons'
import ListFood from '../../components/ListFood'
import { db } from '../../services/firebase'
import { doc, onSnapshot, getDoc } from 'firebase/firestore'

function StoreScreen({ navigation }) {
  const [loading, setLoading] = useState(false)
  const [stores, setStores] = useState([])
  const [categories, setCategory] = useState([])
  const storeId = '4dpAvRWJVrvdbml9vKDL'
  useEffect(() => {
    const cate = []
    const unsubscribe = onSnapshot(
      doc(db, 'food_stores', `${storeId}`),
      item => {
        setStores({
          id: item.id,
          ...item.data()
        })

        item.data().food_categories.forEach(e => {
          getDoc(doc(db, 'categories', `${e}`)).then(doc => {
            cate.push({
              ...doc.data(),
              id: doc.id
            })
            setCategory(cate)
          })
        })
        setLoading(true)
      }
    )

    return unsubscribe
  }, [storeId])

  const Loading = () => (
    <ActivityIndicator size="large" color = '#E94730'/>
  )

  const HeaderComponent = () => (
    <View>
      <View>
        <ImageBackground style={Styles.imgFood} source={{ uri: stores.image }}>
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
          <Text style={{ color: '#fff', marginLeft: 15 }}>{stores.slogan}</Text>
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
          {stores.name}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            alignItems: 'center'
          }}
        >
          <Octicons name="location" style={Styles.loation} />
          <Text style={{ minWidth: 100 }}>3Km</Text>
          {stores.status === 1 ? (
            <Text style={[Styles.orderStatusTrue, Styles.ml15]}>
              Đang mở cửa
            </Text>
          ) : (
            <Text style={[Styles.orderStatusFalse, Styles.ml15]}>
              Chưa mở cửa
            </Text>
          )}
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
    </View>
  )

  const Store = () => (
    <View>
      <ScrollView>
        <View>
          <HeaderComponent />
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
        </View>
      </ScrollView>
    </View>
  )

  return (
    <SafeAreaView style={Styles.container}>
      <FlatList
        ListHeaderComponent={
          loading ? (
            <HeaderComponent />
          ) : (
            <Loading/>
          )
        }
        ListFooterComponent={
            <ListFood
              categoriesData={categories}
              navigation={navigation}
              storeName={stores.name}
              storeAddress={stores.address}
              storeImager={stores.image}
              storeId={storeId}
            />
        }
      />
    </SafeAreaView>
  )
}

export default StoreScreen
