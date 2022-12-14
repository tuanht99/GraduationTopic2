import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Picker } from '@react-native-picker/picker'
import { TextInput, Button } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../services/config'
import { async } from '@firebase/util'

export function SignupScreen({ navigation }) {
  const [selectedSex, setSelectedSex] = useState()
  const [name, setName] = useState()
  const [phone, setPhone] = useState()
  const [address, setAddress] = useState()
  const [citizenID, setcitizenID] = useState()
  const [userID, setUserID] = useState()
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('userID1')
      if (value !== null) {
        setUserID(value)
      }
    } catch (e) {
      // error reading value
    }
  }

  const signUp = async () => {
    console.log('thanhga', userID)
    await setDoc(doc(db, 'users', userID + ''), {
      name: name,
      phone: phone,
      citizenID: citizenID,
      sex: selectedSex
    })
  }

  useEffect(() => {
    getData()
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
        style={{}}
      />
      <TextInput
        outlineColor="#E94730"
        selectionColor="#E94730"
        keyboardType="phone-pad"
        activeOutlineColor="black"
        mode="outlined"
        label="Số điện thoại"
        value={phone}
        onChangeText={setPhone}
        style={{ marginTop: 10 }}
      />
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
          signUp()
          navigation.navigate('SignupPending')
        }}
      >
        Sign up
      </Button>
    </SafeAreaView>
  )
}
