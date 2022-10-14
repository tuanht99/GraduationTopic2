import { Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import ThemeRegister from '../themes/RegisterTheme';

export default function InputPhoneNumScreen({ navigation }) {
  const txtPhone = 'Nhập số điện thoại của bạn ở đây';
  const txtWelcome = 'Chào mừng bạn đến với Freen’tship'
  const txtInputPhone = 'Nhập số điện thoại của bạn để tiếp tục';
  const txtLogin = 'Đăng nhập';

  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={ThemeRegister.container}>
      <View style={ThemeRegister.logoContainer}>
        <Text style={ThemeRegister.logo}>FREEN'T SHIP</Text>
      </View>

      <View style={ThemeRegister.guildTextContainer}>
        <Text style={ThemeRegister.txtWelcome}>{txtWelcome} {'\n'}</Text>
        <Text style={ThemeRegister.txtPhone}>{txtInputPhone}</Text>
      </View>

      <View style={ThemeRegister.inputTextContainer}>
        <TextInput
          style={ThemeRegister.tipPhone}
          onChangeText={onChangeNumber}
          value={number}
          placeholder={txtPhone}
          keyboardType="numeric"
        />
      </View>

      <View style={ThemeRegister.btnContainer}>
        <TouchableOpacity
          style={ThemeRegister.btnLogin}
          onPress={() => navigation.navigate('OTPVerification')}>
          <Text style={ThemeRegister.txtLogin}>{txtLogin}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}