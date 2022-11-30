import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { db } from '../../services/firebase'
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  onSnapshot
} from 'firebase/firestore'

import { getDistance, getPreciseDistance } from 'geolib'

const FindShipper = ({ navigation, route }) => {
  const { orderId, locationStore } = route.params
  const [orderStatus, setOrderStatus] = useState([])
  const [shippers, setShippers] = useState([])
  const [shipper, setShipper] = useState('')

  const getShipper = async () => {
    // Set the order's ID for shipper
    const washingtonRef = doc(db, 'shippers', shipper.id)
    await updateDoc(washingtonRef, {
      lastestOrderID: orderId
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

  const getShippers = async () => {
    if (orderStatus.status == 2) {
      let manyShippers = []
      const q = query(
        collection(db, 'shippers'),
        where('isActive', '==', true),
        where('lastestOrderID', '==', '')
      )

      const querySnapshot = await getDocs(q)
      querySnapshot.forEach(doc => {
        console.log('loggggg', doc.data())
        manyShippers.push({
          id: doc.id,
          ...doc.data(),
          distance:
            getPreciseDistance(
              {
                latitude: locationStore.latitude,
                longitude: locationStore.longitude
              },
              {
                latitude: doc.data().location.latitude,
                longitude: doc.data().location.longitude
              }
            ) * 1
        })
      })

      setShippers(manyShippers)
    }
  }

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'orders', orderId + ''), doc => {
      setOrderStatus({
        status: doc.data().status,
        shipperId: doc.data().shipper_id
      })
    })

    return () => {
      unsub
    }
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
        // updateOrderStatus()
      }
    }
  }, [shippers])

  useEffect(() => {
    if (shipper != '') {
      getShipper()
    }
  }, [shipper])

  return orderStatus.shipperId !== '' && orderStatus.status == 3 ? (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'blue' }}>
        Yế đã có tài xế cho đơn hàng của bạn
      </Text>
    </View>
  ) : (
    <View className="flex-1 text-white m-5">
      <View className="flex justify-center items-center p-6">
        <Image
          className="w-[100px] h-[100px] "
          source={{
            uri: 'https://media.tenor.com/e01tMfpXv2kAAAAi/looking-spying.gif'
          }}
        />
      </View>

      <Text className="uppercase text-[18px] font-bold">
        đang tìm tài xế cho bạn
      </Text>
      <View className="flex-row pt-3">
        <View className="w-[15%] bg-gray-400 mx-1 rounded-full h-1 mb-4 dark:bg-gray-700">
          <View
            className="bg-red-600 h-1 rounded-full dark:bg-red-500"
            style={{ width: '100%' }}
          ></View>
        </View>
        <View className="w-[40%] bg-gray-400 mx-1 rounded-full h-1 mb-4 dark:bg-gray-700">
          <View
            className="bg-red-600 h-1 rounded-full dark:bg-red-500"
            style={{ width: '50%' }}
          ></View>
        </View>
        <View className="w-[40%] bg-gray-400 mx-1 rounded-full h-1 mb-4 dark:bg-gray-700">
          <View
            className=" h-1 rounded-full dark:bg-red-500"
            style={{ width: '100%' }}
          ></View>
        </View>
      </View>

      <Text>
        Cảm ơn bạn đã cho Frent'ship cơ hội được phục vụ. Freen'tship sẽ giao
        hàng đến bạn sớm nhất và tài xế sẽ liên hệ trước khi giao.
      </Text>

      <View className="border-b my-3"></View>

      <View className="flex-row justify-between">
        <View>
          <Text>Phan Thế Mạnh</Text>
          <Text>Loại xe ..... </Text>
          <View className="flex-row">
            <TouchableOpacity className="flex-row bg-zinc-200 rounded-xl py-1 px-2 mr-2">
              <Feather name="phone" size={20} color="black" />
              <Text className="font-bold ml-1"> Gọi</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row bg-zinc-200 rounded-xl py-1 px-2">
              <FontAwesome5 name="search-location" size={20} color="black" />
              <Text className="font-bold ml-1">Xem trên bản đồ</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="relative w-14 h-18 flex items-center">
          <Image
            className="absolute rounded-full w-14 h-14"
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs_M6ZtzPQKC_V2fNnCjuYQQE2Molt6pgbzQ&usqp=CAU',
              width: 90,
              height: 90
            }}
          />
          <View className = 'border border-gray-500 flex-row absolute bottom-0 bg-white items-center px-1 rounded-xl'>
            <Entypo name="emoji-flirt" size={15} color="orange" />
            <Text className = 'font-bold ml-2'>100%</Text>
          </View>
        </View>
      </View>

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
  )
}

export default FindShipper
