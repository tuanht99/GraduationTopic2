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

import { Fontisto } from "@expo/vector-icons";

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
  txtShip: "2.000",
};

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

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 0.8 }}>
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

        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingTop: 20,
          }}
        ></View>

        <View style={{paddingBottom: 10}}></View>

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
            <View style={{marginLeft: 10}}>
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
                      {DATA.name}
                    </Text>
                  </View>
                  <View>
                    <Text style={{ paddingRight: 10, fontWeight: "bold" }}>
                      {DATA.price}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

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

                  paddingBottom: 10,
                  alignItems: "center",
                }}
              >
                <View>
                  <View>
                    <Text style={{ paddingRight: 10, fontWeight: "bold" }}>
                      02
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
                      {DATA.namesp}
                    </Text>
                  </View>
                  <View>
                    <Text style={{ paddingRight: 10, fontWeight: "bold" }}>
                      {DATA.price}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

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

                  paddingBottom: 10,
                  alignItems: "center",
                }}
              >
                <View>
                  <View>
                    <Text style={{ paddingRight: 10, fontWeight: "bold" }}>
                      02
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
                      {DATA.namesp}
                    </Text>
                  </View>
                  <View>
                    <Text style={{ paddingRight: 10, fontWeight: "bold" }}>
                      {DATA.price}
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
          <View style={{marginLeft: 10}}>
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
                  {DATA.txtShip}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{paddingBottom: 10}}></View>

        {/* phương thức thanh toán */}
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingTop: 20,
            paddingBottom: 10,
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

              <View>
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
              </View>
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
                  {DATA.txtTong}
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
    </View>
  );
}
