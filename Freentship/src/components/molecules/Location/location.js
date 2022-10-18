import React from 'react'
import { View } from 'react-native'
import { AdIcon } from '../../atoms/AdIcon'
import { IconText } from '../IconText'
import styles from './location.style'

export const Location = ({
  name1,
  name2,
  size1,
  size2,
  color1,
  color2,
  style1,
  style2,
  styleText,
  numberOfLines = 1,
  children,
  border = false
}) => {
  return (
    <View style={[styles.container, border && styles.containerBorder]}>
      <IconText
        name={name1}
        color={color1}
        size={size1}
        style={style1}
        styleText={[styles.text, styleText]}
        numberOfLines={numberOfLines}
      >
        {children}
      </IconText>
      <AdIcon name={name2} color={color2} style={[style2]} size={size2} />
    </View>
  )
}
