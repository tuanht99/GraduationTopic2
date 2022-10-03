import React from 'react'
import { View, Text } from 'react-native'
import styles from './categories-food.style'
import { Greeting } from '../../molecules/Greeting'
import { CategoryHeader } from '../../molecules/CategoryHeader'

export const CategoriesFood = () => {
  const titleCategories = ['chọn theo thể loại']
  const [logoUser, setLogoUser] = React.useState(
    'https://firebasestorage.googleapis.com/v0/b/freentship.appspot.com/o/logo-user.jpeg?alt=media&token=ec570cd2-9f21-4028-b662-6ab2630c8321'
  )
  const [logoTitle, setLogoTitle] = React.useState('Chào buổi tối, Khanh')

  function handleSeeAll() {
    console.log('see all')
  }

  return (
    <View style={styles.container}>
      <Greeting source={logoUser} label={logoTitle} />
      <CategoryHeader onPress={handleSeeAll}>
        {titleCategories[0]}
      </CategoryHeader>
    </View>
  )
}
