import React from 'react'
import { View } from 'react-native'
import styles from './category-food.style'
import { CategoryHeader } from '../../molecules/CategoryHeader'
import logo from '../../../assets/images/logos/app-user-red.png'
import { Products } from '../../molecules/Products'

export const CategoryFood = () => {
  const titleCategories = ['Thử quán mới']
  function handleSeeAll() {
    console.log('see all')
  }
  const data = [
    { id: '1', title: 'test1', urlImg: logo, number: 25, advertisement: true },
    { id: '2', title: 'test2', urlImg: logo, number: 35, advertisement: false },
    { id: '3', title: 'test3', urlImg: logo, number: 45, advertisement: true },
    { id: '4', title: 'test4', urlImg: logo, number: 55, advertisement: true },
    { id: '5', title: 'test5', urlImg: logo, number: 65, advertisement: true },
    { id: '6', title: 'test6', urlImg: logo, number: 75, advertisement: true },
    { id: '7', title: 'test7', urlImg: logo, number: 85, advertisement: true },
    { id: '8', title: 'test8', urlImg: logo, number: 95, advertisement: false },
    { id: '9', title: 'test9', urlImg: logo, number: 105, advertisement: true },
    {
      id: '10',
      title: 'test10',
      urlImg: logo,
      number: 1151,
      advertisement: true
    },
    {
      id: '11',
      title: 'test11',
      urlImg: logo,
      number: 125,
      advertisement: true
    },
    {
      id: '12',
      title: 'test12',
      urlImg: logo,
      number: 135,
      advertisement: false
    }
  ]
  return (
    <View style={styles.container}>
      <CategoryHeader onPress={handleSeeAll}>
        {titleCategories[0]}
      </CategoryHeader>
      <Products horizontal={true} data={data} type={1} />
    </View>
  )
}
