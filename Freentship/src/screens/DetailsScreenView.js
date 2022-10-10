import React from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const DetailsScreenView = ({ navigation, route }) => {
  return (
    <View>
      <View>
        <View>
          <Image
            source={require("../assets/nuoc_c2.png")}
            style={styles.itemImage}
          />
        </View>
      </View>

      <View>
        <Text style={styles.itemName}>Nước ngọt C2</Text>
        <Text style={styles.itemPrice}>20.000 đ</Text>
        <Text style={styles.shopAddress}>
          52 Bế Văn Đàn, An Bình, Dĩ An, Bình Dương
        </Text>
      </View>

      <View>
        <TouchableOpacity style={styles.btnBuy}>
          <Text style={styles.btnBuyText}>Chọn Mua</Text>
        </TouchableOpacity>
      </View>

      <View>
        <View>
          <Text>Sản phẩm cùng cửa hàng</Text>
        </View>

        <View style={styles.shopForItem}>
          <View>
            <Image
              source={require("../assets/nuoc_c2.png")}
              style={styles.shopImage}
            />
          </View>

          <View>
            <Text style={styles.shopName}>Tea 1996</Text>
            <Text style={styles.shopStatus}>20 sản phẩm</Text>
            <Text style={styles.shopAddress}>
              52 Bế Văn Đàn, An Bình, Dĩ An, Bình Dương
            </Text>
          </View>

          <View>
            <TouchableOpacity style={styles.btnShop}>
              <Text style={styles.btnShopText}>Xem cửa hàng</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* San pham lien quan */}
        <View style={styles.shopForItem}>
          <View>
            <Image
              source={require("../assets/nuoc_c2.png")}
              style={styles.itemImage}
            />
            <Text style={styles.itemPrice}>20.000 đ</Text>
          </View>

          <View>
            <Image
              source={require("../assets/nuoc_c2.png")}
              style={styles.itemImage}
            />
            <Text style={styles.itemPrice}>20.000 đ</Text>
          </View>

          <View>
            <Image
              source={require("../assets/nuoc_c2.png")}
              style={styles.itemImage}
            />
            <Text style={styles.itemPrice}>20.000 đ</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const TEXTLIGHT = {
  color: "#fff",
  textAlign: "center",
};

const TEXTDARK = {
  color: "#000",
  fontWeight: "bold",
};

const CONTEN = {
  PaddingLeft: 10,
};

// Tạo biến chứa và css
const styles = StyleSheet.create({
  text: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  brnBuyText: {
    ...TEXTLIGHT,
    justifyContent: "center",
  },

  btnBuy: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E94730",
    borderRadius: 25,
    margin: 30,
  },

  btnShop: {
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    margin: 30,
  },

  btnShopText: {
    textColor: "#E94730",
    textDecorationColor: "#E94730",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  itemName: {
    ...TEXTDARK,
    position: "absolute",
    width: 95,
    height: 17,
    left: 13,
    top: 481,
    fontfamily: "Inter",
    lineheight: 17,
    fontSize: 14,
   
    lineHeight: 17,
  },

  itemPrice: {
    ...TEXTDARK,
    position: 'absolute',
    width: 59,
    height: 16,
    left: 13,
    top: 506,
    fontfamily: "Inter",
  
    fontsize: 13,
    lineheight: 16,
  },

  shopName: {
    ...TEXTDARK,
  },

  shopAddress: {
    ...TEXTDARK,
  },

  shopStatus: {
    ...TEXTDARK,
    position: 'absolute',
    width: 79,
    height: 12,
    left: 14,
    top: 537,
    fontfamily: "Inter",
  
    fontsize: 10,
    lineheight: 12,
  },

  // Dồn thành 1 hàng
  shopForItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default DetailsScreenView;
