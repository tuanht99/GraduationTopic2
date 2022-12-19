import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import { MaterialIcons, Ionicons } from "react-native-vector-icons";
import TextImage from "../Components/TextImage";
import Products from "../Components/Products";
import { DataHome } from "../core/data";
import HomeTheme from "../themes/HomeTheme";

const txtCategory1 = 'thử quán mới';
const txtCategory2 = 'đang khuyến mãi';
const txtCategory3 = 'thương hiệu quen thuộc';
const txtFood1 = 'Giao đồ ăn';
const txtFood2 = 'Gọi xe';
const txtFood3 = 'Đi chợ';
const txtFood4 = 'Giao hàng';
const txtFood5 = 'Siêu thị LoX';
const txtFood6 = 'Mua mỹ phẩm';
const txtFood7 = 'Giặt ủi';
const txtFood8 = 'Mua thuốc';
const txtFood9 = 'Shopping';
const txtFood10 = 'Chăm thú cưng';
const txtFood11 = 'Giao hoa';

export default function HomeView({ navigation }) {
  return (
    <ScrollView contentContainerStyle={HomeTheme.container}>
      <View style={{ height: 130 }}>
        <ImageBackground
          source={require("../assets/backgroundHome.png")}
          style={{ height: 130 }}
        >
          <View
            style={HomeTheme.home1}
          >
            <View
              style={HomeTheme.home2}
            >
              <Ionicons
                name="location"
                size={24}
                color="#E94730"
                style={{ marginEnd: 4 }}
              />
              <Text style={{ marginTop: 4, color: "#eee" }}>
                53 đường võ văn ngân, linh chiểu, thủ đức, t...
              </Text>
              <MaterialIcons name="navigate-next" size={30} color="#FEFEFE" />
            </View>
          </View>
        </ImageBackground>
      </View>
      <View
        style={HomeTheme.home3}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 18,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#fefefe",
              paddingVertical: 5,
              paddingLeft: 3,
              paddingRight: 43,
              borderRadius: 30,
            }}
          >
            <Image
              source={require("../assets/avatar.jpg")}
              style={{
                height: 40,
                width: 40,
                borderRadius: 25,
                borderWidth: 1,
                borderColor: "#ccc",
              }}
            />
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                marginTop: 6,
                marginStart: 8,
              }}
            >
              Chào buổi tối, Khanh
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <TextImage
              navigation={navigation}
              nameImage="food.png"
              text={txtFood1}
            />
            <TextImage
              navigation={navigation}
              nameImage="food.png"
              text={txtFood2}
            />
            <TextImage
              navigation={navigation}
              nameImage="food.png"
              text={txtFood3}
            />
            <TextImage
              navigation={navigation}
              nameImage="food.png"
              text={txtFood4}
            />
          </View>
          <View style={{ flexDirection: "row", marginTop: 12 }}>
            <TextImage
              navigation={navigation}
              nameImage="food.png"
              text={txtFood5}
            />
            <TextImage
              navigation={navigation}
              nameImage="food.png"
              text={txtFood6}
            />
            <TextImage
              navigation={navigation}
              nameImage="food.png"
              text={txtFood7}
            />
            <TextImage
              navigation={navigation}
              nameImage="food.png"
              text={txtFood8}
            />
          </View>
          <View style={{ flexDirection: "row", marginTop: 12 }}>
            <TextImage
              navigation={navigation}
              nameImage="food.png"
              text={txtFood9}
            />
            <TextImage
              navigation={navigation}
              nameImage="food.png"
              text={txtFood10}
            />
            <TextImage
              navigation={navigation}
              nameImage="food.png"
              text={txtFood11}
            />
            <TextImage navigation={navigation} nameImage="" text="" />
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 24 }}>
        <Products title={txtCategory1} data={DataHome.data1} />
        <Products title={txtCategory2} data={DataHome.data2} />
        <Products title={txtCategory3} data={DataHome.data3} />
      </View>
    </ScrollView>
  );
}