import React from 'react'
import { View, Text } from 'react-native'
import styles from './category-header.style'
import { AdButton } from '../../atoms/AdButton/ad-button'

export const CategoryHeader = ({ children, onPress, seeAll }) => {
  const SEEALL = 'Xem tất cả'
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
      {seeAll && (
        <AdButton onPress={onPress} textStyle={styles.seeAll}>
          {SEEALL}
        </AdButton>
      )}
    </View>
  )
}
