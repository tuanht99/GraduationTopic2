import {
  View,
  Text,
  TouchableOpacity,

  StyleSheet,
  FlatList,
  Image
} from 'react-native'
import React, { useState, useEffect } from 'react'
import {  GetVourcherUser, GetListVourcherUser } from '../services'

export default function ModalSimple(props) {
  const [ChooseCoupon, setChooseCoupon] = useState()
  const [User, setUser] = useState(undefined)
  const [listCoupon, setListCoupon] = useState()
  const IDU = 'kxzmOQS3sVUr2pm9AbLI'


  const CloseModal = (bool ,data)=>{
    props.changeModalVisible(bool);
    props.setData(data);
}

  useEffect(() => {
    GetVourcherUser(IDU)
      .then(data => {
        setUser(data)
      })
      .catch(err => console.log('error =>', err))
  }, [])
  // lấy vourcher

  useEffect(() => {
    GetListVourcherUser('21LewmsZL2MjsNZ1ttz1').then(data => {
      setListCoupon(data)
    })
  }, [])
  const Item = ({ item }) => (
    <View style={styles.item}>
      <View
        style={{
          marginBottom: 10,
          backgroundColor: '#fff',
          flex: 1,
          flexDirection: 'row'
        }}
      >
        {/* <AntDesign style={{ marginRight:30}} name="fa-sharp" size={24} color="black" /> */}
        <TouchableOpacity
          onPress={() => {
              setChooseCoupon(item)
          
          }}
          style={{ flexDirection: 'row' }}
        >
    <Image style={{height:30,width:30,marginRight:5}} source={require("../../assets/coupon.png")}></Image>

          <View style={{  flexDirection: 'row' }}>
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
    <TouchableOpacity disabled={true} style={styles.container}>
      <View style={styles.Modal}>
        <FlatList
          data={listCoupon}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <View style={styles.Choose}>
          <View style={styles.buttionView}>
            <TouchableOpacity
              style={styles.TouchableOpacity}
              onPress={() => CloseModal(false)}
            >
              <Text style={{ color: 'blue' }}> Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity}
              onPress={() => CloseModal(false, ChooseCoupon)}
            >
              <Text style={{ color: 'blue' }}> OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Modal: {
    height: 300,
    borderRadius: 10,
    margin: 50,
    width: 300,
    backgroundColor: 'white',
  },
  TouchableOpacity: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10
  },
  buttionView: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center'
  },
  Choose:{
    backgroundColor: 'red'
  }
})
