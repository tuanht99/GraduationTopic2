import React from 'react'
import { View, Text } from 'react-native'
import { AdIcon } from '../../atoms/icon'
import styles from './IconText.style'

export const IconText = ({ name, size, color, styleText, style }) => {
  return (
    <View style={[styles.container, style]}>
      <AdIcon name={name} size={size} color={color} />
      <Text style={[text, styleText]}>{text}</Text>
    </View>
  )
}
