import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from '../../services/config'

const DATA = {
  id: 1,
  name: "Nước ngọt c2",
  namesp: "Gì cũng đc miễn là cùng cửa hàng",
  namesp2: "Khi thêm món khác cửa hàng thì làm mới giỏ hàng",
  discription: "Thơm ngon mời bạn ăn nha, getgo, getgo,...",
  location: "",
  relationship: "Đối tác lo ship",
  price: "20.000",
  status: "",
  shopaddress: "52 Bế văn đàn, an bình, dĩ an, bình dương",
  shopSl: "14 sản phẩm",
  shopname: "Tea 1998",
  shopimage: require("../../../assets/Food/nuoc_c2.png"),
  monAn1: require("../../../assets/Food/nuoc_c2.png"),
  avt: require("../../../assets/Food/longxaodua.png"),
  userName: "Khanh",
  txtyour: "bạn",
  txtDatDon: "Đặt đơn",
  txtDatLai: "Đặt lại",
  txtsplq: "Sản phẩm cùng cửa hàng",
  txtXemCuaHang: "Xem cửa hàng",
  txtDis: "Thông tin sản phẩm",
  txtThayDoi: "Thay đổi",
  txtTong: "60.000",
  txtPttt: "Trả tiền mặt khi nhận hàng",
  txtcamon: "Cảm ơn bạn Phú đã cho Freentship đc phục vụ",
  txtmadon: "#2TAXKH6",
};

// Navigation
export default function OrderDeliveredView({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      ),

      
      title:"Lịch sử đơn hàng ",
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 15,
      },
    });
  }, [navigation]);

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
  const totalPrice = Order.totalPrice

  // order status
  const idOrderStatus = '9'
  const [orderStatus, setOrderStatus] = useState([])
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

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{paddingBottom: 10}}></View>

      {/* nhan dc */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <View style={{marginLeft: 10}}>
          <View style={{paddingRight: 10}}>
            <View style={{ backgroundColor: "#9BFFA5", borderRadius: 15}}>
            <View style={{margin: 10}}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  alignSelf: "center",
                  paddingBottom: 20,
                }}
              >
                ĐÃ ĐẾN TAY NGƯỜI NHẬN
              </Text>
              <Text numberOfLines={5}>Cảm ơn {DATA.userName} đã cho freentship có cơ hội được phuc vụ. Freentship biết bạn có nhiều sự lựa chọn, cảm ơn vì đã chọn Freentship ngày hôm nay</Text>
            </View>
          </View>
          </View>
          
        </View>
      </View>

      <View style={{paddingBottom: 10}}></View>

      {/* in4 shop */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingTop: 10,
          paddingBottom: 10,
          borderBottomWidth: 0.3,
          borderBottomColor: "#808080",
        }}
      >
        <View style={{marginLeft: 10}}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text
                numberOfLines={1}
                style={{ fontWeight: "bold", paddingBottom: 10, fontSize: 20 }}
              >
                {foodStoreName}
              </Text>

              <Text numberOfLines={2} style={{ paddingBottom: 10, width: 290 }}>
                {foodStoreAddress}
              </Text>
            </View>
            <View style={{paddingTop: 10, paddingRight: 10 }}>
              <Image source={DATA.monAn1} style={{width: 40,
    height: 40,
    borderRadius: 25,}} />
            </View>
          </View>
        </View>
      </View>

      {/* Hai long */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <View style={{marginLeft: 10}}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ }}>
              <View style={{ flexDirection: "row"}}>
                <View>
                  <FontAwesome5 name="smile-wink" size={24} color="#E94730" />
                </View>
                <View>
                  <Text style={{ fontWeight: "bold", paddingLeft: 10, paddingTop: 3}}>Hài lòng</Text>
                </View>
              </View>
            </View>

            <View style={{ paddingRight: 10 }}>
              <TouchableOpacity>
                <Text style={{fontWeight: 'bold', color: "#00C2FF" }}>Xem đánh giá</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>

      <View style={{paddingBottom: 10}}></View>

      {/*tai xe */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingTop: 10,
          paddingBottom: 10,
          borderBottomWidth: 0.3,
          borderBottomColor: "#808080",
        }}
      >
        <View style={{marginLeft: 10}}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text
                numberOfLines={1}
                style={{ fontWeight: "bold", paddingBottom: 10, fontSize: 20 }}
              >
                Phan Tuấn Kiệt
              </Text>

              <Text numberOfLines={1} style={{ paddingBottom: 10 }}>
                78AE-D41.64 . Cup
              </Text>
            </View>
            <View style={{paddingTop: 10, paddingRight: 10 }}>
              <Image source={DATA.avt} style={{width: 40,
    height: 40,
    borderRadius: 25,}} />
            </View>
          </View>
        </View>
      </View>

      <View style={{paddingBottom: 10}}></View>

      {/* mã đơns\ */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingTop: 20,
          paddingBottom: 10,
          borderBottomWidth: 0.3,
          borderBottomColor: "#808080",
        }}
      >
        <View style={{marginLeft: 10}}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: 10,
            }}
          >
            <View>
              <Text numberOfLines={1} style={{ paddingBottom: 10 }}>
                Mã đơn {idOrder}
              </Text>
            </View>

            <View>
              <TouchableOpacity onPress={() =>
                      navigation.navigate('DetailOrderView')
                    }>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00C2FF",
                    paddingRight: 10,
                  }}
                >
                  Xem chi tiết
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flexDirection: "row", paddingBottom: 20 }}>
            <View style={{ justifyContent: "center", paddingRight: 10 }}>
              <MaterialCommunityIcons
                name="food-fork-drink"
                size={24}
                color="#E94730"
              />
            </View>

            <View>
              <Text>Nơi bán hàng</Text>
              <Text numberOfLines={2} style={{ fontWeight: "bold" }}>
                {foodStoreName}
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ justifyContent: "center", paddingRight: 10 }}>
              <AntDesign name="enviroment" size={24} color="#E94730" />
            </View>

            <View>
              <Text>Nơi giao hàng</Text>
              <Text numberOfLines={2} style={{ fontWeight: "bold", width: 320 }}>
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
          backgroundColor: "#fff",
          paddingTop: 20,
          paddingBottom: 10,
        }}
      >
        <View style={{marginLeft: 10}}>
          <View style={{width: 300, paddingBottom: 20}}>
            <Text numberOfLines={1}>
              1 món | {foodName}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold" }}>Tổng</Text>
            </View>
            <View>
              <Text style={{ fontWeight: "bold", paddingRight: 10 }}>{totalPrice}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{paddingBottom: 10}}></View>

      {/* đặt lai */}
      <View style={{ flex: 0.2 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingTop: 10,
            paddingBottom: 10,
            width: "100%",
            borderTopColor: "#808080",
            borderTopWidth: 0.3,
            // position: "absolute",
            bottom: 0,
          }}
        >
          <View style={{marginLeft: 10}}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingBottom: 10,
              }}
            >
              <View>
                <Text numberOfLines={1} style={{ color: "#808080" }}>
                  Tổng (tạm tính)
                </Text>
              </View>
              <View>
                <Text style={{ paddingRight: 10, fontWeight: "bold" }}>
                  {totalPrice}
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#00C2FF",
                borderRadius: 15,
                width: "97%",
                height: 40,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center'}}>
                <View style={{paddingRight: 10}}>
                    <Fontisto
                  name="spinner-rotate-forward"
                  size={15}
                  color="white"
                />
                </View>
                <View >
                    <Text style={{ color: "#fff" }}>Đặc lại</Text>
                </View>
                
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
