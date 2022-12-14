import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { db } from '../../services/firebase'
import lookingspying from '../../assets/gif/looking-spying.gif'
import pigshipperunscreen from '../../assets/gif/pig-shipper-unscreen.gif'
import giaohangthanhcong from '../../assets/gif/giaohangthanhcong.gif'
import { getInfoUser, getStoreinfo, ShipperInFo } from '../../services'
import formatCash from '../../Components/formatCash'
import call from 'react-native-phone-call'
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  onSnapshot
} from 'firebase/firestore'

import { getPreciseDistance } from 'geolib'
import { useSelector } from "react-redux";

const FindShipper = ({ navigation, route }) => {
  const { orderId, locationStore } = route.params
  const locations = useSelector(state => state.locUser)

  const [orderStatus, setOrderStatus] = useState()
  const [shippers, setShippers] = useState([])
  const [shipper, setShipper] = useState('')
  const [progress, setProgress] = useState()
  const [shipperInfo, setShipperInfo] = useState()
  const [status, setStatus] = useState(0)
  if(orderStatus !== undefined) {
    console.log('orderStatus.storeAddress' , orderStatus);
  }
  
  useEffect(() => {
    if (orderStatus !== undefined) {
      if (orderStatus.shipperId !== '') {
        ShipperInFo(orderStatus.shipperId).then(doc => {
          setShipperInfo(doc)
        })
      }
    }
  }, [orderStatus])
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

    if (shipper !== '') {
      const washingtonRef = doc(db, 'shippers', shipper.id)
      await updateDoc(washingtonRef, {
        lastestOrderID: ''
      })
    }

    await updateDoc(cancel, {
      status: 9
    }).then(() => {
      navigation.navigate('HomeTab')
    })
  }

  const getShippers = async () => {
    if (orderStatus.status === 2 && orderStatus.shipperId == '') {
      let manyShippers = []

      const q = query(
        collection(db, 'shippers'),
        where('isActive', '==', true),
        where('lastestOrderID', '==', '')
      )

      const querySnapshot = await getDocs(q)
      querySnapshot.forEach(doc => {
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

      const results = manyShippers.filter(
        ({ id: id1 }) =>
          !orderStatus.shipper_cancel_orders.some(({ id: id2 }) => id2 === id1)
      )
      setShippers(results)
    }
  }

  useEffect(() => {
    if (orderStatus !== undefined) {
      getShippers()
      setStatus(orderStatus.status)
    }
  }, [orderStatus])

  useEffect(() => {
    if (orderStatus !== undefined) {
      const timer = setTimeout(() => {
        if (orderStatus.status === 2) {
          const removeShipper = async () => {
            const ordersRef = doc(db, 'orders', orderId)
            if (orderStatus.shipper_id !== '') {
              await updateDoc(ordersRef, {
                shipper_id: '',
                shipper_cancel_orders: [
                  ...orderStatus.shipper_cancel_orders,
                  { id: orderStatus.shipper_id }
                ]
              })
            }
          }

          const removeShipperIsOrder = async () => {
            // Set the order's ID for shipper
            const washingtonRef = doc(db, 'shippers', shipper.id)
            await updateDoc(washingtonRef, {
              lastestOrderID: ''
            })
          }

          removeShipper()
          removeShipperIsOrder()
        }
      }, 10000)
      return () => clearTimeout(timer)
    }
  }, [orderStatus])

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'orders', orderId + ''), doc => {
      const sum = doc.data().ordered_food.reduce((accumulator, object) => {
        return accumulator + object.quantity
      }, 0)

      getInfoUser(doc.data().user_id).then(user => {
        getStoreinfo(doc.data().food_store_id).then(store => {
          console.log('store' , store.data.address);
          setOrderStatus({
            ...doc.data(),
            status: doc.data().status,
            shipperId: doc.data().shipper_id,
            userAddress: user.address,
            storeAddress: store.data.address,
            menoOfOrder: doc.data().meno,
            quantityTotal: sum
          })
        })
      })
    })

    return () => {
      unsub
    }
  }, [])

  useEffect(() => {
    if (shippers.length > 0 && orderStatus != 9) {
      const shipper = shippers.reduce((prev, curr) =>
        prev.distance < curr.distance ? prev : curr
      )
      if (shipper.distance < 5000) {
        setShipper(shipper)
      }
    }
  }, [shippers])

  useEffect(() => {
    if (shipper != '') {
      getShipper()
    }
  }, [shipper])

  useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        const action = e.data.action
        if (orderStatus.status !== 2) {
          return
        }

        e.preventDefault()
        console.log(e.preventDefault())

        Alert.alert(
          'B???n mu???n tho??t ?',
          'Hi???n ??ang trong qu?? tr??nh t??m t??i x??? , b???n vui l??ng ch??? ?????n khi c?? t??i x??? nh???n ????n . N???u tho??t th?? s??? h???y ????n h??ng !',
          [
            { text: '??? l???i', style: 'cancel', onPress: () => {} },
            {
              text: 'Tho??t',
              style: 'destructive',
              onPress: () => exitOrder(action)
            }
          ]
        )
      }),
    [orderStatus, navigation]
  )

  // React.useEffect(() => {
  //   // Use `setOptions` to update the button that we previously specified
  //   // Now the button includes an `onPress` handler to update the count
  //   navigation.setOptions({
  //     headerLeft: () => navigation.navigate('HomeTab')
  //   })
  // }, [navigation])

  const exitOrder = action => {
    navigation.dispatch(action)
    // navigation.navigate('HomeTab')
    cancelOrder()
  }

  const ShipperInfor = ({ avatar, name, loaixe, phone }) => {
    return (
      <View>
        <View className="border-b border-yellow-600 my-3"></View>
        <View className="flex-row justify-between">
          <View>
            <Text className="my-1 font-bold">{name}</Text>
            <Text className="my-1" numberOfLines={1}>
              Lo???i xe : {loaixe}
            </Text>

            <View className="flex-row mt-1">
              <TouchableOpacity
                onPress={() =>
                  call({
                    number: phone + '',
                    prompt: false
                  }).catch(console.error)
                }
                className="flex-row bg-zinc-200 rounded-xl py-1 px-2 mr-2"
              >
                <Feather name="phone" size={20} color="black" />
                <Text className="font-bold ml-1"> G???i</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('MapScreen', {shipper_id: shipper.id, locations, navigation})} className="flex-row bg-zinc-200 rounded-xl py-1 px-2">
                <FontAwesome5 name="search-location" size={20} color="black" />
                <Text className="font-bold ml-1">Xem tr??n b???n ?????</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity className="flex-row bg-zinc-200 rounded-xl justify-center py-1 px-2 mt-3">
              <Ionicons
                name="ios-chatbox-ellipses-outline"
                size={24}
                color="black"
              />
              <Text className="font-bold ml-1"> Nh???n v???i t??i x???</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ShipperInfo', {
                name: name,
                avatar: avatar,
                loaixe: loaixe,
                phone: phone
              })
            }
            className=" w-14 flex items-center mr-5 "
          >
            <Image
              className=" rounded-full w-14 h-14"
              source={{
                uri: avatar,
                width: 90,
                height: 90
              }}
            />
            <View className="border border-gray-500 flex-row bg-white items-center px-1 rounded-xl">
              <Entypo name="emoji-flirt" size={15} color="orange" />
              <Text className="font-bold ml-2">100%</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="border-b border-yellow-600 my-3"></View>
      </View>
    )
  }

  const ProGressBar = () => {
    return (
      <View>
        <View className="flex justify-center items-center p-6">
          <Image className="w-[100px] h-[100px] " source={progress.gif} />
        </View>

        <Text className="uppercase text-[18px] font-bold">
          {progress.title}
        </Text>
        <View className="flex-row pt-3">
          <View className="w-[15%] bg-gray-400 mx-1 rounded-full h-1 mb-4 dark:bg-gray-700">
            <View
              className="bg-red-600 h-1 rounded-full dark:bg-red-500"
              style={{ width: progress.progress1 }}
            ></View>
          </View>
          <View className="w-[40%] bg-gray-400 mx-1 rounded-full h-1 mb-4 dark:bg-gray-700">
            <View
              className="bg-red-600 h-1 rounded-full dark:bg-red-500"
              style={{ width: progress.progress2 }}
            ></View>
          </View>
          <View className="w-[40%] bg-gray-400 mx-1 rounded-full h-1 mb-4 dark:bg-gray-700">
            <View
              className=" h-1 bg-red-500 rounded-full dark:bg-red-500"
              style={{ width: progress.progress3 }}
            ></View>
          </View>
        </View>

        <Text>
          C???m ??n b???n ???? cho Frent'ship c?? h???i ???????c ph???c v???. Freen'tship s??? giao
          h??ng ?????n b???n s???m nh???t v?? t??i x??? s??? li??n h??? tr?????c khi giao.
        </Text>
      </View>
    )
  }

  useEffect(() => {
    if (orderStatus !== undefined) {
      switch (status) {
        case 2:
          setProgress({
            title: 't??m t??i x??? cho b???n',
            progress1: '100%',
            progress2: '0%',
            progress3: '0%',
            gif: lookingspying
          })
          break
        case 3:
          // code block t??i x??? ??ang ?????n c???a h??ng
          setProgress({
            title: '???? t??m th???y t??i x???',
            progress1: '100%',
            progress2: '50%',
            progress3: '0%',
            gif: pigshipperunscreen
          })
          break

        case 4:
          // code block t??i x??? ??ang ?????n c???a h??ng
          setProgress({
            title: '???? t??m th???y t??i x???',
            progress1: '100%',
            progress2: '50%',
            progress3: '0%',
            gif: pigshipperunscreen
          })
          break

        case 6:
          // code block t??i x??? ???? l???y h??ng th??nh c??ng
          setProgress({
            title: 't??i x??? ???? l???y h??ng th??nh c??ng',
            progress1: '100%',
            progress2: '100%',
            progress3: '0%',
            gif: pigshipperunscreen
          })
          break
        case 5:
          // code block giao h??ng th??nh c??ng
          setProgress({
            title: 'giao h??ng th??nh c??ng',
            progress1: '100%',
            progress2: '100%',
            progress3: '100%',
            gif: giaohangthanhcong
          })
          break
      }
    }
  }, [status])

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 text-white m-5"
    >
      {progress !== undefined && <ProGressBar />}

      {/* Shipper info */}
      {orderStatus !== undefined &&
      shipperInfo !== undefined &&
      orderStatus.shipperId !== '' &&
      orderStatus.status >= 3 &&
      orderStatus.status <= 6 ? (
        <ShipperInfor
          avatar={shipperInfo.avatar}
          name={shipperInfo.name}
          loaixe={shipperInfo.loaixe}
          phone={shipperInfo.phone}
        />
      ) : (
        ''
      )}
      {orderStatus !== undefined && (
        <View>
          <Text className="mb-2 text-base  text-gray-400 underline">
            M?? ????n #{orderId.substr(0, 6).toUpperCase()}
          </Text>
          <View className="flex-row items-center mb-2">
            <MaterialCommunityIcons
              name="food-fork-drink"
              size={24}
              color="#E94730"
            />

            <View className="ml-2 ">
              <Text>N??i mua h??ng</Text>
              <Text className="font-bold text-base">
                {orderStatus.storeAddress}
              </Text>
            </View>
          </View>

          <View className="flex-row items-center mb-2">
            <Entypo name="location-pin" size={24} color="#E94730" />
            <View className="ml-2 ">
              <Text>N??i giao h??ng</Text>
              <Text numberOfLines={2} className="font-bold text-base">
                {orderStatus.userAddress}
              </Text>
            </View>
          </View>

          <Text className="text-base border-y border-gray-300 py-3">
            Ghi ch?? : " {orderStatus.menoOfOrder}"
          </Text>

          <View>
            <View className="flex-row">
              <Text className="text-base mr-4">
                {orderStatus.quantityTotal} m??n |
              </Text>

              <View>
                {orderStatus.ordered_food.map((e, index) => (
                  <View
                    key={index}
                    className="flex-row items-center justify-between"
                  >
                    <Text className="text-base">{e.food_name} </Text>
                    <Text>(x{e.quantity})</Text>
                  </View>
                ))}
              </View>
            </View>

            <View className="flex-row justify-between mt-2">
              <Text className="font-bold text-base">
                Ti???n c???c c???n thanh to??n{' '}
              </Text>
              <Text className="font-bold text-base text-red-500">
                {formatCash(orderStatus.deposit + '')} ??
              </Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="font-bold text-base ">T???ng</Text>
              <Text className="font-bold text-base text-red-500">
                {formatCash(orderStatus.totalPrice + '')} ??
              </Text>
            </View>
          </View>
        </View>
      )}

      {orderStatus !== undefined &&
      orderStatus.shipperId !== '' &&
      orderStatus.status >= 3 &&
      orderStatus.status <= 6 ? (
        <TouchableOpacity
          disabled
          className="mt-8"
          style={{
            backgroundColor: '#C0C0C0',
            borderRadius: 15,
            width: '97%',
            height: 40,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text style={{ color: '#fff' }}>H???y ????n</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => cancelOrder()}
          className="mt-8"
          style={{
            backgroundColor: '#E94730',
            borderRadius: 15,
            width: '97%',
            height: 40,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text style={{ color: '#fff' }}>H???y ????n</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  )
}

export default FindShipper
