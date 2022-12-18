import React, { useState, useEffect } from 'react'
import { Text, View, Image, TouchableOpacity, FlatList , Alert  } from 'react-native'
import { DeleteLoveStore, getStoreinfo } from '../services'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../services/firebase'
import { useSelector } from 'react-redux'

import { Octicons } from '@expo/vector-icons'

import { AntDesign } from '@expo/vector-icons'
import AppStyle from '../themes/IndexTheme'


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

  const confirmDelete = (id , name) =>
    Alert.alert(
      `Xóa cửa hàng ${name}`,
      "Bạn có chắc chắn muốn xóa cửa hàng này chứ ?",
      [
        {
          text: "Trở về",
          onPress: () => console.log("Trở về"),
          style: "cancel"
        },
        { text: "Xóa", onPress: () => deleteLoveStore(id) }
      ]
    );

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

              
            </View>
            {/* <TouchableOpacity onPress={() => deleteLoveStore(item.id)}> */}
            <TouchableOpacity onPress={() => confirmDelete(item.id , item.data.name)}>
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
