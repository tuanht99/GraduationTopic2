import React from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import Quantity from "../Components/Quantity";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";




// Navigation
export default function CartView({ navigation, route }) {
  const [Total, setTotal] = useState(0);
  const {carts} = route.params;
    console.log('carts: ', carts);


  React.useEffect(() => {
    let total = 0;
    carts.forEach((item) => {
        total += item.price * item.Quantity;
    });
      setTotal(total);
  })
 
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
        alignItems:'center',
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
              <View style={{margin:10}}></View>
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
                
                </View>
                {/* Tang Giam  */}
                <Quantity setData={setData} ></Quantity>
              </View>
            </View>
          </View>

        </View>
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
                
                </View>
                {/* Tang Giam  */}
                <Quantity setData={setData} ></Quantity>
              </View>
            </View>
          </View>

        </View>
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
                
                </View>
                {/* Tang Giam  */}
                <Quantity setData={setData} ></Quantity>
              </View>
            </View>
          </View>

        </View>
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
                
                </View>
                {/* Tang Giam  */}
                <Quantity setData={setData} ></Quantity>
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
                  {Total}
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
