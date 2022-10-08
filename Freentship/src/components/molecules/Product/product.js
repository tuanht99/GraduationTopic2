import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './product.style'
import { AdImageText } from '../../atoms/AdImageText'
import { Distance } from '../Distance'

export const Product = ({
  source,
  label,
  onPress,
  numberOfLines,
  textStyle,
  adStyle,
  number,
  advertisement
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AdImageText
        style={[adStyle]}
        textStyle={[styles.text, textStyle]}
        imageStyle={styles.img}
        source={source}
        label={label}
        numberOfLines={numberOfLines}
      />
      {number && <Distance number={number} advertisement={advertisement} />}
    </TouchableOpacity>
  )
}
