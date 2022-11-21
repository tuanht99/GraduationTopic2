import React, { useEffect, useState } from 'react'
import {
  Alert,
  Modal,
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { AntDesign } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import {addToCart} from '../../redux/cartItems'

const DATA = {
  txtChonMua: 'CHỌN MUA',
  txtsplq: 'Sản phẩm cùng cửa hàng',
  txtXemCuaHang: 'Xem cửa hàng',
  txtDis: 'Thông tin sản phẩm'
}

import { db } from '../../services/firebase'
import { collection, getDocs, where, query } from 'firebase/firestore'
import {useDispatch, useSelector} from "react-redux";

// Navigation
export default function DetailsScreenView({ route, navigation }) {
  ;<StatusBar animated="true" />
  const {
    title,
    description,
    image,
    price,
    idFood,
    status,
    storeName,
    storeAddress,
    storeImage,
    storeId,
    locationStore
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
  const prices = parseFloat(price)
  const statusParmas = status
  const location = JSON.stringify(locationStore)
    const [modalVisible, setModalVisible] = useState(false)
    const [a, setA] = useState(false)
    const dispatch = useDispatch()
    const carts = useSelector(state => state.carts)

  // console.log(priceOrders);
  // giá trị số lượng
  const [Quantity, setQuantity] = useState(1);
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totals, setTotals] = useState(0)
  // tăng giảm số lượng
  function IncreaseQuantity() {
    if (Quantity > 0) {

      setQuantity(prevState => prevState - 1);

    }
    else {
      setQuantity(0);
    }
  }
  function DecreaseQuantity() {

    setQuantity(prevState => prevState + 1);

  }

  function handleAddToCart() {
      const item = {
          idFood,
          title,
          description,
          image,
          price,
          storeName,
          storeAddress,
          storeImageParams,
          storeId,
          Quantity
      }
      dispatch(addToCart(item));
    setModalVisible(!modalVisible)
    setQuantity(1)
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
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
    React.useEffect(() => {
        let total = 0
        let totalQuantity = 0
        if (carts.length > 0) {
            console.log('carts:', carts)
            carts.map((item) => {
                item.items.forEach(e => {
                    total += e.price * e.Quantity
                    totalQuantity += e.Quantity
                })
            })
            setA(true)
        } else {
            setA(false)
        }
        setTotals(total)
        setTotalQuantity(totalQuantity)
    },[carts])

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 0.85 }}>
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
              {priceParams}
            </Text>
            <Text numberOfLines={2} style={{ paddingBottom: 20 }}>
              {storeAddress}
            </Text>
          </View>

          <View style={{ marginLeft: 10 }}>
            {statusParmas === 1 ? (
              <TouchableOpacity
                style={{
                  backgroundColor: '#E94730',
                  borderRadius: 15,
                  width: '97%',
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onPress={() => setModalVisible(true)}
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
                top: 0,
                marginTop: 0,
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

                <Text
                  numberOfLines={1}
                  style={{ color: '#808080', width: 190 }}
                >
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
                      idFood: item.id,
                      title: item.name,
                      image: item.image,
                      description: item.description,
                      price: item.price,
                      storeName: storeName,
                      storeAddress: storeAddress,
                      storeImage: storeImage,
                      status: item.status
                    })
                  }
                  style={{ justifyContent: 'flex-start', flexDirection: 'row' }}
                >
                  <View style={{ paddingRight: 5, flex: 1 }}>
                    <Image
                      source={{ uri: item.image }}
                      style={{ width: 70, height: 70, borderRadius: 5 }}
                    />
                    <Text numberOfLines={1} style={{ fontSize: 12, width: 70 }}>
                      {item.name}
                    </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 12 }}>
                      {item.price}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <View style={{margin: 20}}>

            </View>
          </View>
        </View>

        {/* GD moiws */}
        {/* chọn số lượng món */}

        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.')
              setModalVisible(!modalVisible)
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: '#ffe6ff',
                paddingTop: 10,
                width: '100%',
                borderTopColor: '#808080',
                borderTopWidth: 0.3,
                top: '80%'
              }}
            >
              <View style={{ marginLeft: 10 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderBottomColor: '#808080',
                    alignItems: 'center',
                    paddingBottom: 10,
                    marginRight: 10
                  }}
                >
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                          setModalVisible(!modalVisible)
                          setQuantity(1)
                      }}
                      numberOfLines={1}
                      style={{ color: '#808080' }}
                    >
                      <Feather name="x" size={24} color="black" />
                    </TouchableOpacity>
                  </View>
                  <View style={{ paddingLeft: '35%' }}>
                    <Text style={{ paddingRight: 10, fontWeight: 'bold' }}>
                      Thêm món
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    paddingTop: 10,
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}
                >
                  <View style={{ width: '47%' }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        flex: 0.4,
                        paddingRight: 10,
                        alignItems: 'center'
                      }}
                    >
                      <View>
                        <TouchableOpacity
                          style={{
                            backgroundColor: '#fff',
                            borderRadius: 5,
                            width: 20,
                            height: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 0.3,
                            borderColor: '#808080'
                          }}
                          onPress={() => {
                            IncreaseQuantity()
                          }}
                        >
                          <Text style={{ fontWeight: 'bold' }}>-</Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <Text style={{ fontWeight: 'bold' }}>
                          {Quantity}
                        </Text>
                      </View>
                      <View>
                        <TouchableOpacity
                          style={{
                            backgroundColor: '#fff',
                            borderRadius: 5,
                            width: 20,
                            height: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 0.3,
                            borderColor: '#808080'
                          }}
                          onPress={() => {
                            DecreaseQuantity()
                          }}
                        >
                          <Text style={{ fontWeight: 'bold' }}>+</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity
                    // onPress={() =>
                    //   navigation.navigate('CartView', {
                    //     nameOrder: nameOrder,
                    //     priceOrder: priceOrder,
                    //     ImageOrder: imageParams,
                    //     idFood: idFood,
                    //     Totals: Total,
                    //     Quantity: Quantity,
                    //     storeOrder,
                    //      storeN,
                    //      storeAdr,
                    //      storeIM,
                    //      storeID,
                    //      locationStore
                    //   })
                    // }
                    onPress={handleAddToCart}
                    style={{
                      backgroundColor: '#E94730',
                      borderRadius: 15,
                      width: '49%',
                      height: 40,
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Text
                      // onPress={inputHandler}
                      style={{ color: '#fff' }}
                    >
                      Thêm +{Quantity * prices}đ
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>

        {/* Đã thêm vào giỏ */}
      </ScrollView>

      {a && (
        <View style={{ flex: 0.15, bottom: 0 }}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              paddingTop: 10,
              paddingBottom: 10,
              width: '100%',
              borderTopColor: '#808080',
              borderTopWidth: 0.3,

            }}
          >
            <View style={{ marginLeft: 10 }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                <View style={{ width: '47%' }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      
                      paddingRight: 10,
                      alignItems: 'center'
                    }}
                  >
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableOpacity onPress={() => navigation.navigate('CartView')}>
                        <View
                          style={{
                            flex: 1,
                            backgroundColor: '#fff',
                            padding: 10,
                            borderRadius: 15,
                            borderWidth: 0.3,
                            borderColor: '#808080'
                          }}
                        >
                          <View>
                            <AntDesign
                              name="shoppingcart"
                              size={19}
                              color="black"
                            />
                          </View>
                          <View
                            style={{
                              position: 'absolute',
                              zIndex: 1,
                              bottom: 30,
                              right: 0
                            }}
                          >
                            <View
                              style={{
                                backgroundColor: 'red',
                                borderRadius: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 20,
                                height: 18
                              }}
                            >
                              <Text style={{ color: '#fff' }}>{totalQuantity}</Text>
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                      <View
                        style={{
                          paddingLeft: 20,
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        <View>
                            <Text style={{ fontWeight: 'bold' }}>{totals}</Text>
                        </View>
                        <View>
                          <Text>(tạm tính)</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>

                <TouchableOpacity
                  onPress={() => navigation.navigate('OrderView', {
                      carts: carts,

                  })}
                  style={{
                    backgroundColor: '#E94730',
                    borderRadius: 15,
                    width: '49%',
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Text
                    // onPress={inputHandler}
                    style={{ color: '#fff' }}
                  >
                    Đặt đơn
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  )
}
