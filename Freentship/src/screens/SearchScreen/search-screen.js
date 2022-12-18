import React from 'react'
import { ScrollView } from 'react-native'
import styles from './search-screen.style'
import { ComeBack } from '../../Components/Organisms/ComeBack'
import { LocationSearch } from '../../Components/Organisms/LocationSearch'
import { CategoryFood } from '../../Components/Organisms/CategoryFood'
import { limit, orderBy, where, startAt, endAt } from 'firebase/firestore'
import {
  ReadCategories,
  ReadDataFoods,
  ReadDataFoodStores,
  ReadDataFoodStoresByFood
} from '../../services'
import * as Location from 'expo-location'

export const SearchScreen = ({ route, navigation }) => {
  const { id, name, index, location } = route.params
  const [data, setData] = React.useState([])
  const [limitNumber, setLimitNumber] = React.useState(10)
  const [keyWord, setKeyWord] = React.useState('')
  const q = [
    [orderBy('name', 'asc'), limit(limitNumber)],
    [orderBy('created', 'desc'), limit(limitNumber)],
    [
      where('discount', '>', 0),
      orderBy('discount', 'desc'),
      limit(limitNumber)
    ],
    [
      where('food_categories', 'array-contains', id),
      orderBy('name', 'asc'),
      startAt(keyWord),
      endAt(keyWord + '~'),
      limit(limitNumber)
    ]
  ]
  const firestore = [
    ReadCategories,
    ReadDataFoodStores,
    ReadDataFoodStoresByFood
  ]
  React.useEffect(() => {
    ; (async () => {
      const data = id
        ? await firestore[1](q[3])
        : await firestore[index](q[index])
      setData([...data])
    })()
  }, [keyWord])

  return (
    <ScrollView style={styles.container}>
      <ComeBack navigation={navigation} onChange={setKeyWord} />
      <LocationSearch address={location.address} />
      <CategoryFood
        horizontal={false}
        data={data}
        title={name}
        location={location}
        navigation={navigation}
      />
    </ScrollView>
  )
}
