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
import { ScrollView } from "react-native-gesture-handler";
import { db } from "../../services/firebase";
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
import { Fontisto } from "@expo/vector-icons";

// Navigation
export default function DetailOrderView({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      ),

      title: "Chi tiết đơn hàng " + DATA.txtmadon,
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
  const foodPrice = food.price

  // order
  const idOrder = 'PPKK6atKTPOzCZWYvHF9'
  const [Order, setOrder] = useState([])
  useEffect(() => {
    const odr = onSnapshot(doc(db, 'orders', idOrder), doc => {
      setOrder(doc.data())
    })
  }, [idOrder])
  const totalPrice = Order.totalPrice

  // order status
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
      console.log('foodStore: ', doc.data())
      setFoodStore(doc.data())
    })
  }, [idFoodStore])
  const foodStoreName = foodStore.name
  const foodStoreImage = foodStore.image
  const foodStoreAddress = foodStore.address

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 0.8 }}>
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

        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingTop: 20,
          }}
        ></View>

        <View style={{ paddingBottom: 10 }}></View>

        {/* x món */}

        <View>
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

                  paddingBottom: 10,
                  alignItems: "center",
                }}
              >
                <View>
                  <View>
                    <Text style={{ paddingRight: 10, fontWeight: "bold" }}>
                      01
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Text
                      numberOfLines={1}
                      style={{
                        paddingRight: 10,
                        fontWeight: "bold",
                        width: 270,
                      }}
                    >
                      {foodName}
                    </Text>
                  </View>
                  <View>
                    <Text style={{ paddingRight: 10, fontWeight: "bold" }}>
                      {foodPrice}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>


        </View>

        {/* Phí ship */}
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingTop: 20,
            paddingBottom: 20,
            borderTopWidth: 0.3,
            borderTopColor: "#808080",
          }}
        >
          <View style={{ marginLeft: 10 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text numberOfLines={1}>Phí ship</Text>
              </View>
              <View>
                <Text
                  style={{
                    fontWeight: "bold",
                    paddingRight: 10,
                  }}
                >
                  {0}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ paddingBottom: 10 }}></View>

        {/* phương thức thanh toán */}
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingTop: 20,
            paddingBottom: 10,
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
                <Text
                  numberOfLines={1}
                  style={{
                    fontWeight: "bold",
                    paddingBottom: 10,
                    fontSize: 20,
                  }}
                >
                  CÁCH THANH TOÁN
                </Text>
              </View>

              {/* <View>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#00C2FF",
                      paddingRight: 10,
                    }}
                  >
                    {DATA.txtThayDoi}
                  </Text>
                </TouchableOpacity>
              </View> */}
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={{ justifyContent: "center", paddingRight: 10 }}>
                <FontAwesome5 name="money-bill-alt" size={24} color="black" />
              </View>

              <View style={{ alignItems: "center" }}>
                <Text numberOfLines={2}>{DATA.txtPttt}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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
          <View style={{ marginLeft: 10 }}>
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
              <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ paddingRight: 10 }}>
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
    </View>
  );
}
