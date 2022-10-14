import React from 'react'
import { View, Text } from 'react-native'
import styles from './distance.style'
import { IconText } from '../IconText'
import { Colors, FontSize } from '../../../styles'

export const Distance = ({ number, advertisement }) => {
  const icon = {
    name: 'location',
    size: FontSize.xl,
    color: Colors.gray,
    numberOfLines: 1
  }
  return (
    <View style={styles.container}>
      {advertisement && <Text style={styles.qc}>QC</Text>}
      <IconText
        styleText={styles.text}
        name={icon.name}
        size={icon.size}
        color={icon.color}
        numberOfLines={icon.numberOfLines}
      >
        {number} KM
      </IconText>
    </View>
  )
}
