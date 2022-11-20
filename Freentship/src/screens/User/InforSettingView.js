import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Alert
} from 'react-native'
import React, { useState, useEffect } from 'react'
import AppStyle from '../../themes/InforUserSettingTheme'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
// list dữ liệu
import * as ImagePicker from 'expo-image-picker'
import { db } from '../../services/config'

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
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBlob
} from 'firebase/storage'

// list

export default function InforSettingView({ navigation, route }) {
  const { guestname, avatar, date, sex, id, gmail, phone } = route.params
  // console.log('name: ' + guestname)
  // console.log('avatar: ' + avatar)
  const avatarlocal = avatar
  // console.log('sex: ' + sex)
  // console.log('id: ' + id)
  // console.log('gmail: ' + gmail)
  // console.log('phone: ' + phone)
  // update Firebase Image *************** CN xong
  const [image, setImage] = useState('')
  const [namePathImage, setNamePathImage] = React.useState(null)


 

  function editImage() {
    updateDoc(doc(db, 'users', id), {
      guestName: guestname,
      avatar: image,
      sex: sex,
      email: gmail,
      phone: phone
    }).catch(error => {
      console.log(error)
    })
    Alert.alert('Thông báo', 'Thay đổi hình ảnh thành công', [{ text: 'OK' }])

    // 7T5uG3Si5NHioADgam1Z
  }



  // image picker
  const [ChangeImage, setChangeImage] = useState(null)
  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!')
      return
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync()
    setChangeImage(pickerResult.uri)
    console.log('địa chỉ Local :' + pickerResult.uri)
    
    // test 12:29
     // TODO: Fix
    const storage = getStorage()
    // const id = Math.random().toString(36).substring(7);
    // const id = React.useId()
    const bytes = new Uint8Array(pickerResult.uri)
    const metadata = {
      contentType: 'image/jpeg'
    }
    const imgName = 'img-' + new Date().getTime()
    setNamePathImage(`images/${imgName}.jpg`)
    const storageRef = ref(storage, `images/${imgName}.jpg`)
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.onload = function () {
        resolve(xhr.response)
      }
      xhr.onerror = function () {
        reject(new TypeError('Network request failed'))
      }
      xhr.responseType = 'blob'
      xhr.open('GET', pickerResult.uri, true)
      xhr.send(null)
    })
    uploadBytes(storageRef, blob).then(snapshot => {
      // causes crash
      console.log('Uploaded a blob or file!')
    })
    setImage(pickerResult.uri)
    getDownloadURL(ref(storage, namePathImage)).then(url => {
      setImage(url)
      addDoc(collection(db, 'avatar'), {
        image: url
      })
    })
    // end
  }
  console.log('thay đổi 1: ' + image)
  // end
  // Header
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      ),

      title: 'Thông tin cá nhân',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 15,
        alignItems: 'center',
        color: 'red',
        backgroundColor: 'red'
      }
    })
  }, [navigation])

  //end
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={AppStyle.container}>
        {/* navigators  */}

        {/* avatars */}
        <View style={AppStyle.avatar}>
          <TouchableOpacity onPress={openImagePickerAsync}>
            {
              <View>
                {ChangeImage != null ? (
                  <View
                    style={{
                      position: 'relative',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Image
                      style={AppStyle.avatarchange}
                      source={{ uri: ChangeImage }}
                    />
                    <Ionicons
                      style={{ position: 'absolute', left: 200, bottom: -15 }}
                      name="md-camera-reverse-sharp"
                      size={35}
                      color="black"
                    />
                  </View>
                ) : (
                  <View
                    style={{
                      position: 'relative',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Image
                      style={AppStyle.avatarchange}
                      source={{ uri: avatarlocal }}
                    />
                    <Ionicons
                      style={{ position: 'absolute', left: 200, bottom: -15 }}
                      name="md-camera-reverse-sharp"
                      size={35}
                      color="black"
                    />
                  </View>
                )}

                <View style={{ flexDirection: 'column', flex: 4 }}>
                  <Text style={{ fontSize: 20, color: 'black' }}></Text>
                  <Text style={{ color: '#FF00FF', fontSize: 15 }}></Text>
                  <TouchableOpacity style={{}}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontStyle: 'italic',
                        textShadowColor: 'rgba(0, 0, 0, 0.75)',
                        textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 20
                      }}
                    >
                      Cập nhật hồ sơ
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            }
          </TouchableOpacity>
        </View>

        {/* Profile */}
        <View style={AppStyle.Profile}>
          {/* nút thay đổi */}
          <View style={{ flexDirection: 'row', paddingBottom: 20 }}>
            <Text style={AppStyle.profileText}>Thông tin cá nhân</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ChangeProfile', {
                  guestname,
                  avatar,
                  date,
                  sex,
                  id,
                  gmail,
                  phone
                })
              }
            >
              <Text style={AppStyle.textProfile}>thay đổi</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="person-circle-outline" size={50} color="black" />
              <Text style={AppStyle.PhoneText}>{guestname}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="mail-outline" size={50} color="black" />
              <Text style={AppStyle.PhoneText}>{gmail}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="calendar-outline" size={50} color="black" />
              <Text style={AppStyle.PhoneText}>{date}</Text>
            </View>
          </View>
        </View>
        {/* phone */}
        <View style={AppStyle.Phone}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={AppStyle.profileText}>Số điện thoại liên lạc</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('OTPChangeView', {
                  guestname,
                  avatar,
                  date,
                  sex,
                  id,
                  gmail,
                  phone
                })
              }
            >
              <Text style={AppStyle.textPhone}>thay đổi</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={{ flexDirection: 'row', paddingTop: 30 }}>
              <Ionicons name="call-outline" size={40} color="black" />
              <Text
                style={{
                  marginTop: 10,
                  paddingLeft: 5,
                  fontSize: 20,
                  textAlign: 'center',
                  color: 'black'
                }}
              >
                0{phone}
              </Text>
            </View>
          </View>
        </View>
        {/* change password */}
        <View style={AppStyle.ChangePassword}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: 'red',
              alignItems: 'center',
              borderRadius: 5,
              justifyContent: 'center',
              marginLeft: 30,

              marginRight: 30,
              marginTop: 20,
              marginBottom: 20
            }}
            onPress={editImage}
          >
            <Text>Xác nhận</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
