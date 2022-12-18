import React, { useEffect } from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'

import { useState } from 'react'

import { db } from '../../services/firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { Foundation } from '@expo/vector-icons'
import { useSelector, useDispatch } from 'react-redux'
import { addNote } from '../../redux/cartItems'


import formatCash from '../../Components/formatCash'

import Modal from 'react-native-modal'

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
export default function OrderView({ navigation }) {
  // tổng tiền
  const [Total, setTotal] = useState(0)
  const [dataFood, setDataFood] = useState([])
  const [isNote, setIsNote] = useState('')
  const carts = useSelector(state => state.carts)
  const dispatch = useDispatch()
  
  const user_id = useSelector(state => state.user)
  const location = useSelector(state => state.locUser)

  // tăng giảm số lượng
  const PhiShip = 15000

  const docData = {
    deposit: (Total * 30) / 100,
    distance: 0,
    meno: carts[0].note,
    food_store_id: carts[0].storeId,
    store_name : carts[0].storeName,
    order_date: Timestamp.now(),
    ordered_food: dataFood,
    ship_fee: PhiShip,
    total_food: Total - PhiShip,
    shipper_id: '',
    shipper_cancel_orders: [],
    status: 2,
    totalPrice: Total,
    user_id: user_id.id,
  }

  const orderTheOrder = () => {
    addDoc(collection(db, 'orders'), docData)
      .then(async docRef => {
        navigation.navigate('FindShipper', {
          orderId: docRef.id,
          locationStore: {
            latitude: carts[0].latitude,
            longitude: carts[0].longitude
          }
        })
      })
      .catch(error => {
        console.log(error)
      })

      
  }

  // tính tổng tiền
  useEffect(() => {
    const data = []
    if (carts.length === 0) {
      navigation.goBack()
    }
    let total = 0
    carts.forEach(item => {
      item.items.forEach(item => {
        total += item.Quantity * item.price
        data.push({
          food_id: item.idFood,
          food_name: item.title,
          quantity: item.Quantity,
          food_price: item.price,
          food_image: item.image
        })
      })
    })
    setTotal(total + PhiShip)
    setDataFood(data)
  }, [carts])

  useEffect(() => {
    if (carts[0].note === undefined || carts[0].note === '') {
      dispatch(addNote({ note: '' }))
    }
  }, [carts])

  const note = () => {
    setModalVisible(false)
    dispatch(addNote({ note: isNote }))
  }

  const [isModalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  return (
    <View className=" flex-1 relative">
      <Modal
        isVisible={isModalVisible}
        animationIn="slideInUp"
        animationInTiming={400}
        animationOut="slideOutDown"
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down"
      >
        <View className="bg-white w-full h-[30%] absolute bottom-0 rounded-xl">
          <View className="m-3 flex-row justify-center relative">
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              className="absolute left-2"
            >
              <AntDesign name="closecircleo" size={20} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={note} className="absolute right-2">
              <Text className="font-bold text-[#00C2FF]">Xong</Text>
            </TouchableOpacity>

            <Text className="text-center">Ghi chú cho tài xế</Text>
          </View>
          <View className="w-full h-[1px] bg-gray-400"></View>

          <View className=" m-3 ">
            <TextInput
              maxLength={200}
              multiline
              value={isNote}
              placeholder="VD : Đường khó đi hãy dướng dẫn cho tài xế ... (tối đa 200 kí tự)"
              onChangeText={setIsNote}
            ></TextInput>
          </View>
        </View>
      </Modal>

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
                <Text style={{ flex: 1 }} numberOfLines={2}>
                  {location.address}
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            onPress={toggleModal}
            className="flex-row bg-white mt-6 mx-2 px-2  "
          >
            <Foundation name="clipboard-notes" size={24} color="#808080" />
            <Text
              numberOfLines={1}
              className="text-[#808080] border-b border-[#808080] ml-2 w-[90%]"
            >
              {carts[0].note !== ''
                ? 'ghi chú : ' + carts[0].note
                : 'Ghi chú thêm cho tài xế (nếu có)'}
            </Text>
          </TouchableOpacity>
        </View>

        {/*chi tiết đơn hàng in4 name */}
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            paddingTop: 10,
            paddingBottom: 20,
            borderBottomWidth: 0.3,
            borderBottomColor: '#808080'
          }}
        >
          <View className="w-full h-auto p-3 bg-[#FFFFCC] mb-[10px]">
            <Text className="text-red-500 font-medium">
              Vì để hạn chế rủi ro cho cửa hàng. Quý khách vui lòng thanh toán
              30% tiền đơn hàng cho cửa hàng và sau khi tài xế đến giao hàng quý
              khách sẽ thanh toán 70% còn lại. Để biết chi tiết phương thức
              thanh toán quý khách vui lòng chờ sau khi cửa hàng đã xác nhận.
            </Text>
          </View>
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
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('StoreScreen', { id: carts[0].storeId })
                  }
                >
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
                source={{ uri : user_id.avatar}}
                style={{ width: 40, height: 40, borderRadius: 25 }}
              />

              <View style={{ paddingLeft: 10 }}>
                <Text numberOfLines={1} style={{ fontWeight: 'bold' }}>
                  {user_id.name}
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
            {carts.map(item =>
              item.items.map((item, index) => (
                <View key={index} style={{ marginLeft: 10 }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingBottom: 50
                    }}
                  >
                    <View>
                      <Text numberOfLines={1} style={{ fontSize: 20 }}>
                        {item.title}
                      </Text>
                      <View
                        style={{
                          marginTop: 20,
                          marginBottom: -75
                        }}
                      >
                        <Image
                          source={{ uri: item.image }}
                          style={{ width: 80, height: 80 }}
                        />
                      </View>
                    </View>
                    <View>
                      <Text style={{ paddingRight: 10, fontWeight: 'bold' }}>
                        {formatCash((item.price * item.Quantity) + '' )}đ
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
                          Số Lượng: {item.Quantity}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))
            )}
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
                  {formatCash(Total + '')}đ
                </Text>
              </View>
            </View>

            {/* () => navigation.navigate('YourOrderView') */}
            {/*order */}
            <TouchableOpacity
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
