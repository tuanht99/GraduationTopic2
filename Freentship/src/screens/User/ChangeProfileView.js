import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  Modal,
  View,
  Time,
  Alert,
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import AppStyle from '../../themes/ChangeProfileTheme'
import { Ionicons } from '@expo/vector-icons'
import ModalSimple from '../../Components/ModalCalendar'
import React, { useState, useEffect, useRef } from 'react'
import { AntDesign } from '@expo/vector-icons'
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
import RNPickerSelect from 'react-native-picker-select';
export default function ChangeProfileView({ navigation, route }) {
  // lấy dữ liệu bên màn hình infosetting
  const { guestname, avatar, date, sex, id, gmail, phone } = route.params
  // end

  // biến của model lịch
  const [isModalVisible, setisModalVisibleModal] = useState(false)
  const [ChooseData, setChooseData] = useState()
  const [selectedStartDate, setSelectedStartDate] = useState(null)
  const changeModelVisible = bool => {
    setisModalVisibleModal(bool)
  }
  const setData = data => {
    setChooseData(data)
  }
  // end

  // dữ liệu thay đổi
  const [username, setusername] = useState()
  const [email, setemail] = useState()

  console.log('DATE : ' + ChooseData)
  // end
  // dữ liệu chọ nam nữ
  const [selectedLanguage, setSelectedLanguage] = useState("nam")
  const pickerRef = useRef()
console.log(selectedLanguage);
  function open() {
    pickerRef.current.focus()
  }

  function close() {
    pickerRef.current.blur()
  }
  // end

// update Firebase
function editProfile() {
  updateDoc(doc(db, 'users', id), {
    name: username,
    dateOfBirth: ChooseData,
    avatar: avatar,
    sex: selectedLanguage,
    email: email,
    phone: phone,
  })
  Alert.alert(
    "Thông báo",
    "Thay đổi thông tin thành công",
    [
     
      { text: "OK" }
    ]
  )
  // 7T5uG3Si5NHioADgam1Z
}
// console.log(username);
  // navigation
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      ),

      title: 'Thay đổi Thông tin cá nhân',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 15,
        alignItems: 'center'
      }
    })
  }, [navigation])
// end
  return (
    <SafeAreaView style={AppStyle.container}>
      <View style={AppStyle.content}>
        <Text style={AppStyle.TextTitle}>Tên thường gọi (*)</Text>
        <View style={AppStyle.inputContainer}>
          <TextInput style={AppStyle.inputField}  onChangeText={text => setusername(text)}>{guestname}</TextInput>
        </View>

        <Text style={AppStyle.TextTitle}>Email</Text>
        <View style={AppStyle.inputContainer}>
          <TextInput style={AppStyle.inputField} onChangeText={text => setemail(text)}>{gmail}</TextInput>
        </View>

        <View style={AppStyle.Date}>
          {/* ngay sinh */}
          <View>
            <Text style={AppStyle.TextTitle}>Ngày sinh</Text>
            <TouchableOpacity onPress={() => changeModelVisible(true)}>
              <View style={{ flexDirection: 'row' }}>
                <Ionicons name="calendar-outline" size={50} color="black" />
                {ChooseData !=null ?
                <Text style={AppStyle.profileText}>{ChooseData}</Text>: <Text style={AppStyle.profileText}>{date}</Text>}
              
               
                <Modal
                  transparent={true}
                  animationType="fade"
                  visible={isModalVisible}
                  nRequestClose={() => changeModelVisible(false)}
                >
                  <ModalSimple
                    changeModalVisible={changeModelVisible}
                    setData={setData}
                  ></ModalSimple>
                </Modal>
              </View>
            </TouchableOpacity>
          </View>
          <View style={AppStyle.sex}>
            <Text style={AppStyle.TextTitle}>Giới tính</Text>
            {/* giới tính */}
            <RNPickerSelect 
            onValueChange={(value) => setSelectedLanguage(value)}
            items={[
                { label: 'Nam', value: 'Nam' },
                { label: 'Nữ', value: 'Nữ' },
                { label: 'Không tiết lộ', value: 'Không rõ' },
            ]}
        />
            {/* end */}
          </View>
        </View>
      </View>
      <View style={AppStyle.bottom}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: 'red',
            alignItems: 'center',
            borderRadius: 5,
            justifyContent: 'center',
            marginLeft: 30,
            marginBottom: 10,
            marginTop: 10,
            marginRight: 30
          }}
          onPress={editProfile}
        >
          <Text>Xác nhận</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}