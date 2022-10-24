import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar
} from 'react-native'
import React, { useState } from 'react'
import AppStyle from '../../themes/InforUserSettingTheme'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

// list dữ liệu

// list

export default function InforSettingView({ navigation, route }) {
  const { guestname, avatar, dateofbirth, sex, id,gmail,phone } = route.params;
  console.log("name: " + guestname);
  console.log("avatar: " + avatar);
  console.log("dateofbirth: " + dateofbirth);
  console.log("sex: " + sex);
  console.log("id: " + id);
  console.log("gmail: " + gmail);
  console.log("phone: " + phone);
  
  
  <StatusBar backgroundColor={'black'}></StatusBar>
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
        alignItems: 'center'
      }
    })
  }, [navigation])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={AppStyle.container}>
        {/* navigators  */}

        {/* avatars */}
        <View style={AppStyle.avatar}>
          <TouchableOpacity>
            {
              <View>
                <View
                  style={{
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Image
                    style={AppStyle.avatarchange}
                    source={{uri: avatar}}
                  />
                  <Ionicons
                    style={{ position: 'absolute', left: 200, bottom: -15 }}
                    name="md-camera-reverse-sharp"
                    size={35}
                    color="black"
                  />
                </View>

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
          <View style={{ flexDirection: 'row' }}>
            <Text style={AppStyle.profileText}>Thông tin cá nhân</Text>
            <TouchableOpacity   onPress={() => navigation.navigate('ChangeProfile',{
                guestname, avatar, dateofbirth, sex, id,gmail,phone 
            })}>
              <Text style={AppStyle.textProfile}>thay đổi</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="person-circle-outline" size={50} color="black" />
              <Text style={AppStyle.profileText}>{guestname}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="mail-outline" size={50} color="black" />
              <Text style={AppStyle.profileText}>{gmail}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="calendar-outline" size={50} color="black" />
              <Text style={AppStyle.profileText}>{dateofbirth}</Text>
            </View>
          </View>
        </View>
        {/* phone */}
        <View style={AppStyle.Phone}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={AppStyle.PhoneText}>Số điện thoại liên lạc</Text>
            <TouchableOpacity>
              <Text style={AppStyle.textPhone}>thay đổi</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={{ flexDirection: 'row', paddingTop: 20 }}>
              <Ionicons name="call-outline" size={50} color="black" />
              <Text style={AppStyle.profileText}>{phone}</Text>
            </View>
          </View>
        </View>
        {/* change password */}
        <View style={AppStyle.ChangePassword}>
          <View style={{ flexDirection: 'row' }}>
            <Ionicons
              style={{ paddingTop: 5 }}
              name="lock-closed-outline"
              size={35}
              color="black"
            />
            <Text style={AppStyle.profileText}>Đổi mật khẩu</Text>
            <TouchableOpacity style={AppStyle.touchableOpacityChangePassword}>
              <Ionicons
                style={{ position: 'absolute', paddingTop: 5, left: 175 }}
                name="arrow-forward-outline"
                size={35}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
