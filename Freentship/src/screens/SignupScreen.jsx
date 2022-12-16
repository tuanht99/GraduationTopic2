import { View, Text, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Picker } from '@react-native-picker/picker'
import { TextInput, Button } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../services/config'
import { auth } from '../services/config'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export function SignupScreen({ navigation }) {
  const [selectedSex, setSelectedSex] = useState('Nam')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [citizenID, setcitizenID] = useState('')
  const [authUser, setAuthUser] = useState()
  const [isValidateEmail, setIsValidateEmail] = useState(true)
  const [isValidateName, setIsValidateName] = useState(true)
  const [isValidateCitizenID, setIsValidateCitizenID] = useState(true)
  const signUp = async () => {
    await setDoc(doc(db, 'users', authUser.uid + ''), {
      name: name,
      citizenID: citizenID,
      email: email,
      avatar:
        'https://firebasestorage.googleapis.com/v0/b/freentship.appspot.com/o/avatar%2FnormalAvatar.png?alt=media&token=e0610384-f0fe-44cf-9988-0a5b41eb1836',
      phone: authUser.phoneNumber,
      sex: selectedSex
    })
  }

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setAuthUser(user)
      } else {
        // User is signed out
        // ...
      }
    })
  }, [])

  return (
    <SafeAreaView style={{ padding: 16 }}>
      <TextInput
        outlineColor="#E94730"
        selectionColor="#E94730"
        activeOutlineColor="black"
        mode="outlined"
        label="Họ tên"
        value={name}
        onChangeText={setName}
      />
      {isValidateName ? (
        ''
      ) : (
        <Text style={{ color: 'red' }}>Không được để trống tên!</Text>
      )}
      <TextInput
        disabled={true}
        outlineColor="#E94730"
        selectionColor="#E94730"
        keyboardType="phone-pad"
        activeOutlineColor="black"
        mode="outlined"
        label="Phone"
        value={authUser ? authUser.phoneNumber : ''}
        style={{ marginTop: 10 }}
      />
      <TextInput
        outlineColor="#E94730"
        selectionColor="#E94730"
        keyboardType="email-address"
        activeOutlineColor="black"
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={{ marginTop: 10 }}
      />
      {isValidateEmail ? (
        ''
      ) : (
        <Text style={{ color: 'red' }}>Email chưa hợp lệ!</Text>
      )}
      <TextInput
        outlineColor="#E94730"
        selectionColor="#E94730"
        keyboardType="numeric"
        activeOutlineColor="black"
        mode="outlined"
        label="CCCD"
        value={citizenID}
        onChangeText={setcitizenID}
        style={{ marginTop: 10 }}
      />
      {isValidateCitizenID ? (
        ''
      ) : (
        <Text style={{ color: 'red' }}>Mã CCCD phải đủ 12 số!</Text>
      )}
      <Text style={{ marginTop: 16 }}>Giới tính</Text>
      <Picker
        selectedValue={selectedSex}
        onValueChange={(itemValue, itemIndex) => setSelectedSex(itemValue)}
      >
        <Picker.Item label="Nam" value="Nam" />
        <Picker.Item label="Nữ" value="Nữ" />
        <Picker.Item label="Khác" value="Khác" />
      </Picker>

      <Button
        buttonColor="#E94730"
        mode="contained"
        onPress={() => {
          console.log('cc')
          name === '' ? setIsValidateName(false) : setIsValidateName(true)
          citizenID.length != 12
            ? setIsValidateCitizenID(false)
            : setIsValidateCitizenID(true)
          !/\S+@\S+\.\S+/.test(email)
            ? setIsValidateEmail(false)
            : setIsValidateEmail(true)
          if (
            /\S+@\S+\.\S+/.test(email) &&
            name !== '' &&
            citizenID.length == 12
          ) {
            signUp()
            navigation.navigate('SignupPending')
          }
        }}
      >
        Sign up
      </Button>
    </SafeAreaView>
  )
}
