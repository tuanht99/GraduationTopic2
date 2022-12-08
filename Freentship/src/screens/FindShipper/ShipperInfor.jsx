import { View, Text, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons'

const ShipperInfor = ({ route }) => {
  const { name, avatar, loaixe, phone } = route.params

  return (
    <View className="m-6">
      <View className="flex justify-center items-center">
        <Image
          source={{
            uri: avatar,
            width: 200,
            height: 200
          }}
        ></Image>
        <Text className="text-lg font-bold my-5">{name}</Text>
        <View className="flex-row rounded-xl bg-[#EEEEEE] p-1 items-center mb-5">
          <AntDesign name="star" size={24} color="#ffd700" />
          <Text className="text-base mx-2">
            5.0 <Text className="text-gray-400">|</Text>
          </Text>
          <Text className="text-base">{loaixe}</Text>
        </View>
      </View>
    </View>
  )
}

export default ShipperInfor
