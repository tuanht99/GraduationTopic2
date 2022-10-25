import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  Modal,
  View,
  Time
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import AppStyle from '../../themes/ChangeProfileTheme'
import { Ionicons } from '@expo/vector-icons'
import ModalSimple from '../../Components/ModalCalendar'
import React, { useState, useEffect,useRef } from 'react'
import { AntDesign } from '@expo/vector-icons'

export default function ChangeProfileView({ navigation, route }) {
  // lấy dữ liệu bên màn hình infosetting
  const { guestname, avatar, dateofbirth, sex, id, gmail, phone } = route.params
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
  const [date, setdateofbirth] = useState()
  const [phoneNumber, setphoneNumber] = useState()
  const [password, setpassword] = useState()
  // end
  // dữ liệu chọ nam nữ
  const [selectedLanguage, setSelectedLanguage] = useState()
  const pickerRef = useRef()

  function open() {
    pickerRef.current.focus()
  }

  function close() {
    pickerRef.current.blur()
  }
  // end
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

  return (
    <SafeAreaView style={AppStyle.container}>
      <View style={AppStyle.content}>
        <Text style={AppStyle.TextTitle}>Tên thường gọi (*)</Text>
        <View style={AppStyle.inputContainer}>
          <TextInput style={AppStyle.inputField}>{guestname}</TextInput>
        </View>

        <Text style={AppStyle.TextTitle}>Email</Text>
        <View style={AppStyle.inputContainer}>
          <TextInput style={AppStyle.inputField}>{gmail}</TextInput>
        </View>

        <View style={AppStyle.Date}>
          {/* ngay sinh */}
          <View>
            <Text style={AppStyle.TextTitle}>Ngày sinh</Text>
            <TouchableOpacity onPress={() => changeModelVisible(true)}>
              <View style={{ flexDirection: 'row' }}>
                <Ionicons name="calendar-outline" size={50} color="black" />
                <Text style={AppStyle.profileText}>{ChooseData}</Text>
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
            <Picker
              ref={pickerRef}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
            >
              <Picker.Item label="Nam" value="1" />
              <Picker.Item label="nữ" value="2" />
            </Picker>
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
          onPress={navigation.goBack}
        >
          <Text>Xác nhận</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
