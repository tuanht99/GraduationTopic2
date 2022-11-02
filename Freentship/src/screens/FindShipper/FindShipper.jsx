import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native'
import React, { useEffect, useState } from 'react'

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
      navigation.goBack()
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
    }, 5000)

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

  return orderStatus.shipperId == '' ? (
    <View style={styles.container}>
      {/* <BouncingPreloader
        icons={icons}
        leftDistance={-100}
        rightDistance={-150}
        speed={1000}
      /> */}

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
    </View>
  ) : (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'blue' }}>
        Yế đã có tài xế cho đơn hàng của bạn
      </Text>
    </View>
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
