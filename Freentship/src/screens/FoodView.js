import {
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, Feather, Ionicons } from "react-native-vector-icons";
import Products from "../Components/Products";
import Category1 from "../Components/Category1";
import { DataFood } from "../core/data";
import FoodTheme from "../themes/FoodTheme";

const txtSearch = 'Bạn thêm món gì?';
const txtTitleAddress = 'Giao tới địa chỉ';
const txtCategory1 = 'chọn theo thể loại';
const txtCategory2 = 'khám phá món mới';
const txtCategory3 = 'cửa hàng gần bạn';

function FoodScreen({ navigation, route }) {
  return (
    <ScrollView style={FoodTheme.container}>
      <View style={{ paddingHorizontal: 14, backgroundColor: '#fefefe' }}>
        <TouchableOpacity style={FoodTheme.food1} onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#0e0e0e" style={{ padding: 14 }} />
        </TouchableOpacity>
        <View style={FoodTheme.food2}>
          <Feather name="search" size={24} color="#0e0e0e" style={{ padding: 14 }} />
          <TextInput placeholder={txtSearch} style={{ flex: 1 }} />
        </View>
      </View>
      <View style={FoodTheme.food3}>
        <Text style={{ color: '#aaa' }}>{txtTitleAddress}</Text>
        <View style={FoodTheme.food4}>
          <Ionicons name="location" size={20} color="#E94730" style={{ marginHorizontal: 4 }} />
          <Text style={{ color: '#0e0e0e' }}>53 đường võ văn ngân, linh chiểu, thủ đức, t...</Text>
          <MaterialIcons name="navigate-next" size={20} color="#0e0e0e" />
        </View>
      </View>
      <View style={{ marginTop: 14, marginBottom: 24 }}>
        <Category1 title={txtCategory1} data={DataFood.data4} />
        <Products title={txtCategory2} data={DataFood.data5} />
        <Products title={txtCategory3} data={DataFood.data1} />
      </View>
    </ScrollView>
  );
}

export default FoodScreen;