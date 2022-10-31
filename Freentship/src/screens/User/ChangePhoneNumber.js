import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native'
import React, { useState } from 'react'
import AppStyle from '../../themes/ChangePhoneTheme'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

export default function InputPhoneNumScreen({ navigation, route }) {
  const { guestname, avatar, date, sex, id, gmail, phone } = route.params

  function editphone() {
    updateDoc(doc(db, 'users', id), {
      guestName: username,
      dateOfBirth: date,
      avatar: avatar,
      sex: selectedLanguage,
      email: email,
      phone: phone
    })
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
          <TextInput style={AppStyle.inputField}>{phone}</TextInput>
        </View>
        <Text style={AppStyle.TextTitle}>Nhập số mới</Text>
        <View style={AppStyle.inputContainer}>
          <TextInput style={AppStyle.inputField}>0123456789</TextInput>
        </View>
      </View>

      <View style={AppStyle.bottom}>
        <Button color={'#E94730'} title="Xác Nhận"></Button>
      </View>
    </SafeAreaView>
  )
}
