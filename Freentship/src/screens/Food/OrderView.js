import React, { useEffect } from 'react'
import { View, SafeAreaView, Image, Text, TouchableOpacity } from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
import { useState } from 'react'

import { db } from '../../services/firebase'
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  Timestamp,
  doc,
  updateDoc
} from 'firebase/firestore'
import { getDistance, getPreciseDistance } from 'geolib'
import { createErrorHandler } from 'expo/build/errors/ExpoErrorManager'
import AsyncStorage from '@react-native-async-storage/async-storage'

const DATA = {
  id: 1,
  name: 'Nước ngọt c2',
  namesp: 'Gì cũng đc, miễn là cùng cửa hàng',
  namesp2: 'Khi thêm món khác cửa hàng thì làm mới giỏ hàng',
  discription: 'Thơm ngon mời bạn ăn nha, getgo, getgo,...',
  location: '',
  relationship: 'Đối tác lo ship',
  price: 20000,
  status: '',
  shopaddress: '52 Bế văn đàn, an bình, dĩ an, bình dương',
  shopSl: '14 sản phẩm',
  shopname: 'Tea 1998',

  userName: 'Phú',
  txtyour: 'bạn',
  txtDatDon: 'Đặt đơn',
  txtsplq: 'Sản phẩm cùng cửa hàng',
  txtXemCuaHang: 'Xem cửa hàng',
  txtDis: 'Thông tin sản phẩm',
  txtThayDoi: 'Thay đổi',
  txtTong: '60.000',
  txtPttt: 'Trả tiền mặt khi nhận hàng'
}

// Navigation
export default function OrderView({ navigation, route }) {
  // tổng tiền
  const [Total, setTotal] = useState(0)
  const user_id = "kxzmOQS3sVUr2pm9AbLI"
  // tăng giảm số lượng

  const {
    nameOrder,
    priceOrder,
    ImageOrder,
    Totals,
    idFood,
    Quantity,
    storeOrder,
    storeN,
    storeAdr,
    storeIM,
    storeID,
    locationStore
  } = route.params
  const PhiShip = 15000

  const [shippers, setShippers] = useState([])
  const [shipper, setShipper] = useState([])
  // console.log('shippers', shippers)
  // console.log('shipper', shipper)
  const [isCreateOrder, setIsCreateOrder] = useState(false)

  const getShippers = async () => {
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

  useEffect(() => {
    getShippers()
  }, [isCreateOrder])

  useEffect(() => {
    if (shippers.length > 0) {
      const shipper = shippers.reduce((prev, curr) =>
        prev.distance < curr.distance ? prev : curr
      )
      if (shipper.distance < 5000) {
        setShipper(shipper)
      }

      setShipper('')
    }
  }, [shippers])

  const docData = {
    deposit: 0,
    distance: 0,
    food_price: priceOrder,
    food_store_id: storeID,
    order_date: Timestamp.now(),
    ordered_food: [{ food_id: idFood, qty: Quantity }],
    ship_fee: PhiShip,
    total_food : Totals,
    shipper_id: '',
    status: 2,
    totalPrice: Total,
    user_id: user_id
  }

  const orderTheOrder = () => {
    const { id } = addDoc(collection(db, 'orders'), docData)
      .then(async docRef => {
        console.log('docRef',docRef.id);
        navigation.navigate('FindShipper',{ orderId: docRef.id , shipperId : docRef.shipper_id , locationStore: locationStore });
      })
      .catch(error => {
        // The write failed...
        console.log(error)
      })
  }

  function ship() {
    // tính theo khoản cách từ cửa hàng với khách hàng
  }

  // tính tổng tiền
  React.useEffect(() => {
    setTotal(Totals + PhiShip)
  }, [Quantity])

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      ),

      title: 'Đơn hàng của bạn',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 15
      }
    })
  }, [navigation])
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 0.8 }}>
        <View style={{ paddingBottom: 10 }}></View>

        {/* giao toi dia chi */}
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            paddingTop: 20,
            paddingBottom: 10
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
                <Text
                  numberOfLines={1}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    fontSize: 20
                  }}
                >
                  GIAO TỚI ĐỊA CHỈ
                </Text>
              </View>

              <View>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: '#00C2FF',
                      paddingRight: 10
                    }}
                  >
                    {DATA.txtThayDoi}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ justifyContent: 'center', paddingRight: 10 }}>
                <AntDesign name="enviroment" size={24} color="#E94730" />
              </View>

              <View style={{ alignItems: 'center' }}>
                <Text numberOfLines={2}>{storeAdr}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ paddingBottom: 10 }}></View>

        {/*chi tiết đơn hàng in4 name */}
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            paddingTop: 20,
            paddingBottom: 20,
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
                <Text
                  numberOfLines={1}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    fontSize: 20
                  }}
                >
                  CHI TIẾT ĐƠN HÀNG
                </Text>
              </View>

              <View>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: '#00C2FF',
                      paddingRight: 10
                    }}
                  >
                    Thêm món
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <Image
                source={DATA.avt}
                style={{ width: 40, height: 40, borderRadius: 25 }}
              />

              <View style={{ paddingLeft: 10 }}>
                <Text numberOfLines={1} style={{ fontWeight: 'bold' }}>
                  {DATA.userName}
                </Text>
              </View>
              <View style={{ paddingLeft: 10 }}>
                <Text
                  numberOfLines={1}
                  style={{ color: '#808080', width: 190 }}
                >
                  ({DATA.txtyour})
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* san pham da them vao gio hang */}
        <View>
          {/* ne */}
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              paddingTop: 10,
              paddingBottom: 20
            }}
          >
            <View style={{ marginLeft: 10 }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 50
                }}
              >
                <View>
                  <Text numberOfLines={1} style={{ fontSize: 20 }}>
                    {nameOrder}
                  </Text>
                  <View
                    style={{
                      marginTop: 20,
                      marginBottom: -75
                    }}
                  >
                    <Image
                      source={{ uri: ImageOrder }}
                      style={{ width: 80, height: 80 }}
                    />
                  </View>
                </View>
                <View>
                  <Text style={{ paddingRight: 10, fontWeight: 'bold' }}>
                    {Totals}
                    {' Đ'}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <View></View>
                {/*  */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flex: 0.4,
                    paddingRight: 10
                  }}
                >
                  <View></View>
                  <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                      Số Lượng: {Quantity}
                    </Text>
                  </View>
                  <View></View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Phí ship */}
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            paddingTop: 20,
            paddingBottom: 20,
            borderTopWidth: 0.3,
            borderTopColor: '#808080'
          }}
        >
          <View style={{ marginLeft: 10 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <View>
                <Text numberOfLines={1}>Phí ship</Text>
              </View>
              <View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    paddingRight: 10
                  }}
                >
                  {PhiShip}
                  {' Đ'}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            paddingTop: 20,
            paddingBottom: 20,
            borderTopWidth: 0.3,
            borderTopColor: '#808080'
          }}
        >
          <View style={{ marginLeft: 10 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <View>
                <Text numberOfLines={1}>Vourcher </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    paddingRight: -75
                  }}
                >
                  {PhiShip}
                  {' Đ'}
                </Text>
              </View>
              <TouchableOpacity>
                <Text
                  style={{
                    paddingRight: 30,
                    fontWeight: 'bold',
                    color: '#00C2FF'
                  }}
                >
                  Thêm mã
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ paddingBottom: 10 }}></View>

        {/* phương thức thanh toán */}
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            paddingTop: 20,
            paddingBottom: 10
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
                <Text
                  numberOfLines={1}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    fontSize: 20
                  }}
                >
                  CÁCH THANH TOÁN
                </Text>
              </View>

              <View>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: '#00C2FF',
                      paddingRight: 10
                    }}
                  >
                    {DATA.txtThayDoi}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ justifyContent: 'center', paddingRight: 10 }}>
                <FontAwesome5 name="money-bill-alt" size={24} color="black" />
              </View>

              <View style={{ alignItems: 'center' }}>
                <Text numberOfLines={2}>{DATA.txtPttt}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* đặt đơn */}
      <View style={{ flex: 0.2 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            paddingTop: 10,
            paddingBottom: 10,
            width: '100%',
            borderTopColor: '#808080',
            borderTopWidth: 0.3,
            // position: "absolute",
            bottom: 0
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
                <Text numberOfLines={1} style={{ color: '#808080' }}>
                  Tổng (tạm tính)
                </Text>
              </View>
              <View>
                <Text style={{ paddingRight: 10, fontWeight: 'bold' }}>
                  {Total} {' Đ'}
                </Text>
              </View>
            </View>

            {/* () => navigation.navigate('YourOrderView') */}
            {/*order */}
            <TouchableOpacity
              // onPress={() => orderTheOrder()}
              onPress={() => orderTheOrder()}
              style={{
                backgroundColor: '#E94730',
                borderRadius: 15,
                width: '97%',
                height: 40,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text style={{ color: '#fff' }}>{DATA.txtDatDon}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}
