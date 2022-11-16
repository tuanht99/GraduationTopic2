import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  FlatList
} from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import Longxaodua from '../../../assets/Food/nuoc_c2.png'
import Gif from '../../../assets/gift.jpg'
import AppStyle from '../../themes/IndexTheme'

// firebase import
import { db } from '../../services/config'
import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  getDocs
} from 'firebase/firestore'
// end
export default function InforView({ navigation, route }) {
  ;<StatusBar style="auto" />

  const DATA = [
    {
      id: 'kxzmOQS3sVUr2pm9AbLI',
      image: Longxaodua,
      name: 'Lòng xòa dưa',
      discription: 'Nhiều lòng ít dưa',
      price: '30.000',
      status: 'Đang mở cửa'
    }
  ]

  // firebase
  const idUser = 'kxzmOQS3sVUr2pm9AbLI'
  const [User, setUser] = useState([])
  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'users', idUser), doc => {
      console.log('Current data: ', doc.data())
      setUser(doc.data())
      // đợi trợ giúp
      // console.log('ngày giờ fire base  : '+ User.dateOfBirth.seconds)
      // console.log('ngày giờ fire base  : '+ User.dateOfBirth.nanoseconds)
    })
  }, [idUser])

  // lưu ý cần fixed

  // const nano = User.dateOfBirth.nanoseconds
  // const secon = User.dateOfBirth.seconds
  // const timestemp = new Date(nano)
  // const formatted = timestemp.format('dd/mm/yyyy')
  // console.log(formatted);
  // console.log(userDocument)
  // end

  // dữ liệu
  const guestname = User.guestName
  const avatar = User.avatar
  // thời gian

  const date = User.dateOfBirth
  const sex = User.sex
  const id = idUser
  const gmail = User.email
  const phone = User.phone
  
  const [listOrder, setListOrder] = useState([])
  useEffect(() => {
    let unsubscribe
    setListOrder(null)
    const getOrder = async () => {
      const OrderRef = collection(db, 'orders')
      const c = query(OrderRef, where('user_id', '==', idUser))

      const querySnapshot = await getDocs(c)
      const listOrder = []
      unsubscribe = onSnapshot(c, querySnapshot => {
        setListOrder(
          querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
        )
      })
    }
    getOrder()
    return unsubscribe
  }, [])

  console.log(listOrder);

  // food
  const idFood = '0w1IntroHd8JwVvD9tTz'
  const [food, setFood] = useState([])
  useEffect(() => {
    const fs = onSnapshot(doc(db, 'foods', idFood), doc => {
      setFood(doc.data())
    })
  }, [idFood])
  const foodName = food.name

  // order
  const idOrder = '9sqoBr9vzZUk3VHdAIKk'
  const [Order, setOrder] = useState([])
  useEffect(() => {
    const odr = onSnapshot(doc(db, 'orders', idOrder), doc => {
      setOrder(doc.data())
    })
  }, [idOrder])
  const totalPrice = '' + Order.totalPrice

  // orderStatus
  const idOrderStatus = '9'
  const [orderStatus, setOrderStatus] = useState([])
  useEffect(() => {
    const odr = onSnapshot(doc(db, 'order_status', idOrderStatus), doc => {
      setOrderStatus(doc.data())
    })
  }, [idOrder])
  const OrderStatus = orderStatus.value

  // foodStore
  const idFoodStore = '4dpAvRWJVrvdbml9vKDL'
  const [foodStore, setFoodStore] = useState([])
  useEffect(() => {
    const fs = onSnapshot(doc(db, 'food_stores', idFoodStore), doc => {
      setFoodStore(doc.data())
    })
  }, [idFoodStore])
  const foodStoreName = foodStore.name
  const foodStoreImage = foodStore.image


  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={AppStyle.InforUserTheme.container}>
        <View>
          {/* } */}
          <View>
            <View style={AppStyle.InforUserTheme.fdRow}>
              <View
                style={{
                  flex: 2,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Image
                  style={AppStyle.InforUserTheme.imgUser}
                  source={{ uri: avatar }}
                />
              </View>

              <View style={{ flexDirection: 'column', flex: 4 }}>
                <Text style={{ fontSize: 16 }}>{guestname}</Text>
                <Text style={{ color: '#FF00FF', fontSize: 15 }}>0{phone}</Text>
                <TouchableOpacity style={{}}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontStyle: 'italic',
                      textShadowColor: 'rgba(0, 0, 0, 0.75)',
                      textShadowOffset: { width: 1, height: 1 },
                      textShadowRadius: 20
                    }}
                    onPress={() =>
                      navigation.navigate('InforSettingView', {
                        guestname,
                        avatar,
                        date,
                        sex,
                        id,
                        gmail,
                        phone
                      })
                    }
                  >
                    Cập nhật hồ sơ
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={[
                AppStyle.InforUserTheme.mr10,
                AppStyle.InforUserTheme.horizonline
              ]}
            />

            <View style={AppStyle.InforUserTheme.fdRow}>
              <Image style={AppStyle.InforUserTheme.imgGif} source={Gif} />

              <View style={{ flexDirection: 'column', flex: 4 }}>
                <Text
                  style={[
                    AppStyle.InforUserTheme.bold,
                    AppStyle.InforUserTheme.italic
                  ]}
                >
                  Giới thiệu freen't ship với bạn bè
                </Text>
                <Text
                  style={[
                    AppStyle.InforUserTheme.italic,
                    AppStyle.InforUserTheme.textGif
                  ]}
                >
                  Nhận ngay phần thưởng hấp dẫn
                </Text>
              </View>
              <AntDesign
                name="right"
                style={AppStyle.InforUserTheme.rightIcon}
              />
            </View>
            <View
              style={[
                AppStyle.InforUserTheme.mr10,
                AppStyle.InforUserTheme.horizonline
              ]}
            />
            {/* cộng đồng loship */}
            <TouchableOpacity style={AppStyle.InforUserTheme.supportLoShip}>
              <View>
                <FontAwesome5
                  name="smile"
                  style={AppStyle.InforUserTheme.icon}
                />
              </View>
              <View style={{ flexDirection: 'row', flex: 4 }}>
                <Text style={{ fontSize: 15 }}>Cộng đồng lo ship</Text>
              </View>
              <AntDesign
                name="right"
                style={AppStyle.InforUserTheme.rightIcon}
              />
            </TouchableOpacity>
            {/* cửa hàng yêu thích */}
            <TouchableOpacity style={AppStyle.InforUserTheme.supportLoShip}>
              <View>
                <FontAwesome5
                  name="heart"
                  style={AppStyle.InforUserTheme.icon}
                />
              </View>
              <View style={{ flexDirection: 'row', flex: 4 }}>
                <Text style={{ fontSize: 15 }}>Cửa hàng yêu thích</Text>
              </View>
              <AntDesign
                name="right"
                style={AppStyle.InforUserTheme.rightIcon}
              />
            </TouchableOpacity>
            {/* Quản lí thanh toán */}
            <TouchableOpacity style={AppStyle.InforUserTheme.supportLoShip}>
              <View>
                <FontAwesome5
                  name="credit-card"
                  style={AppStyle.InforUserTheme.icon}
                />
              </View>
              <View style={{ flexDirection: 'row', flex: 4 }}>
                <Text style={{ fontSize: 15 }}>Quản lí thanh toán</Text>
              </View>
              <AntDesign
                name="right"
                style={AppStyle.InforUserTheme.rightIcon}
              />
            </TouchableOpacity>
            {/* Câu hỏi thường gặp*/}
            <TouchableOpacity style={AppStyle.InforUserTheme.supportLoShip}>
              <View>
                <FontAwesome5
                  name="question"
                  style={AppStyle.InforUserTheme.icon}
                />
              </View>
              <View style={{ flexDirection: 'row', flex: 4 }}>
                <Text style={{ fontSize: 15 }}>Quản lí thanh toán</Text>
              </View>
              <AntDesign
                name="right"
                style={AppStyle.InforUserTheme.rightIcon}
              />
            </TouchableOpacity>
            {/* Đề xuất monng muốn */}
            <TouchableOpacity style={AppStyle.InforUserTheme.supportLoShip}>
              <View>
                <FontAwesome5
                  name="facebook-messenger"
                  style={AppStyle.InforUserTheme.icon}
                />
              </View>
              <View style={{ flexDirection: 'row', flex: 4 }}>
                <Text style={{ fontSize: 15 }}>Đề xuất mong muốn</Text>
              </View>
              <AntDesign
                name="right"
                style={AppStyle.InforUserTheme.rightIcon}
              />
            </TouchableOpacity>
            {/* Đóng góp tính năng */}
            <TouchableOpacity style={AppStyle.InforUserTheme.supportLoShip}>
              <View>
                <FontAwesome5
                  name="telegram-plane"
                  style={AppStyle.InforUserTheme.icon}
                />
              </View>
              <View style={{ flexDirection: 'row', flex: 4 }}>
                <Text style={{ fontSize: 15 }}>Đóng góp tính năng loship</Text>
              </View>
              <AntDesign
                name="right"
                style={AppStyle.InforUserTheme.rightIcon}
              />
            </TouchableOpacity>
            {/* Liên hệ với Loship */}
            <TouchableOpacity style={AppStyle.InforUserTheme.supportLoShip}>
              <View>
                <FontAwesome5
                  name="phone"
                  style={AppStyle.InforUserTheme.icon}
                />
              </View>
              <View style={{ flexDirection: 'row', flex: 4 }}>
                <Text style={{ fontSize: 15 }}>Liên hệ với loship</Text>
              </View>
              <AntDesign
                name="right"
                style={AppStyle.InforUserTheme.rightIcon}
              />
            </TouchableOpacity>
            <View
              style={[
                AppStyle.InforUserTheme.mr10,
                AppStyle.InforUserTheme.horizonline
              ]}
            />

            <View style={AppStyle.InforUserTheme.supportLoShip}>
              <MaterialCommunityIcons
                name="tray-arrow-up"
                style={AppStyle.InforUserTheme.icon}
              />
              <View style={{ flexDirection: 'row', flex: 4 }}>
                <Text style={AppStyle.InforUserTheme.textVersion}>
                  Phiên bản hiện tại 2.21.201
                </Text>
              </View>
            </View>

            <View
              style={[
                AppStyle.InforUserTheme.mr10,
                AppStyle.InforUserTheme.horizonline
              ]}
            />
          </View>
              {/* ls */}
          <View style={{ flex: 0.2 }}>
            <Text style={AppStyle.InforUserTheme.htrOrderText}>
              Lịch sử đơn hàng
            </Text>
            <FlatList
              data={listOrder}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={AppStyle.InforUserTheme.htrOrder}
                  onPress={() =>
                    navigation.navigate('OrderCanceledView', {
                      totalPrice,
                      
                    })
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
                        width: 90,
                        borderRadius: 15,
                        overflow: 'hidden',
                        resizeMode: 'contain'
                      }}
                      source={Longxaodua}
                    />
                  </View>
                  <View style={{ flexDirection: 'column', flex: 4 }}>
                    <Text
                      style={[
                        AppStyle.InforUserTheme.bold,
                        AppStyle.InforUserTheme.textSize17
                      ]}
                    >
                      {foodStoreName}
                    </Text>
                    <Text style={AppStyle.InforUserTheme.textGif}>
                      {foodName}
                    </Text>
                    <Text style={{ fontSize: 13 }}>{item.totalPrice}</Text>
                    <Text style={AppStyle.InforUserTheme.orderStatusFalse}>
                      {item.status}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            ></FlatList>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
