import React, { useState } from "react";
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
  shopimage: require("../assets/images/nuoc_c2.png"),
  monAn1: require("../assets/images/nuoc_c2.png"),
  avt: require("../assets/images/nuoc_c2.png"),
  userName: "Phú",
  txtyour: "bạn",
  txtDatDon: "Đặt đơn",
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

      title: "Đơn hàng " + DATA.txtmadon,
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 15,
      },
    });
  }, [navigation]);

  return (
    <ScrollView style={{ flex: 1 }}>
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
          <Text style={{ fontWeight: "bold" }}>{DATA.userName}</Text>
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
                Mã đơn {DATA.txtmadon}
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
                {DATA.shopname}
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ justifyContent: "center", paddingRight: 10 }}>
              <AntDesign name="enviroment" size={24} color="#E94730" />
            </View>

            <View>
              <Text>Nơi giao hàng</Text>
              <Text numberOfLines={2} style={{ fontWeight: "bold" }}>
                {DATA.shopaddress}
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
              2 món | {DATA.name}, {DATA.namesp}
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
              <Text style={{ fontWeight: "bold" }}>{DATA.txtTong}</Text>
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
