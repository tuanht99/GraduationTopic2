import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Button,
  Alert 
} from 'react-native'
import React, { useState,useEffect } from 'react'
import AppStyle from '../../themes/ChangePhoneTheme'
import { Ionicons } from '@expo/vector-icons'
import { db } from '../../services/config'

import { AntDesign } from '@expo/vector-icons'
import {
  doc,
  setDoc,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
  where,
  query,
  QuerySnapshot,
  editDoc,
  onSnapshot
} from 'firebase/firestore'
export default function InputPhoneNumScreen({ navigation, route }) {
  const { guestname, avatar, date, sex, id, gmail, phone } = route.params
  const [value, setValue] = useState('')
  const number = parseInt(value);
  console.log("value : "+ number);
  console.log("ten:"+ guestname);

  console.log("ngay :"+ date);
  console.log("email  :"+ gmail);

  console.log("avatar: "+ avatar);
  console.log("sex : " +sex);
  function editphone() {
    updateDoc(doc(db, 'users', id), {
      name: guestname,
      dateOfBirth: date,
      avatar: avatar,
      sex: sex,
      email: gmail,
      phone: number, 
    })
    Alert.alert(
      "Thông báo",
      "Thay đổi số điện thoại  thành công",
      [
       
        { text: "OK" }
      ]
    )
  }
 

  navigation.goback
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      ),

      title: 'OTP Thay đổi số điện thoại',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 15,
        alignItems: 'center',
        color: 'red',
        backgroundColor: 'red'
      }
    })
  }, [navigation])
  return (
    <SafeAreaView style={AppStyle.container}>
      <View style={AppStyle.Inputphone}>
        <Text style={AppStyle.TextTitle}>Nhập số hiện tại</Text>
        <View style={AppStyle.inputContainer}>
          <TextInput style={AppStyle.inputField}>0{phone}</TextInput>
        </View>
        <Text style={AppStyle.TextTitle}>Nhập số mới</Text>
        <View style={AppStyle.inputContainer}>
          <TextInput    onChangeText={setValue} style={AppStyle.inputField}></TextInput>
        </View>
      </View>

      <View style={AppStyle.bottom}>
        <Button color={'#E94730'} onPress={editphone  } title="Xác Nhận"></Button>
      </View>
    </SafeAreaView>
  )
}
