import { StyleSheet, Text, View,TouchableOpacity,StatusBar,SafeAreaView } from 'react-native'
import React from 'react'
import  { useState, useEffect,useRef } from 'react'
import { AntDesign } from '@expo/vector-icons'
import PhoneInput from 'react-native-phone-number-input'
import {
  getAuth,
  RecaptchaVerifier,
  FirebaseRecaptchaVerifierModal,
  PhoneAuthProvider,
} from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
export default function OTPChangeView({navigation,route}) {
  const { guestname, avatar, date, sex, id, gmail, phone } = route.params

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
      const [value, setValue] = useState('')
      const [formattedValue, setFormattedValue] = useState('')
      const [valid, setValid] = useState(false)
      const [showMessage, setShowMessage] = useState(false)
      const phoneInput = useRef(null)
      console.log("input: "+value);
      console.log("data: "+phone);

      return (
      
        
          <View style={styles.container}>
            <SafeAreaView style={styles.wrapper}>
            {showMessage && (
          <View style={styles.message}>
            <Text>Sai Quyền truy cập</Text>
            <Text>Vui lòng nhập đúng số điện thoại đã đăng kí</Text>
          </View>
        )}
              <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                defaultCode="VN"
                layout="first"
                onChangeText={setValue}
                onChangeFormattedText={setFormattedValue}
                withDarkTheme
                withShadow
                autoFocus
                placeholder="Nhập số điện thoại"
                countryPickerProps={{}}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  const checkValid =value == ("0"+phone)
                  setShowMessage(true)
                  setValid(checkValid ? checkValid : false)
                  if (checkValid) {
                    navigation.navigate('ChangePhoneView', {
                      phoneNumber: formattedValue,
                      guestname,
                      avatar,
                      date,
                      sex,
                      id,
                      gmail,
                      phone
                    })
                  }
                }}
              >
                <Text style={{ color: 'white' }}>Check</Text>
              </TouchableOpacity>
            </SafeAreaView>
          </View>
     
      )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    wrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      marginTop: 20,
      height: 50,
      width: 300,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E94730',
      shadowColor: 'rgba(0,0,0,0.4)',
      shadowOffset: {
        width: 1,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 14,
    },
    redColor: {
      backgroundColor: '#F57777',
    },
    message: {
      borderWidth: 1,
      borderRadius: 5,
      padding: 20,
      marginBottom: 20,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
  })