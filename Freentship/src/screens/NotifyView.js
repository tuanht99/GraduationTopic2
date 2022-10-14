import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Button,  flex, } from 'react-native'
import React from 'react'

import AppStyle from '../themes/NotifyTheme'


export default function NotifyView() {
  return (
    <View style={AppStyle.view}>

      <View style={AppStyle.viewhead} >
        <Image style={AppStyle.image} source={require('../assets/logo.jpg')}></Image>
        <TouchableOpacity style={AppStyle.Menu}>
          <Image style={AppStyle.image} source={require('../assets/Menu.png')}></Image>
        </TouchableOpacity>
      </View>


      <View style={AppStyle.viewScroll}>

        <ScrollView style={AppStyle.scrollView}>
          <TouchableOpacity style={AppStyle.touch}>
            <Text style={AppStyle.text}>
              bạn có voucher giảm giá 82%
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={AppStyle.touch}>
            <Text style={AppStyle.text}>
              bạn có voucher giảm giá 82%
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={AppStyle.touch}>
            <Text style={AppStyle.text}>
              bạn có voucher giảm giá 82%
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={AppStyle.touch}>
            <Text style={AppStyle.text}>
              bạn có voucher giảm giá 82%
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={AppStyle.touch}>
            <Text style={AppStyle.text}>
              bạn có voucher giảm giá 82%
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={AppStyle.touch}>
            <Text style={AppStyle.text}>
              bạn có voucher giảm giá 82%
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={AppStyle.touch}>
            <Text style={AppStyle.text}>
              bạn có voucher giảm giá 82%
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={AppStyle.touch}>
            <Text style={AppStyle.text}>
              bạn có voucher giảm giá 82%
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={AppStyle.touch}>
            <Text style={AppStyle.text}>
              bạn có voucher giảm giá 82%
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={AppStyle.touch}>
            <Text style={AppStyle.text}>
              bạn có voucher giảm giá 82%
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={AppStyle.touch}>
            <Text style={AppStyle.text}>
              bạn có voucher giảm giá 82%
            </Text>
          </TouchableOpacity>
     
        </ScrollView>
      </View>

      
    </View>
  );
}





