import React from 'react'
import { View, ScrollView } from 'react-native'
import styles from './products.style'
import { Product } from '../Product'

export const Products = ({ data, horizontal = false }) => {
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
