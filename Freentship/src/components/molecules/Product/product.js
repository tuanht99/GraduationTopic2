import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './product.style'
import { AdImageText } from '../../atoms/AdImageText'

export const Product = ({ source, label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AdImageText
        textStyle={styles.text}
        imageStyle={styles.img}
        source={source}
        label={label}
      />
    </TouchableOpacity>
  )
}
