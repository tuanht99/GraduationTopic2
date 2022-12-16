import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  Alert
} from 'react-native'
import React from 'react'
import { GetVourcher, UpdateVourcher } from '../../services'
import { useState, useEffect } from 'react'
import { TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
export default function Coupons({ navigation, route }) {
  const { User, id } = route.params
  const [textInputValue, setTextInputValue] = React.useState('')

  const [ListCoupon, setListCoupon] = useState([])
  const [masterData, setMasterData] = useState([])
  //   du liệu Coupon
  useEffect(() => {
    GetVourcher()
      .then(data => {
        setListCoupon(data)
        setMasterData(data)
      })
      .catch(err => console.log('error =>', err))
  }, [])

  //   tìm kiếm
  const searchFitter = text => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.ten
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
      })
      setListCoupon(newData)
      setTextInputValue(text)
    } else {
      setListCoupon(masterData)
      setTextInputValue(text)
    }
  }

  // Lưu mã yêu thích

  console.log(User.vouchers)

  // renderItem
  const Item = ({ item }) => (
    <View style={styles.item}>
      <View
        style={{
          marginBottom: 50,
          backgroundColor: '#fff',
          flex: 1,
          flexDirection: 'row'
        }}
      >
        {/* <AntDesign style={{ marginRight:30}} name="fa-sharp" size={24} color="black" /> */}
        <TouchableOpacity
          onPress={() => {
            if (!User.vouchers.includes(item.id)==true) {
              UpdateVourcher(item.id, id)
            } else {
              Alert.alert('Thông báo', 'Bạn đã lưu mã này rồi', [
                { text: 'OK', onPress: () => console.log('OK Pressed') }
              ])
            }
          }}
          style={{ flexDirection: 'column' }}
        >
          <View style={{ flex: 3, flexDirection: 'row' }}>
            <Image
              style={{ height: 30, width: 30, marginRight: 5 }}
              source={require('../../../assets/coupon.png')}
            ></Image>
            <Text style={{ fontSize: 20 }}>{item.ten}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
  // renderItem 1
  const renderItem = ({ item }) => (
    <View>
      <Item item={item} />
    </View>
  )
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* view input */}
      <View
        style={{
          flex: 1,
          backgroundColor: 'White',
          margin: 10,
          flexDirection: 'row'
        }}
      >
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            placeholderTextColor: 'gray',
            fontWeight: 'bold',
            margin: 10,
            flex: 3
          }}
          onChangeText={text => searchFitter(text)}
          value={textInputValue}
          placeholder="Nhập Mã Vourcher"
        />
      </View>
      {/* end view input */}
      {/* View platlist */}
      <View
        style={{ backgroundColor: '#90EE90', flex: 1, flexDirection: 'row' }}
      >
        <View style={{ flex: 3 }}>
          <Text
            style={{
              fontSize: 20,
              paddingBottom: 10,
              paddingTop: 10,
              paddingRight: 10,
              paddingLeft: 10
            }}
          >
            Tên khuyến mãi:
          </Text>
        </View>
      </View>

      <View style={{ flex: 9, margin: 10 }}>
        <FlatList
          style={{ padding: 10 }}
          data={ListCoupon}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  Tittle: {
    fontSize: 30,
    fontStyle: 'italic',
    color: 'white',
    // fontFamily: 'Inter',
    fontWeight: 'bold'
  },
  Logo: {
    justifyContent: 'center',

    alignContent: 'center',
    color: 'white'
  },

  Header: {
    flex: 1.5,
    backgroundColor: 'orange',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Content: {
    flex: 8
  },
  Navigator: {
    flex: 1,
    backgroundColor: 'yellow'
  }
})
