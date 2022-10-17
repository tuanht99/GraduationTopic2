import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, Image, Text, TouchableOpacity } from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'

const DATA = {
  txtChonMua: 'CHỌN MUA',
  txtsplq: 'Sản phẩm cùng cửa hàng',
  txtXemCuaHang: 'Xem cửa hàng',
  txtDis: 'Thông tin sản phẩm'
}

import { db } from '../../services/firebase'
import { collection, getDocs, where, query } from 'firebase/firestore'

// Navigation
export default function DetailsScreenView({ route, navigation }) {
  const {
    title,
    description,
    image,
    price,
    status,
    storeName,
    storeAddress,
    storeImage,
    storeId
  } = route.params
  const [foodOfStore, setFoodOfStore] = useState([])
  useEffect(() => {
    const getFood = async () => {
      const foodOfStore = []
      let foodRef = collection(db, 'foods')
      const q = query(foodRef, where('food_store_id', '==', `${storeId}`))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach(doc => {
        foodOfStore.push({ ...doc.data(), id: doc.id, length: doc.length })
      })
      setFoodOfStore(foodOfStore)
    }
    getFood()
  }, [])
  const titleParams = JSON.stringify(title)
  const descriptionParams = JSON.stringify(description)
  const imageParams = image
  const storeNameParams = JSON.stringify(storeName)
  const storeImageParams = storeImage
  const priceParams = JSON.stringify(price)
  const prices = parseFloat(price);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Store')}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      ),

      title: titleParams,
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 15
      }
    })
  }, [navigation])

  return (
    <ScrollView style={{ flex: 1 }}>
      <Image
        source={{ uri: imageParams }}
        style={{
          width: '100%',
          resizeMode: 'contain',
          height: 360,
          marginTop: 10,
          marginBottom: 10
        }}
      />

      {/* thong tin mon */}
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingTop: 10,
          paddingBottom: 10
        }}
      >
        <View style={{ marginLeft: 10 }}>
          <Text
            numberOfLines={2}
            style={{ fontWeight: 'bold', paddingBottom: 10 }}
          >
            {titleParams}
          </Text>
          <Text style={{ fontWeight: 'bold', paddingBottom: 10 }}>
            {prices}
          </Text>
          <Text numberOfLines={2} style={{ paddingBottom: 20 }}>
            {storeAddress}
          </Text>
        </View>

        <View style={{ marginLeft: 10 }}>
          {status === 1 ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('CartView',{
                nameOrder: title,
                priceOrder: price,
              })}
              style={{
                backgroundColor: '#E94730',
                borderRadius: 15,
                width: '97%',
                height: 40,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text style={{ color: '#fff' }}>{DATA.txtChonMua}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              disabled
              onPress={() => navigation.navigate('CartView')}
              style={{
                backgroundColor: '#C0C0C0',
                borderRadius: 15,
                width: '97%',
                height: 40,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text style={{ color: '#fff' }}>Đã bán hết</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={{ paddingBottom: 10 }}></View>

      {/* dis */}
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingTop: 10,
          paddingBottom: 10
        }}
      >
        <View style={{ marginLeft: 10 }}>
          <Text
            numberOfLines={5}
            style={{ fontWeight: 'bold', paddingTop: 10, paddingBottom: 20 }}
          >
            {DATA.txtDis}
          </Text>
          <Text style={{ paddingBottom: 20 }}>{descriptionParams}</Text>
        </View>
      </View>

      <View style={{ paddingBottom: 10 }}></View>

      {/* mon cung cua hang */}
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingTop: 10,
          paddingBottom: 10
        }}
      >
        <View style={{ marginLeft: 10 }}>
          <Text
            style={{ fontWeight: 'bold', paddingTop: 10, paddingBottom: 20 }}
          >
            {DATA.txtsplq}
          </Text>
          {/* shop */}
          <View
            style={{
              flexDirection: 'row',
              paddingBottom: 20,
              alignItems: 'center'
            }}
          >
            <Image
              source={{ uri: storeImageParams }}
              style={{ width: 40, height: 40, borderRadius: 25 }}
            />

            <View style={{ paddingLeft: 10 }}>
              <Text
                numberOfLines={1}
                style={{ fontWeight: 'bold', width: 180 }}
              >
                {storeNameParams}
              </Text>
              <Text>{foodOfStore.length} Sản phẩm</Text>

              <Text numberOfLines={1} style={{ color: '#808080', width: 190 }}>
                {storeAddress}
              </Text>
            </View>

            <View style={{ marginRight: 10 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Store')}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 15,
                  width: 100,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 1,
                  borderColor: '#E94730'
                }}
              >
                <Text style={{ color: '#E94730' }}>{DATA.txtXemCuaHang}</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* mon lien quan */}

          <ScrollView
            style={{ paddingBottom: 10 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {foodOfStore.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  navigation.navigate('DetailsScreenView', {
                    title: item.name,
                    image: item.image,
                    description: item.description,
                    price: item.price,
                    storeName: storeName,
                    storeAddress: storeAddress,
                    storeImage: storeImage
                  })
                }
                style={{ justifyContent: 'flex-start', flexDirection: 'row' }}
              >
                <View style={{ paddingRight: 5, flex: 1 }}>
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: 70, height: 70, borderRadius: 5 }}
                  />
                  <Text numberOfLines={2} style={{ fontSize: 12, width: 70 }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontWeight: 'bold', fontSize: 12 }}>
                    {item.price}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  )
}
