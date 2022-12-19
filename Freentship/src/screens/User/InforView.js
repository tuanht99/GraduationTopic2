import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,

} from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import Gif from '../../../assets/gift.jpg'
import AppStyle from '../../themes/IndexTheme'
import AsyncStorage from '@react-native-async-storage/async-storage'
// firebase import
import { db } from '../../services/config'
import { onSnapshot, doc } from 'firebase/firestore'
import OrdersManagement from '../../screens/Order/OrdersManagement'
import { Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


// end
export default function InforView({ navigation }) {
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('userID1')
      if (value !== null) {
        setIdUser(value)
      }
    } catch (e) {
      console.log('Không có user id này!')
    }
  }
  // firebase
  const [idUser, setIdUser] = useState()
  const [User, setUser] = useState([])

  useEffect(() => {
    getData()
  }, [])
  useEffect(() => {
    if (idUser != undefined) {
      const unsub = onSnapshot(doc(db, 'users', idUser), doc => {
        console.log("Current data: ", doc.data())
        setUser(doc.data())
        // đợi trợ giúp
        // console.log('ngày giờ fire base  : '+ User.dateOfBirth.seconds)
        // console.log('ngày giờ fire base  : '+ User.dateOfBirth.nanoseconds)
      })
    }
  }, [idUser])
  console.log("cc", User);
  // dữ liệu
  const guestname = User.name
  const avatar = User.avatar
  // thời gian

  const date = User.dateOfBirth
  const sex = User.sex
  const id = idUser
  const gmail = User.email
  const phone = User.phone
  // end
  const footerComponent = () => (
    <OrdersManagement />
  )
  return (
    <SafeAreaView>
      <ScrollView>
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
            <AntDesign name="right" style={AppStyle.InforUserTheme.rightIcon} />
          </View>
          <View
            style={[
              AppStyle.InforUserTheme.mr10,
              AppStyle.InforUserTheme.horizonline
            ]}
          />
          {/* xác nhận căn cước công dân */}
          <TouchableOpacity style={AppStyle.InforUserTheme.supportLoShip} onPress={() =>
            navigation.navigate('CCCD', {
              User,
              id
            })}>
            <View>
              <AntDesign style={AppStyle.InforUserTheme.icon} name="idcard" size={24} color="black" />
            </View>
            <View style={{ flexDirection: 'row', flex: 4 }}>
              <Text style={{ fontSize: 15 }}>Xác Nhận Căn Cước Công Dân</Text>
            </View>
            <AntDesign name="right" style={AppStyle.InforUserTheme.rightIcon} />
          </TouchableOpacity>
          {/* Vourcher */}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Vourcher', {
                User,
                id
              })}

            style={AppStyle.InforUserTheme.supportLoShip}>
            <View>
              <Image style={{ height: 30, width: 30, marginRight: 10, marginLeft: 20 }} source={require("../../../assets/coupon.png")}></Image>
            </View>
            <View style={{ flexDirection: 'row', flex: 4 }}>
              <Text style={{ fontSize: 15 }}>Mã Khuyến Mãi</Text>
            </View>
            <AntDesign name="right" style={AppStyle.InforUserTheme.rightIcon} />
          </TouchableOpacity>
          {/* cộng đồng loship */}
          <TouchableOpacity style={AppStyle.InforUserTheme.supportLoShip}>
            <View>
              <FontAwesome5 name="smile" style={AppStyle.InforUserTheme.icon} />
            </View>
            <View style={{ flexDirection: 'row', flex: 4 }}>
              <Text style={{ fontSize: 15 }}>Cộng đồng Freen'tShip</Text>
            </View>
            <AntDesign name="right" style={AppStyle.InforUserTheme.rightIcon} />
          </TouchableOpacity>
          {/* cửa hàng yêu thích */}
          <TouchableOpacity onPress={() => navigation.navigate('FavoriteStoreView')} style={AppStyle.InforUserTheme.supportLoShip}>
            <View>
              <FontAwesome5 name="heart" style={AppStyle.InforUserTheme.icon} />
            </View>
            <View style={{ flexDirection: 'row', flex: 4 }}>
              <Text style={{ fontSize: 15 }}>Cửa hàng yêu thích</Text>
            </View>
            <AntDesign name="right" style={AppStyle.InforUserTheme.rightIcon} />
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
            <AntDesign name="right" style={AppStyle.InforUserTheme.rightIcon} />
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
              <Text style={{ fontSize: 15 }}>Câu hỏi thường gặp</Text>
            </View>
            <AntDesign name="question" style={AppStyle.InforUserTheme.rightIcon} />
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
            <AntDesign name="right" style={AppStyle.InforUserTheme.rightIcon} />
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
              <Text style={{ fontSize: 15 }}>Đóng góp tính năng Freen'tShip</Text>
            </View>
            <AntDesign name="right" style={AppStyle.InforUserTheme.rightIcon} />
          </TouchableOpacity>
          {/* Liên hệ với Freen'tShip */}
          <TouchableOpacity style={AppStyle.InforUserTheme.supportLoShip}>
            <View>
              <FontAwesome5 name="phone" style={AppStyle.InforUserTheme.icon} />
            </View>
            <View style={{ flexDirection: 'row', flex: 4 }}>
              <Text style={{ fontSize: 15 }}>Liên hệ với Freen'tShip</Text>
            </View>
            <AntDesign name="right" style={AppStyle.InforUserTheme.rightIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={AppStyle.InforUserTheme.supportLoShip}
            onPress={() => { navigation.navigate('OrdersManagement') }}>
            <View>
              <FontAwesome5 name="history" style={AppStyle.InforUserTheme.icon} />
            </View>
            <View style={{ flexDirection: 'row', flex: 4 }}>
              <Text style={{ fontSize: 15 }}>Lịch sử đơn hàng</Text>
            </View>
            <AntDesign name="right" style={AppStyle.InforUserTheme.rightIcon} />
          </TouchableOpacity>
          {/* Logout */}
          <TouchableOpacity style={AppStyle.InforUserTheme.supportLoShip}
            onPress={
              () => {
                AsyncStorage.removeItem('userID1')
                navigation.navigate('LoginScreen')
              }
            }
          >
            <View>
              <FontAwesome5 name="sign-out-alt" style={AppStyle.InforUserTheme.icon} />
            </View>
            <View style={{ flexDirection: 'row', flex: 4 }}>
              <Text style={{ fontSize: 15 }}>Logout</Text>
            </View>
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
                Phiên bản hiện tại 1.0
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
      </ScrollView>

    </SafeAreaView>
  )
}
