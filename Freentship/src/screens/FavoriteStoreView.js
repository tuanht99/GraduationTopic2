import React, { useState, useEffect } from 'react'
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import Longxaodua from '../assets/icon.png'
import { DeleteLoveStore, getStoreinfo } from '../services'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../services/firebase'
import { useSelector } from 'react-redux'

import { Octicons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import AppStyle from '../themes/IndexTheme'

const DATA = [
  {
    id: 1,
    image: Longxaodua,
    name: 'Lòng xòa dưa',
    discription: 'Nhiều lòng ít dưa',
    location: '3 km',
    relationship: 'Đối tác lo ship',
    price: '30.000',
    status: 'Đang mở cửa'
  }
]

export default function FavoriteStore({ navigation }) {
  const [favorites, setFavorites] = useState([])
  const user_id = useSelector(state => state.user)
 

  useEffect(() => {
    const washingtonRef = doc(db, 'users', user_id.id)

    const unsub = onSnapshot(washingtonRef, doc => {
      if (doc.exists()) {
        setFavorites([])
        doc.data().loveStore.forEach(element =>
          getStoreinfo(element).then(e => {
            setFavorites(prev => [...prev, e])
          })
        )
      } else {
        console.log('No such document!')
      }
    })

    return () => {
      unsub
    }
  }, [])

  const deleteLoveStore = storeId => {
    console.log('user_id.id' , user_id.id , storeId )
    DeleteLoveStore(user_id.id, `${storeId}`)
  }

  return (
    <View style={AppStyle.FavoriteStoreTheme.container}>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={AppStyle.InforUserTheme.htrOrder}
            onPress={() =>
              navigation.navigate('StoreScreen', { id: item.id })
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
                  width: 100,
                  borderRadius: 15,
                  overflow: 'hidden',
                  resizeMode: 'contain'
                }}
                source={{ uri: item.data.image }}
              />
            </View>
            <View style={{ flexDirection: 'column', flex: 4 }}>
              <Text
                style={[
                  AppStyle.InforUserTheme.bold,
                  AppStyle.InforUserTheme.textSize17
                ]}
              >
                {item.data.name}
              </Text>

              <View style={{ flexDirection: 'row' }}>
                <Octicons
                  name="location"
                  style={AppStyle.FavoriteStoreTheme.icon}
                />
                <Text numberOfLines={2} className="w-[90%]">
                  {item.data.address}
                </Text>
              </View>

              {item.status === 1 ? (
                <Text style={AppStyle.InforUserTheme.orderStatusTrue}>
                  Mở cửa
                </Text>
              ) : (
                <Text style={AppStyle.InforUserTheme.orderStatusFalse}>
                  Chưa mở cửa
                </Text>
              )}
            </View>
            <TouchableOpacity onPress={() => deleteLoveStore(item.id)}>
              <AntDesign
                name="delete"
                size={24}
                color="black"
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  )
}
