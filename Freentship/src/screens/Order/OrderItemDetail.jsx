import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
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
import { doc, onSnapshot } from 'firebase/firestore'

export const OrderItemDetail = ({ navigation, route }) => {
  const { orderId } = route.params

  const [orderStatus, setOrderStatus] = useState()

  const [progress, setProgress] = useState()
  const [shipperInfo, setShipperInfo] = useState()
  const [status, setStatus] = useState(0)

  useEffect(() => {
    if (orderStatus !== undefined) {
      if (orderStatus.shipperId !== '') {
        ShipperInFo(orderStatus.shipperId).then(doc => {
          setShipperInfo(doc)
        })
      }
    }
  }, [orderStatus])

  useEffect(() => {
    if (orderStatus !== undefined) {
      setStatus(orderStatus.status)
    }
  }, [orderStatus])

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'orders', orderId + ''), doc => {
      const sum = doc.data().ordered_food.reduce((accumulator, object) => {
        return accumulator + object.quantity
      }, 0)

      getInfoUser(doc.data().user_id).then(user => {
        getStoreinfo(doc.data().food_store_id).then(store => {
          setOrderStatus({
            ...doc.data(),
            status: doc.data().status,
            shipperId: doc.data().shipper_id,
            userAddress: user.address,
            storeAddress: store.address,
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

  const ShipperInfor = ({ avatar, name, loaixe, phone }) => {
    return (
      <View>
        <View className="border-b border-yellow-600 my-3"></View>
        <View className="flex-row justify-between">
          <View>
            <Text className="my-1 font-bold">{name}</Text>
            <Text className="my-1" numberOfLines={1}>
              Loại xe : {loaixe}
            </Text>
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

  useEffect(() => {
    if (orderStatus !== undefined) {
      switch (status) {
        case 2:
          setProgress({
            title: 'tìm tài xế cho bạn',
            progress1: '100%',
            progress2: '0%',
            progress3: '0%',
            gif: lookingspying
          })
          break
        case 3:
          // code block tài xế đang đến cửa hàng
          setProgress({
            title: 'đã tìm thấy tài xế',
            progress1: '100%',
            progress2: '50%',
            progress3: '0%',
            gif: pigshipperunscreen
          })
          break
        case 6:
          // code block tài xế đã lấy hàng thành công
          setProgress({
            title: 'tài xế đã lấy hàng thành công',
            progress1: '100%',
            progress2: '100%',
            progress3: '0%',
            gif: pigshipperunscreen
          })
          break
        case 5:
          // code block giao hàng thành công
          setProgress({
            title: 'giao hàng thành công',
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
    <ScrollView className="flex-1 text-white m-5">
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
            Mã đơn #{orderId.substr(0, 6).toUpperCase()}
          </Text>
          <View className="flex-row items-center mb-2">
            <MaterialCommunityIcons
              name="food-fork-drink"
              size={24}
              color="#E94730"
            />

            <View className="ml-2 ">
              <Text>Nơi mua hàng</Text>
              <Text className="font-bold text-base">
                {orderStatus.storeAddress}
              </Text>
            </View>
          </View>

          <View className="flex-row items-center mb-2">
            <Entypo name="location-pin" size={24} color="#E94730" />
            <View className="ml-2 ">
              <Text>Nơi giao hàng</Text>
              <Text numberOfLines={2} className="font-bold text-base">
                {orderStatus.userAddress}
              </Text>
            </View>
          </View>

          <Text className="text-base border-y border-gray-300 py-3">
            Ghi chú : " {orderStatus.menoOfOrder}"
          </Text>

          <View>
            <View className="flex-row">
              <Text className="text-base mr-4">
                {orderStatus.quantityTotal} món |
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
                Tiền cọc cần thanh toán{' '}
              </Text>
              <Text className="font-bold text-base text-red-500">
                {formatCash(orderStatus.deposit + '')} đ
              </Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="font-bold text-base ">Tổng</Text>
              <Text className="font-bold text-base text-red-500">
                {formatCash(orderStatus.totalPrice + '')} đ
              </Text>
            </View>
          </View>
        </View>
      )}

      {orderStatus && orderStatus.status === 5 && (
        <TouchableOpacity
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
          <Text style={{ color: '#fff' }}>Đánh giá</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  )
}
