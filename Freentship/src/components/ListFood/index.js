import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Pressable
} from 'react-native'
import Styles from '../../screens/Store/StoreStyle'
import { db } from '../../services'
import Modal from 'react-native-modal'
import formatCash from '../../Components/formatCash'

import { collection, getDocs, where, query } from 'firebase/firestore'

const ListFood = ({
  categoriesData,
  navigation,
  storeName,
  storeAddress,
  storeImage,
  storeId,
  openTime,
  latitude,
  longitude
}) => {
  const [food, setFood] = useState([])
  // console.log('food', food)
  const [loading, setLoading] = useState(false)
  const [categoryId, setCategoryId] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  console.log('storeImage' , storeImage);
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

  // Modal notification close time
  const Moadal = () => (
    <View style={styles.centeredView}>
      <Modal
        isVisible={modalVisible}
        animationIn={'slideInLeft'}
        animationOut={'slideOutRight'}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Rất tiếc hiện tại cửa hàng đang đóng cửa
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Đóng</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )

  const CategoriesBar = () => (
    <View style={{ flexDirection: 'row' }}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={categoriesData}
        renderItem={({ item, index }) => (
          <>
          {index === 0 ? (
            <TouchableOpacity
            className="bg-white pr-4"

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
          ) : null}
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              setCategoryId(item.id)
            }}
          >
            {categoryId === item.id ? (
              <Text style={styles.textT}>{item.name}</Text>
            ) : (
              <Text style={styles.textF}>{item.name}</Text>
            )}
          </TouchableOpacity>
          </>
        )}
      />
    </View>
  )

  // console.log('openTimeaaaa', openTime)
  const ListFood = () => (
    <FlatList
      data={food}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            // [Styles.htrOrder, Styles.disabledButton]
            style={
              item.status === 1
                ? Styles.htrOrderText
                : [Styles.htrOrder, Styles.disabledButton]
            }
            onPress={() => {
              openTime === true
                ? navigation.navigate('DetailsScreenView', {
                    idFood: item.id,
                    title: item.name,
                    image: item.image,
                    description: item.description,
                    price: item.price,
                    status: item.status,
                    storeName: storeName,
                    storeAddress: storeAddress,
                    storeImage: storeImage,
                    storeId: storeId,
                    latitude: latitude,
                    longitude: longitude
                  })
                : setModalVisible(true)
            }}
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
              <Text style={{ fontSize: 13 }}>{formatCash(item.price + '')} đ</Text>

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
  )

  return (
    <View>
      <Moadal />
      <FlatList
        ListHeaderComponent={loading ? <CategoriesBar /> : <Loading />}
        ListFooterComponent={loading ? <ListFood /> : <Loading />}
      />
    </View>
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
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: '#E94730'
  },
  buttonClose: {
    backgroundColor: '#E94730'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
})

export default ListFood
