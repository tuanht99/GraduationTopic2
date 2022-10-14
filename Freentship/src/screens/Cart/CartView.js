import React from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const DATA = {
  id: 1,
  name: "Nước ngọt c2",
  namesp: "Gì cũng đc, miễn là cùng cửa hàng",
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
};

// Navigation
export default function CartView({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      ),

      title: "Giỏ hàng của bạn",
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 15,
      },
    });
  }, [navigation]);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 0.8 }}>
        <View style={{ paddingBottom: 10 }}></View>

        {/* in4 shop */}
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <View style={{ marginLeft: 10 }}>
            <Text
              numberOfLines={1}
              style={{ fontWeight: "bold", paddingBottom: 10, fontSize: 20 }}
            >
              {DATA.shopname}
            </Text>

            <Text numberOfLines={1} style={{ paddingBottom: 10 }}>
              {DATA.shopaddress}
            </Text>
          </View>
        </View>

        <View style={{ paddingBottom: 10 }}></View>

        {/*in4 name */}
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingTop: 20,
            paddingBottom: 20,
            borderBottomWidth: 0.3,
            borderBottomColor: "#808080",
          }}
        >
          <View style={{ marginLeft: 10 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={DATA.avt}
                style={{ width: 70, height: 70, borderRadius: 5 }}
              />

              <View style={{ paddingLeft: 10 }}>
                <Text numberOfLines={1} style={{ fontWeight: "bold" }}>
                  {DATA.userName}
                </Text>
              </View>
              <View style={{ paddingLeft: 10 }}>
                <Text
                  numberOfLines={1}
                  style={{ color: "#808080", width: 190 }}
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
              backgroundColor: "#fff",
              paddingTop: 10,
              paddingBottom: 20,
            }}
          >
            <View style={{ marginLeft: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingBottom: 50,
                }}
              >
                <View>
                  <Text numberOfLines={1}>{DATA.name}</Text>
                </View>
                <View>
                  <Text style={{ paddingRight: 10, fontWeight: "bold" }}>
                    {DATA.price}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: 10,
                      width: 80,
                      height: 30,
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: 0.3,
                      borderColor: "#808080",
                    }}
                  >
                    <Text style={{ color: "#000", fontWeight: "bold" }}>
                      {DATA.txtThayDoi}
                    </Text>
                  </TouchableOpacity>
                </View>
                {/*  */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 0.4,
                    paddingRight: 10,
                  }}
                >
                  <View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: 5,
                        width: 20,
                        height: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 0.3,
                        borderColor: "#808080",
                      }}
                    >
                      <Text style={{ fontWeight: "bold" }}>-</Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text style={{ fontWeight: "bold" }}>01</Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: 5,
                        width: 20,
                        height: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 0.3,
                        borderColor: "#808080",
                      }}
                    >
                      <Text style={{ fontWeight: "bold" }}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* ne */}
          <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
              paddingTop: 10,
              paddingBottom: 20,
            }}
          >
            <View style={{ marginLeft: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingBottom: 50,
                }}
              >
                <View>
                  <Text numberOfLines={1}>{DATA.name}</Text>
                </View>
                <View>
                  <Text style={{ paddingRight: 10, fontWeight: "bold" }}>
                    {DATA.price}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: 10,
                      width: 80,
                      height: 30,
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: 0.3,
                      borderColor: "#808080",
                    }}
                  >
                    <Text style={{ color: "#000", fontWeight: "bold" }}>
                      {DATA.txtThayDoi}
                    </Text>
                  </TouchableOpacity>
                </View>
                {/*  */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 0.4,
                    paddingRight: 10,
                  }}
                >
                  <View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: 5,
                        width: 20,
                        height: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 0.3,
                        borderColor: "#808080",
                      }}
                    >
                      <Text style={{ fontWeight: "bold" }}>-</Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text style={{ fontWeight: "bold" }}>01</Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: 5,
                        width: 20,
                        height: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 0.3,
                        borderColor: "#808080",
                      }}
                    >
                      <Text style={{ fontWeight: "bold" }}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* ne */}
          <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
              paddingTop: 10,
              paddingBottom: 20,
            }}
          >
            <View style={{ marginLeft: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingBottom: 50,
                }}
              >
                <View>
                  <Text numberOfLines={1}>{DATA.name}</Text>
                </View>
                <View>
                  <Text style={{ paddingRight: 10, fontWeight: "bold" }}>
                    {DATA.price}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: 10,
                      width: 80,
                      height: 30,
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: 0.3,
                      borderColor: "#808080",
                    }}
                  >
                    <Text style={{ color: "#000", fontWeight: "bold" }}>
                      {DATA.txtThayDoi}
                    </Text>
                  </TouchableOpacity>
                </View>
                {/*  */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 0.4,
                    paddingRight: 10,
                  }}
                >
                  <View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: 5,
                        width: 20,
                        height: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 0.3,
                        borderColor: "#808080",
                      }}
                    >
                      <Text style={{ fontWeight: "bold" }}>-</Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text style={{ fontWeight: "bold" }}>01</Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: 5,
                        width: 20,
                        height: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 0.3,
                        borderColor: "#808080",
                      }}
                    >
                      <Text style={{ fontWeight: "bold" }}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
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
            backgroundColor: "#fff",
            paddingTop: 10,
            paddingBottom: 10,
            width: "100%",
            borderTopColor: "#808080",
            borderTopWidth: 0.3,

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
                  {DATA.txtTong}
                </Text>
              </View>
            </View>

            <TouchableOpacity 
              onPress={() => navigation.navigate("OrderView")}
              style={{
                backgroundColor: "#E94730",
                borderRadius: 15,
                width: "97%",
                height: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#fff" }}>{DATA.txtDatDon}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
