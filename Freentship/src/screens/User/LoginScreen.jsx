import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    TouchableOpacity
  } from 'react-native'
  import PhoneInput from 'react-native-phone-number-input'
  import React, { useEffect, useState, useRef } from 'react'
  import app, { auth } from '../../services/config.js'
  import { doc, getDoc } from 'firebase/firestore'
  import { db } from '../../services/config'
  
  import {
    getAuth,
    RecaptchaVerifier,
    FirebaseRecaptchaVerifierModal,
    PhoneAuthProvider
  } from 'firebase/auth'
  import AsyncStorage from '@react-native-async-storage/async-storage'
  
  export function LoginScreen({ navigation }) {
    const [value, setValue] = useState('')
    const [formattedValue, setFormattedValue] = useState('')
    const [valid, setValid] = useState(false)
    const [showMessage, setShowMessage] = useState(false)
    const phoneInput = useRef(null)
   
    // getData()
    return (
      <>
        <StatusBar barStyle="dark-content" />
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
              placeholder="Nhập số điện thoại ở đây..."
              countryPickerProps={{}}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                const checkValid = phoneInput.current?.isValidNumber(value)
                setShowMessage(true)
                setValid(checkValid ? checkValid : false)
                if (checkValid) {
                  navigation.navigate('InforView', {
                    phoneNumber: formattedValue
                  })
                }
              }}
            >
              <Text style={{ color: 'white' }}>Check</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </View>
      </>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    wrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
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
        height: 5
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10
    },
    buttonText: {
      color: 'white',
      fontSize: 14
    },
    redColor: {
      backgroundColor: '#F57777'
    },
    message: {
      borderWidth: 1,
      borderRadius: 5,
      padding: 20,
      marginBottom: 20,
      justifyContent: 'center',
      alignItems: 'flex-start'
    }
  })