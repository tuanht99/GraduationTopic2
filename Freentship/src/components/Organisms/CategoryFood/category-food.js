import React from 'react'
import { View } from 'react-native'
import styles from './category-food.style'
import { CategoryHeader } from '../../molecules/CategoryHeader'
import { Products } from '../../molecules/Products'

export const CategoryFood = ({ data, title, horizontal = true }) => {
  function handleSeeAll() {
    console.log('see all')
  }

  return (
    <View style={styles.container}>
      <CategoryHeader seeAll={horizontal} onPress={handleSeeAll}>
        {title}
      </CategoryHeader>
      <Products horizontal={horizontal} data={data} type={1} />
    </View>
  )
}
