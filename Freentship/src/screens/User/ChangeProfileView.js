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
import React, { useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons'

export default function ChangeProfileView({ navigation, route }) {
  const { guestname, avatar, dateofbirth, sex, id, gmail, phone } = route.params

  const [isModalVisible, setisModalVisibleModal] = useState(false)
  const [ChooseData, setChooseData] = useState()
  const [selectedStartDate, setSelectedStartDate] = useState(null)
  const changeModelVisible = bool => {
    setisModalVisibleModal(bool)
  }
  const setData = data => {
    setChooseData(data)
  }
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
            <Text style={AppStyle.TextTitle}>
                Ngày sinh
            </Text>
            <TouchableOpacity onPress={() => changeModelVisible(true)}>
              <View style={{ flexDirection: 'row' }}>
                <Ionicons name="calendar-outline" size={30} color="black" />
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
            <Picker style={{ width: '50%', top: -10 }}>
              <Picker.Item label="Nam" value="1" />
              <Picker.Item label="Nữ" value="2" />
            </Picker>
          </View>
        </View>
      </View>
      <View style={AppStyle.bottom}>
        <Button color={'#E94730'} title="Xác Nhận"  onPress={navigation.goBack}></Button>
      </View>
    </SafeAreaView>
  )
}
