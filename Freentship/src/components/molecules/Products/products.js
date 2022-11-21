import React from 'react'
import { View, ScrollView, Text, TouchableOpacity } from 'react-native'
import styles from './products.style'
import { Product } from '../Product'
import { Spacing } from '../../../styles'

export const Products = ({
  data,
  location,
  horizontal,
  distance,
  indexFirestore,
  type = 0,
  navigation,
  isCategories = false
}) => {
  const numberOfColumns = type === 1 ? 2 : 1
  const alignItems = type === 0 ? styles.alignItemCenter : styles.alignItemStart
  const ItemView = (item, index) => {
    const handleOnPress = () => {
      isCategories
        ? navigation.navigate('SearchScreen', {
          id: item.id,
          name: item.name,
          index: indexFirestore,
          location: location
        })
        : navigation.navigate('StoreScreen', { id: item.id, location: location })
    }
    return (
      <View key={index} style={horizontal ? styles.item : styles.itemRow}>
        <Product
          horizontal={horizontal}
          source={item.image}
          label={item.name}
          onPress={handleOnPress}
          advertisement={item.advertisement}
          numberOfLines={numberOfColumns}
          adStyle={alignItems}
          locationFrom={indexFirestore !== 0 && location}
          locationTo={item.locations}
          distance={distance}
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
        <TouchableOpacity
          onPress={() => console.log('show all')}
          style={{
            width: 133,
            marginLeft: Spacing['4'],
            marginVertical: Spacing['6']
          }}
        >
          {/*<Text>Show all stores</Text>*/}
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
