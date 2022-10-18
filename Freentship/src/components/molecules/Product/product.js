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
  advertisement,
  horizontal = true,
  locationFrom,
  locationTo,
  distance = true
}) => {
  const loaderDistance = locationFrom ? (
    <Distance
      locationFrom={locationFrom}
      locationTo={locationTo}
      advertisement={advertisement}
    />
  ) : (
    <View style={styles.loaderDistance}>
      <View style={styles.loader1} />
      <View style={[styles.loader1, styles.loader2]} />
    </View>
  )

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
        imageStyle={[styles.img, horizontal ? styles.imgCol : styles.imgRow]}
        source={source}
        label={label}
        numberOfLines={numberOfLines}
        horizontal={horizontal}
      />
      {horizontal ? (
        distance && loaderDistance
      ) : (
        <View style={styles.rightContainer}>
          <Text numberOfLines={2} style={styles.textRow}>
            {label}
          </Text>
          {loaderDistance}
        </View>
      )}
    </TouchableOpacity>
  )
}
