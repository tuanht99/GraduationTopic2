import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { db } from '../../services/firebase'
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  onSnapshot,
  Animated
} from 'firebase/firestore'
import { ScrollView } from "react-native-gesture-handler";

import { getDistance, getPreciseDistance } from 'geolib'
import BouncingPreloader from 'react-native-bouncing-preloader'
const windowWidth = Dimensions.get('window').width

const FindShipper = ({ navigation, route }) => {
  const icons = [
    'https://www.shareicon.net/data/256x256/2016/05/04/759946_bar_512x512.png',
    'https://www.shareicon.net/data/256x256/2016/05/04/759908_food_512x512.png',
    'https://www.shareicon.net/data/256x256/2016/05/04/759956_food_512x512.png',
    'https://www.shareicon.net/data/256x256/2016/05/04/759954_food_512x512.png',
    'https://www.shareicon.net/data/256x256/2016/05/04/759906_food_512x512.png',
    'https://www.shareicon.net/data/256x256/2016/05/04/759921_food_512x512.png'
  ]

  const { orderId, shipperId, locationStore } = route.params
  console.log('shipperId', shipperId)
  const [orderStatus, setOrderStatus] = useState([])
  console.log('orderStatus', orderStatus)
  const updateOrderStatus = async () => {
    const washingtonRef = doc(db, 'orders', orderId + '')

    await updateDoc(washingtonRef, {
      status: 3
    })
  }

  const getOrderStatus = () => {
    const unsub = onSnapshot(doc(db, 'orders', orderId + ''), doc => {
      setOrderStatus({
        status: doc.data().status,
        shipperId: doc.data().shipper_id
      })
    })
  }
  const getShipper = async () => {
    // Set the order's ID for shipper
    const washingtonRef = doc(db, 'shippers', shipper.id)
    await updateDoc(washingtonRef, {
      lastest_order_id: orderId
    })

    // Set the shipper's ID for the order
    const setShipperInOrder = doc(db, 'orders', orderId)
    await updateDoc(setShipperInOrder, {
      shipper_id: shipper.id
    })
  }

  // Cancel Order
  const cancelOrder = async () => {
    const cancel = doc(db, 'orders', orderId)
    await updateDoc(cancel, {
      status: 9
    }).then(() => {
      navigation.goBack('YourOrderView')
    })
  }

  const [shippers, setShippers] = useState([])
  const [shipper, setShipper] = useState('')

  const getShippers = async () => {
    if (orderStatus.status == 2) {
      let manyShippers = []
      const q = query(
        collection(db, 'shippers'),
        where('isActive', '==', true),
        where('lastest_order_id', '==', '')
      )

      const querySnapshot = await getDocs(q)
      querySnapshot.forEach(doc => {
        manyShippers.push({
          id: doc.id,
          ...doc.data(),
          distance:
            getPreciseDistance(
              {
                latitude: locationStore._lat,
                longitude: locationStore._long
              },
              {
                latitude: doc.data().location._lat,
                longitude: doc.data().location._long
              }
            ) * 1
        })
      })
      setShippers(manyShippers)
    }
  }

  useEffect(() => {
    getOrderStatus()
  }, [])

  useEffect(() => {
    const myTimeout = setTimeout(() => {
      getShippers()
    }, 3000)

    return () => clearTimeout(myTimeout)
  }, [orderStatus])

  useEffect(() => {
    if (shippers.length > 0 && orderStatus != 9) {
      const shipper = shippers.reduce((prev, curr) =>
        prev.distance < curr.distance ? prev : curr
      )
      if (shipper.distance < 5000) {
        setShipper(shipper)
        updateOrderStatus()
      }
    }
  }, [shippers])

  useEffect(() => {
    if (shipper != '') {
      getShipper()
    }
  }, [shipper])

  const [inYourOrder, setInYourOrder] = useState([]);

  //get information of yourorer
  useEffect(() => {
    let unsubscribe;
    setInYourOrder(null);
    const getYourOrder = async () => {
      const orderRef = collection(db, "orders");
      const c = query(
        orderRef
        // where("category_Id", "==", category.id)
      );
      console.log(collection(db, "orders"));
      const querySnapshot = await getDocs(c);
      const inYourOrder = [];
      unsubscribe = onSnapshot(c, (querySnapshot) => {
        setInYourOrder(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      });
    };
    getYourOrder();
    return unsubscribe;
  }, []);
  console.log('ordersset', inYourOrder)
  
  // food
  const idFood = '0w1IntroHd8JwVvD9tTz'
  const [food, setFood] = useState([])
  useEffect(() => {
    const fs = onSnapshot(doc(db, 'foods', idFood), doc => {
      console.log('food: ', doc.data())
      setFood(doc.data())
    })
  }, [idFood])
  const foodName = food.name

  // order
  const idOrder = 'PPKK6atKTPOzCZWYvHF9'
  const [Order, setOrder] = useState([])
  useEffect(() => {
    const odr = onSnapshot(doc(db, 'orders', idOrder), doc => {
      console.log('ordero: ', doc.data())
      setOrder(doc.data())
    })
  }, [idOrder])
  //const totalPrice = Order.totalPrice

  // order status
  const idOrderStatus = '9'
  //const [orderStatus, setOrderStatus] = useState([])
  useEffect(() => {
    const odr = onSnapshot(doc(db, 'order_status',idOrderStatus), doc => {
      console.log('ordestatus: ', doc.data())
      setOrderStatus(doc.data())
    })
  }, [idOrder])
  const OrderStatus = orderStatus.value

  // foodStore
  const idFoodStore = '4dpAvRWJVrvdbml9vKDL'
  const [foodStore, setFoodStore] = useState([])
  useEffect(() => {
    const fs = onSnapshot(doc(db, 'food_stores', idFoodStore), doc => {
      console.log('foodStore: ', doc.data())
      setFoodStore(doc.data())
    })
  }, [idFoodStore])
  const foodStoreName = foodStore.name
  const foodStoreImage = foodStore.image
  const foodStoreAddress = foodStore.address

  return orderStatus.shipperId == '' ? (
    <View style={styles.container}>
      <BouncingPreloader
        icons={icons}
        leftDistance={-100}
        rightDistance={-150}
        speed={1000}
      />

      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'blue' }}>
        Đang tìm tài xế .....{' '}
      </Text>

      <TouchableOpacity
        onPress={() => cancelOrder()}
        style={{
          backgroundColor: '#E94730',
          borderRadius: 15,
          width: '97%',
          height: 40,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text style={{ color: '#fff' }}>Hủy đơn</Text>
      </TouchableOpacity>

      <ScrollView data={inYourOrder} style={{ flex: 1 }}>
        <View style={{ paddingBottom: 10 }}></View>

        {/* cam on */}
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            paddingTop: 20,
            paddingBottom: 20
          }}
        >
          <View style={{ marginLeft: 10 }}>
            <Text>Cảm ơn</Text>
            <Text style={{ fontWeight: 'bold', color: '#000' }}>
              {setInYourOrder.price}
            </Text>

            <Text>đã cho freentship có cơ hội được phuc vụ</Text>
          </View>
        </View>

        <View style={{ paddingBottom: 10 }}></View>

        {/* mã đơns\ */}
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            paddingTop: 20,
            paddingBottom: 10,
            borderBottomWidth: 0.3,
            borderBottomColor: '#808080'
          }}
        >
          <View style={{ marginLeft: 10 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 10
              }}
            >
              <View>
                <Text numberOfLines={1} style={{ paddingBottom: 10 }}>
                  Mã đơn {idOrder}
                </Text>
              </View>

              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('DetailOrderView')}
                >
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: '#00C2FF',
                      paddingRight: 10
                    }}
                  >
                    Xem chi tiết
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ flexDirection: 'row', paddingBottom: 20 }}>
              <View style={{ justifyContent: 'center', paddingRight: 10 }}>
                <MaterialCommunityIcons
                  name="food-fork-drink"
                  size={24}
                  color="#E94730"
                />
              </View>

              <View>
                <Text>Nơi bán hàng</Text>
                <Text numberOfLines={2} style={{ fontWeight: 'bold' }}>
                  {foodStoreName}
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ justifyContent: 'center', paddingRight: 10 }}>
                <AntDesign name="enviroment" size={24} color="#E94730" />
              </View>

              <View>
                <Text>Nơi giao hàng</Text>
                <Text
                  numberOfLines={2}
                  style={{ fontWeight: 'bold', width: 320 }}
                >
                  {foodStoreAddress}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* x món */}
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            paddingTop: 20,
            paddingBottom: 10
          }}
        >
          <View style={{ marginLeft: 10 }}>
            <View>
              <Text numberOfLines={1}>1 món | {foodName}</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 10
              }}
            >
              <View>
                <Text style={{ fontWeight: 'bold' }}>Tổng</Text>
              </View>
              <View style={{ marginRight: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>
                  {/* {totalPrice} */}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ paddingBottom: 10 }}></View>

        {/* Liên hệ */}
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            paddingTop: 20,
            paddingBottom: 10
          }}
        >
          <View style={{ marginLeft: 10 }}>
            <View style={{ paddingTop: 20, paddingBottom: 20 }}>
              <Text style={{ fontWeight: 'bold' }}>
                Liên hệ - CHKH Freentship
              </Text>
              <Text numberOfLines={2}>
                Freentship sẵn sàng hỗ trợ trong trường hợp quý khách gặp sự cố
                với đơn hàng
              </Text>
              <Text>
                Hotline: <Text style={{ fontWeight: 'bold' }}>123456789</Text>
              </Text>
              <Text>
                Email:{' '}
                <Text style={{ fontWeight: 'bold' }}>freentship@lozi.vn</Text>
              </Text>
              <Text>
                Facebook: <Text style={{ fontWeight: 'bold' }}></Text>
                facebook.com/FreeshipVN
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  ) : (
    // <View>
    //   <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'blue' }}>
    //     Yế đã có tài xế cho đơn hàng của bạn
    //   </Text>
    // </View>
    navigation.navigate("YourOrderView")
  )
}

export default FindShipper

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
})
