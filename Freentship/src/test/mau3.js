import React,{Component}from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Quantity from "../screens/Quantity";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";

import Products from "../Components/Products"
import { addToCart } from "../reducers/cartItems"
import { FoodsOder } from '../redux/Data'
import { useState } from "react";
const StoreContainer = () => {
  const dispatch = useDispatch();
  // const [Data, setData] = useState();

  // useEffect(() => {
  //   // console.log("cart", cart);
  //   fetch("https://course-api.com/react-useReducer-cart-project")
  //     .then((res) => res.json())
  //     .then((json) => setData(json));
  // }, []);

  console.log(FoodsOder);
  console.log();
const StoreItems = () => {
  const renderStoreItems = ({ item }) => {
    return (
      <View style={styles.storeItem}>
        <View style={styles.storeItemImg}>
          <Image style={styles.storeItemImage} source={{ uri: item.image }} />
        </View>
        <View style={styles.storeItemInfo}>
          <Text style={styles.storeItemTitle}>{item.tittle}</Text>
          <Text style={styles.storeItemPrice}>${item.price}</Text>
          <TouchableOpacity
            onPress={() => {
              dispatch(addToCart(item));
            }}
            style={styles.addToCart}
          >
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
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
        
      </View>
      </View>
    );
  };

  return (
    <View  styles={{flex:1}}>
      <FlatList
      styles={{flex:1}}
        data={FoodsOder}
        renderItem={renderStoreItems}
        keyExtractor={(item) => item.id}
        ListFooterComponent={() => <View style={{ height: 200 }} />}
      />
      <View style={{ flex: 0.2 }}>
    
    </View>
    </View>
  );
};
return (
  <View>
    <StoreItems />
  </View>
);

}

const styles = StyleSheet.create({
  storeItem: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    justifyContent: "center",
  },
  storeItemImg: {
    width: "30%",
    height: 100,
    borderRadius: 5,
    overflow: "hidden",
  },
  storeItemImage: {
    width: "100%",
    height: "100%",
  },
  storeItemInfo: {
    width: "70%",
    padding: 10,
  },
  storeItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  storeItemPrice: {
    fontSize: 16,
    color: "red",
  },
  addToCart: {
    backgroundColor: "coral",
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  cartItemAmount: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
  cartItemAmountText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cartItemRemove: {
    alignItems: "center",
    justifyContent: "center",
  },
  cartItemRemoveButton: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartFooter: {
    justifyContent: "space-between",
  },
});

export default StoreContainer;
