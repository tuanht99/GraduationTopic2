import React from 'react'
import { View, Text, Image } from 'react-native'

export const AdImageText = ({
  source,
  label,
  style,
  imageStyle,
  textStyle,
  numberOfLines
}) => {
  return (
    <View style={style}>
      <Image source={source} style={imageStyle} />
      <Text numberOfLines={numberOfLines} style={textStyle}>
        {label}
      </Text>
    </View>
  )
}
