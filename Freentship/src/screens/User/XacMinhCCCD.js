import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import AppStyle from '../../themes/InforUserSettingTheme'
import { Ionicons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../services/config'
import { ToastAndroid } from 'react-native'
import { async } from '@firebase/util'
import { storage, storageRef } from '../../services/config'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from 'firebase/storage'
export default function XacMinhCCCD({ navigation, route }) {
  // dữ liệu
  const { User, id } = route.params
  // mặt trước local
  const [ChangeImage, setChangeImage] = useState(null)
  // mặt sau local
  const [images, setimages] = useState(null)
  const [Truoc, setTruoc] = useState(null)
  const [Sau, setSau] = useState(null)
  //   truoc
  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!')
      return
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync(
        {aspect:[1,1],
        allowsEditing: true,
        quality:1}
    )
    setChangeImage(pickerResult.uri)
  }

  // sau
  let openImagePickerAsyncs = async () => {
    let permissionResults =
      await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (permissionResults.granted === false) {
      alert('Permission to access camera roll is required!')
      return
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync(
        {aspect:[1,1],
            allowsEditing: true,
            quality:1}
    )
    
    setimages(pickerResult.uri)
  }

  // Upload avatar
  const uploadImagetruoc = async () => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.onload = function () {
        resolve(xhr.response)
      }
      xhr.onerror = function () {
        reject(new TypeError('Network request failed'))
      }
      xhr.responseType = 'blob'
      xhr.open('GET', ChangeImage, true)

      xhr.send(null)
    })
    const refe = ref(storage, `User/CCCD/${id}tr`)
    const uploadTask = uploadBytesResumable(refe, blob)

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed', () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
        setTruoc(downloadURL);
        saveCCCD()
      })
    })
  }
  const uploadImagesau = async () => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.onload = function () {
        resolve(xhr.response)
      }
      xhr.onerror = function () {
        reject(new TypeError('Network request failed'))
      }
      xhr.responseType = 'blob'
      xhr.open('GET', images, true)

      xhr.send(null)
    })
    const refe = ref(storage, `User/CCCD/${id}sa`)
    const uploadTask = uploadBytesResumable(refe, blob)

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed', () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
       setSau(downloadURL);
        saveCCCD()
      })
    })
  }
  // thay đổi dữ liệu trên firebase

  const saveCCCD = async () => {
    if(Truoc !== null && Sau !== null) {
    const updateAvtUrl = doc(db, 'users', id)
    console.log(ChangeImage,images);

    // Set the "capital" field of the city 'DC'
    
    await updateDoc(updateAvtUrl, {
        CCCD: {
            truoc: Truoc,
            sau: Sau
        }
        }).then(() => {
            console.log('thanh cong');
        }).catch(err => console.log('err', err));
    
    
  }}
  console.log(User.CCCD);

  return (
    <View style={{ flex: 1 }}>
      {/* mặt trước */}
      <View style={{ flex: 6 }}>
        <Text>Mặt Trước</Text>
        <View style={styles.avatar}>
          <TouchableOpacity onPress={openImagePickerAsync}>
            {
              <View>
                {ChangeImage !== null ? (
                  <View
                    style={{
                      position: 'relative',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Image
                      style={styles.avatarchange}
                      source={{ uri: ChangeImage  }}
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
                      style={styles.avatarchange}
                      source={{ uri:  User.CCCD.truoc }}
                    />
                  
                  </View>
                )}

              
              </View>
            }
          </TouchableOpacity>
        </View>
        {/* button */}
        <View style={styles.button}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: 'red',
              alignItems: 'center',
              borderRadius: 10,
              justifyContent: 'center',
              marginLeft: 30,

              marginRight: 30,
              marginTop: 20,
              marginBottom: 20
            }}
            onPress={() => {
              uploadImagetruoc()
              ToastAndroid.show(
                'Request sent successfully!',
                ToastAndroid.SHORT
              )
            }}
          >
            <Text>Xác nhận</Text>
          </TouchableOpacity>
        </View>
      </View>
         {/* mặt sau */}
      <View style={{ flex: 6 }}>
        <Text>Mặt Sau</Text>

        <View style={AppStyle.avatar}>
          <TouchableOpacity onPress={openImagePickerAsyncs}>
            {
              <View>
                {images !== null ? (
                  <View
                    style={{
                      position: 'relative',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Image
                      style={styles.avatarchange}
                      source={{ uri:images }}
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
                      style={styles.avatarchange}
                      source={{ uri: User.CCCD.sau }}
                    />
                    <Ionicons
                      style={{ position: 'absolute', left: 200, bottom: -15 }}
                      name="md-camera-reverse-sharp"
                      size={35}
                      color="black"
                    />
                  </View>
                )}

               
              </View>
            }
          </TouchableOpacity>
        </View>
        {/* button */}
        <View style={styles.button}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: 'red',
              alignItems: 'center',
              borderRadius: 10,
              justifyContent: 'center',
              marginLeft: 30,

              marginRight: 30,
              marginTop: 20,
              marginBottom: 20
            }}
            onPress={() => {
              uploadImagesau()
              ToastAndroid.show(
                'Request sent successfully!',
                ToastAndroid.SHORT
              )
            }}
          >
            <Text>Xác nhận</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  avatarchange: {
    height: 250,
    width: 500,
  },
  avatar: {
    margin: 5,
    flex: 3,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  button: {
    margin: 5,

    flex: 1
  }
})
