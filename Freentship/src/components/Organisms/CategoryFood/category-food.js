import React from 'react'
import { Text, View } from 'react-native'
import styles from './category-food.style'
import { CategoryHeader } from '../../molecules/CategoryHeader'
import { Products } from '../../molecules/Products'

export const CategoryFood = ({
  data = [],
  location,
  title,
  firestore,
  horizontal = true,
  navigation,
  distance,
  indexFirestore
}) => {
  function handleSeeAll() {
    navigation.navigate('SearchScreen', {
      name: title,
      location: location,
      index: indexFirestore
    })
  }
  const isCheck = data.length > 0
 
  console.log('location' , location);
  return (
    <View style={styles.container}>
      <CategoryHeader
        isCheck={isCheck}
        seeAll={horizontal}
        onPress={handleSeeAll}
      >
        {title}
      </CategoryHeader>
      {isCheck ? (
        <Products
          navigation={navigation}
          firestore={firestore}
          location={location}
          horizontal={horizontal}
          data={data}
          type={1}
          distance={distance}
        />
      ) : (
        <View style={styles.noProductContainer}>
          <Text style={styles.noProductText}>Không có cửa hàng nào</Text>
        </View>
      )}
    </View>
  )
}
