import React from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
// import Ansync from "../../components/asyncStore/AsyncStorage"
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
const DATA = {
  id: 1,
 
 
  
  status: "",
  shopaddress: "52 Bế văn đàn, an bình, dĩ an, bình dương",
  shopSl: "14 sản phẩm",
  shopname: "Tea 1998",
 
  userName: "Phú",
  txtyour: "bạn",
  txtDatDon: "Đặt đơn",
  txtsplq: "Sản phẩm cùng cửa hàng",
  txtXemCuaHang: "Xem cửa hàng",
  txtDis: "Thông tin sản phẩm",
 
};


// Navigation
export default function CartView({ navigation, route }) {


  const { nameOrder, priceOrder, ImageOrder,storeOrder, storeN,storeAdr,storeIM} = route.params;
  const imageParams = ImageOrder;
  const storeOrders = storeOrder;
  const storeNameParams= storeN;
  const storeImageParams = storeIM;
  const storeAddressParams = storeAdr;
  
  // lấy tên
  // console.log(imageParams);
  // chuyển chuỗi thành số
  const priceOrders = Number(priceOrder);
  // console.log(priceOrders);
  // giá trị số lượng
  const [Quantity, setQuantity] = useState(1);
  // tăng giảm số lượng
  function IncreaseQuantity() {
    if (Quantity > 0) {

      setQuantity(prevState => prevState - 1);

    }
    else {
      setQuantity(0);
    }
  }
  function DecreaseQuantity() {

    setQuantity(prevState => prevState + 1);

  }
  // tổng tiền
  const [Total, setTotal] = useState(0);

  // tính tổng tiền
  React.useEffect(() => {
    setTotal(Quantity * priceOrders);
  }, [Quantity])
  
  // mảng dữ liệu
  const tittle= nameOrder;
  const price = priceOrders;
  const total = Total ;
  const quantity = Quantity ;
  const image = imageParams ;
  const arr = [];
  React.useEffect(() => {
    arr.push(
      cart=[
      tittle,
      price,
      total,
      quantity,
      image,
      ])
    console.log("mảng : "+arr[0]);
  
  },  [nameOrder])
 

  
  const state = {


    name: '',
    price: '',
    quantity: '',
    ImageOrder: ''

  };
  

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
        alignItems: 'center',
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
        {/*in4 user */}
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

        <View style={{ margin: 10 }}></View>

        {/* ****************san pham da them vao gio hang******************************** */}
        <View>
          {/* ne */}

          <View style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingTop: 10,
            paddingBottom: 20,
          }}>
            <View style={{ marginLeft: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingBottom: 50,
                }}
              >
                <View>
                  <Text numberOfLines=
                    {1}>
                    {nameOrder}
                  </Text>
                  <View style={{
                    marginTop: 20,
                    marginBottom: -75

                  }}>
                    <Image source={{ uri: imageParams }} style={{ width: 80, height: 80 }} />
                  </View>
                </View>

                <View>

                  <Text style={{ paddingRight: 10, fontWeight: "bold" }}>
                    {priceOrders}{" Đ"}
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

                </View>
                {/* Tang Giam  */}
                <View style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  flex: 0.4,
                  paddingRight: 10,
                }}>
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

                      onPress={() => { IncreaseQuantity() }}
                    >




                      <Text style={{ fontWeight: "bold" }}>-</Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text style={{ fontWeight: "bold" }}>{Quantity}</Text>
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
                      onPress={() => { DecreaseQuantity() }}
                    >
                      <Text style={{ fontWeight: "bold" }}>+</Text>
                    </TouchableOpacity>
                  </View>

                </View>
              </View>
            </View>

          </View>

        </View>
        {/* end */}
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
                  {Total + " Đ"}
                </Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("OrderView", {
                nameOrder: nameOrder,
                priceOrder: priceOrder,
                ImageOrder: imageParams,
                Totals: Total,
                Quantity: Quantity,
                storeOrder,
                 storeN,
                 storeAdr,
                 storeIM,
              

              })}

              style={{
                backgroundColor: "#E94730",
                borderRadius: 15,
                width: "97%",
                height: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text onPress={inputHandler} style={{ color: "#fff" }}>{DATA.txtDatDon}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
