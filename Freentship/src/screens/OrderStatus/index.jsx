import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { db } from '../../services/firebase'
import lookingspying from '../../assets/gif/looking-spying.gif'
import pigshipperunscreen from '../../assets/gif/pig-shipper-unscreen.gif'
import giaohangthanhcong from '../../assets/gif/giaohangthanhcong.gif'
import xacnhan from '../../assets/gif/xacnhan.gif'
import { getInfoUser, getStoreinfo, ShipperInFo } from '../../services'
import formatCash from '../../Components/formatCash'
import call from 'react-native-phone-call'
import { doc, onSnapshot } from 'firebase/firestore'
import { useSelector } from "react-redux";

const OrderStatus = ({ navigation, route }) => {
  const locations = useSelector(state => state.locUser)
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
            storeAddress: store.data.address,
            storeBankNumber: store.data.bank_account_number,
            storeBankName: store.data.bank_name,
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

  const BankInfo = ({ bankNumber, bankName }) => {
    return (
      <View className="rounded-2xl flex justify-center items-center bg-[#FFFFCC] p-3">
        <Text className="text-base text-red-600 ">
          Bạn vui lòng thanh toán trước cho cửa hàng số tiền cọc qua tài khoản
          này trong vòng 5 phút
        </Text>
        <Text className="text-base font-bold">{bankName}</Text>
        <View className="flex-row">
          <FontAwesome name="bank" size={24} color="black" />
          <Text className="text-base"> Số tài khoản : {bankNumber}</Text>
        </View>
      </View>
    )
  }

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
                <Text className="font-bold ml-1"> Gọi</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('MapScreen', {shipper_id: orderStatus.shipperId, locations, navigation})} className="flex-row bg-zinc-200 rounded-xl py-1 px-2">
                <FontAwesome5 name="search-location" size={20} color="black" />
                <Text className="font-bold ml-1">Xem trên bản đồ</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ChatScreen', {
                  chatID: orderId + ''
                })
              }}
              className="flex-row bg-zinc-200 rounded-xl justify-center py-1 px-2 mt-3"
            >
              <Ionicons
                name="ios-chatbox-ellipses-outline"
                size={24}
                color="black"
              />
              <Text className="font-bold ml-1"> Nhắn với tài xế</Text>
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
          Cảm ơn bạn đã cho Frent'ship cơ hội được phục vụ. Freen'tship sẽ giao
          hàng đến bạn sớm nhất và tài xế sẽ liên hệ trước khi giao.
        </Text>
      </View>
    )
  }

  useEffect(() => {
    if (orderStatus !== undefined) {
      switch (status) {
        case 1:
          setProgress({
            title: 'cửa hàng đã xác nhận',
            progress1: '100%',
            progress2: '100%',
            progress3: '0%',
            gif: xacnhan
          })
          break

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
        case 4:
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
            progress3: '50%',
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
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 text-white m-5"
    >
      {progress !== undefined && <ProGressBar />}

      {/* Shipper info */}
      {orderStatus !== undefined &&
      shipperInfo !== undefined &&
      orderStatus.shipperId !== '' &&
      orderStatus.status >= 1 &&
      orderStatus.status <= 6  ? (
        <View>
          <ShipperInfor
            avatar={shipperInfo.avatar}
            name={shipperInfo.name}
            loaixe={shipperInfo.loaixe}
            phone={shipperInfo.phone}
          />
          <BankInfo
            bankNumber={orderStatus.storeBankNumber}
            bankName={orderStatus.storeBankName}
          />
        </View>
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
        <Text style={{ color: '#fff' }}>Hủy đơn</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default OrderStatus
