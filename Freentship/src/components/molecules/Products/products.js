import React from 'react'
import { View, ScrollView } from 'react-native'
import styles from './products.style'
import { Product } from '../Product'

export const Products = ({ data, horizontal = false, type = 0 }) => {
  const numberOfColumns = type === 1 ? 2 : 1
  const alignItems = type === 0 ? styles.alignItemCenter : styles.alignItemStart
  const ItemView = (item, index) => {
    const handleOnPress = () => {
      console.log('press: ', item.title)
    }
    return (
      <View key={index} style={styles.item}>
        <Product
          source={item.urlImg}
          label={item.title}
          onPress={handleOnPress}
          number={item.number}
          advertisement={item.advertisement}
          numberOfLines={numberOfColumns}
          adStyle={alignItems}
        />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
      >
        {data.map(ItemView)}
      </ScrollView>
    </View>
  )
}
