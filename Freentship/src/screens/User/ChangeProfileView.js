import { SafeAreaView, Text, TouchableOpacity, Button, TextInput, Modal, View, Time } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import AppStyle from '../themes/ChangeProfileTheme'
import { Ionicons } from '@expo/vector-icons';
import ModalSimple from '../components/ModalCalendar'
import React, { useState } from 'react'

export default function ChangeProfileView() {


    const [isModalVisible, setisModalVisibleModal] = useState(false);
    const [ChooseData, setChooseData] = useState()
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const changeModelVisible = (bool) => {

        setisModalVisibleModal(bool);
    }
    const setData = (data) => {
        setChooseData(data);
    }



    return (
        <SafeAreaView style={AppStyle.container}>
            <View style={AppStyle.navigators}>
                <TouchableOpacity style={AppStyle.touchableOpacityChangePassword}>
                    <Ionicons style={{ position: 'absolute', paddingTop: 15, }} name="arrow-back-outline" size={35} color="black" />
                </TouchableOpacity>

                <Text style={AppStyle.navigatorsText}>
                    Thay đổi thông tin cá nhân
                </Text>
            </View>
            <View style={AppStyle.content}>
                <Text style={AppStyle.TextTitle}>
                    Tên thường gọi (*)
                </Text>
                <View style={AppStyle.inputContainer}>
                    <TextInput
                        style={AppStyle.inputField}>thanh tran</TextInput>
                </View>

                <Text style={AppStyle.TextTitle}>
                    Email
                </Text>
                <View style={AppStyle.inputContainer}>
                    <TextInput
                        style={AppStyle.inputField}>thanh126126@gmail.com</TextInput>
                </View>


                
                <View style={AppStyle.Date}>
                    {/* ngay sinh */}
                    <View>
                        <Text style={AppStyle.TextTitle}>
                            Ngày sinh
                        </Text>
                        <TouchableOpacity onPress={() => changeModelVisible(true)}>
                            <View style={{ flexDirection: 'row', }} >
                                <Ionicons name="calendar-outline" size={30} color="black" />
                                <Text style={AppStyle.profileText}>{ChooseData}</Text>
                                <Modal
                                    transparent={true}
                                    animationType="fade"
                                    visible={isModalVisible}
                                    nRequestClose={() => changeModelVisible(false)}
                                >
                                    <ModalSimple
                                    changeModalVisible = {changeModelVisible}
                                    setData={setData}
                                    ></ModalSimple>
                                </Modal>





                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={AppStyle.sex}>
                        <Text style={AppStyle.TextTitle}>
                            Giới tính
                        </Text>
                        <Picker
                            style={{ width: '50%', top: -10 }}

                        >
                            <Picker.Item label="Nam" value="1" />
                            <Picker.Item label="Nữ" value="2" />
                        </Picker>

                    </View>
                </View>
            </View>
            <View style={AppStyle.bottom}>
                <Button color={'#E94730'} title="Xác Nhận"></Button>
            </View>
        </SafeAreaView>

    )
}