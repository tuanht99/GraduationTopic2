import React from 'react'
import { View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

export const AdIcon = ({ name, size, color, style }) => {
  return (
    <View style={style}>
      <Ionicons name={name} size={size} color={color} />
    </View>
  )
}
