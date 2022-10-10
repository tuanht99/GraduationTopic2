import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import AppStyle from '../themes/ChangePasswordtheme'
import { Ionicons } from '@expo/vector-icons';
import PasswordTheme from '../components/Password';

export default function ChangePasswordView() {
    return (
        <View style={AppStyle.container}>
            {/* navigators  */}
            <View style={AppStyle.navigators}>
                <TouchableOpacity style={AppStyle.touchableOpacityChangePassword}>
                    <Ionicons style={{ position: 'absolute', paddingTop: 15, }} name="arrow-back-outline" size={35} color="black" />
                </TouchableOpacity>

                <Text style={AppStyle.navigatorsText}>
                    Đổi mật khẩu
                </Text>
            </View>
            {/*  edit text view */}
            <View style={AppStyle.ChangePassword}>
                <Text style={AppStyle.PasswordText}>
                    Mật khẩu hiện tại
                </Text>
                <PasswordTheme > </PasswordTheme>
                <Text style={AppStyle.PasswordText}>
                    Nhập mật khẩu mới
                </Text>
                <PasswordTheme > </PasswordTheme>
                <Text style={AppStyle.PasswordText}>
                    Xác nhận Mật Khẩu Mới
                </Text>
                <PasswordTheme> </PasswordTheme>

            </View>
            {/* buttion Submit */}
            <View style={AppStyle.ButtonSubmit}>

                <Button color={'#E94730'} title="Xác Nhận"></Button>
            </View>
        </View>


    )

}