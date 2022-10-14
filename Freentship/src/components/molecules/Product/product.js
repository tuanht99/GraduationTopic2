import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
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
  advertisement,
  horizontal = true
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        horizontal ? styles.containerCol : styles.containerRow
      ]}
    >
      <AdImageText
        style={[styles.adImageText, adStyle]}
        textStyle={[styles.text, textStyle]}
        imageStyle={[styles.img, styles.imgRow]}
        source={source}
        label={label}
        numberOfLines={numberOfLines}
        horizontal={horizontal}
      />
      {horizontal ? (
        number && <Distance number={number} advertisement={advertisement} />
      ) : (
        <View style={styles.rightContainer}>
          <Text numberOfLines={2} style={styles.textRow}>
            {label}
          </Text>
          {number && <Distance number={number} advertisement={advertisement} />}
        </View>
      )}
    </TouchableOpacity>
  )
}
