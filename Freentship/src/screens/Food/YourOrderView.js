import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import {
  doc,
  setDoc,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
  where,
  query,
  QuerySnapshot,
  editDoc,
  onSnapshot,
} from "firebase/firestore";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

import { db } from "../../services/firebase";

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
 
  userName: "Phú",
  txtyour: "bạn",
  txtDatDon: "Tiếp theo",
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
export default function YourOrderView({ navigation }) {
  // const { food_price } = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      ),

      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("OrderCanceledView")}>
          <Text>Hủy đơn</Text>
        </TouchableOpacity>
      ),

      title: "Đơn hàng của bạn",
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 15,
      },
    });
  }, [navigation]);

  // const [food_Price, setFoodPrice] = useState([inYourOrder]);
  
  const [inYourOrder, setInYourOrder] = useState([]);

  //get information of yourorer
  useEffect(() => {
    let unsubscribe;
    setInYourOrder(null);
    const getYourOrder = async () => {
      const orderRef = collection(db, "orders");
      const c = query(
        orderRef
        // where("category_Id", "==", category.id)
      );
      console.log(collection(db, "orders"));
      const querySnapshot = await getDocs(c);
      const inYourOrder = [];
      unsubscribe = onSnapshot(c, (querySnapshot) => {
        setInYourOrder(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      });
    };
    getYourOrder();
    return unsubscribe;
  }, []);
  console.log('ordersset', inYourOrder)
  
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
  //const totalPrice = Order.totalPrice

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
    <ScrollView data={inYourOrder} style={{ flex: 1 }}>
      <View style={{ paddingBottom: 10 }}></View>

      {/* cam on */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <View style={{ marginLeft: 10 }}>
          <Text>Cảm ơn</Text>
          <Text style={{ fontWeight: "bold", color: '#000' }}>
            {/* {setInYourOrder.price} */}
            Phu
            </Text>
          
          <Text>đã cho freentship có cơ hội được phuc vụ</Text>
        </View>
      </View>

      <View style={{ paddingBottom: 10 }}></View>

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
        <View style={{ marginLeft: 10 }}>
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
              <TouchableOpacity onPress={() => navigation.navigate("DetailOrderView")}>
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
        <View style={{ marginLeft: 10 }}>
          <View>
            <Text numberOfLines={1}>
              1 món | {foodName}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: 10,
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold" }}>Tổng</Text>
            </View>
            <View style={{marginRight: 10}}>
              <Text style={{ fontWeight: "bold" }}>
                {/* {totalPrice} */}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ paddingBottom: 10 }}></View>

      {/* Liên hệ */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingTop: 20,
          paddingBottom: 10,
        }}
      >
        <View style={{ marginLeft: 10 }}>
          <View style={{ paddingTop: 20, paddingBottom: 20 }}>
            <Text style={{ fontWeight: "bold" }}>
              Liên hệ - CHKH Freentship
            </Text>
            <Text numberOfLines={2}>
              Freentship sẵn sàng hỗ trợ trong trường hợp quý khách gặp sự cố
              với đơn hàng
            </Text>
            <Text>
              Hotline: <Text style={{ fontWeight: "bold" }}>123456789</Text>
            </Text>
            <Text>
              Email:{" "}
              <Text style={{ fontWeight: "bold" }}>freentship@lozi.vn</Text>
            </Text>
            <Text>
              Facebook: <Text style={{ fontWeight: "bold" }}></Text>
              facebook.com/FreeshipVN
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
