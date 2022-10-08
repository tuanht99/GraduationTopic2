import React from 'react'
import { View } from 'react-native'
import styles from './category-food.style'
import { CategoryHeader } from '../../molecules/CategoryHeader'
import { Products } from '../../molecules/Products'

export const CategoryFood = ({ data, title }) => {
  function handleSeeAll() {
    console.log('see all')
  }

  return (
    <View style={styles.container}>
      <CategoryHeader onPress={handleSeeAll}>{title}</CategoryHeader>
      <Products horizontal={true} data={data} type={1} />
    </View>
  )
}
