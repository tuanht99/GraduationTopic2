import React from 'react'
import { View, Text } from 'react-native'
import { AdIcon } from '../../atoms/AdIcon'
import styles from './icon-text.style'

export const IconText = ({
  name,
  size,
  color,
  numberOfLines,
  styleText,
  style,
  children
}) => {
  return (
    <View style={[styles.container, style]}>
      <AdIcon name={name} size={size} color={color} />
      <Text numberOfLines={numberOfLines} style={[styles.text, styleText]}>
        {children}
      </Text>
    </View>
  )
}
