import { Text, View, SafeAreaView, TextInput, TouchableOpacity,Button } from 'react-native'
import React, { useState } from 'react';
import AppStyle from '../themes/ChangePhoneTheme';
import { Ionicons } from '@expo/vector-icons';

export default function InputPhoneNumScreen() {


    return (
        <SafeAreaView style={AppStyle.container}>

            {/* navigators  */}
            <View style={AppStyle.navigators}>
                <TouchableOpacity style={AppStyle.touchableOpacityChangePassword}>
                    <Ionicons style={{ position: 'absolute', paddingTop: 15, }} name="arrow-back-outline" size={35} color="black" />

                </TouchableOpacity>
                <Text style={AppStyle.navigatorText}>
                    Quản Lí Hồ Sơ
                </Text>
            </View>


            <View style={AppStyle.Inputphone}>
                <Text style={AppStyle.TextTitle}>
                    Nhập số hiện tại
                </Text>
                <View style={AppStyle.inputContainer}>

                    <TextInput
                        style={AppStyle.inputField}>09944xxx</TextInput>
                </View>
                <Text style={AppStyle.TextTitle}>
                    Nhập số mới
                </Text>
                <View style={AppStyle.inputContainer}>

                    <TextInput
                        style={AppStyle.inputField}>0123456789</TextInput>
                </View>
            </View>
           
            <View style={AppStyle.bottom}>
                <Button color={'#E94730'} title="Xác Nhận"></Button>
            </View>

        </SafeAreaView>
    )
}