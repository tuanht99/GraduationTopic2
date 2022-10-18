import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  Text
} from 'react-native'
import { HomeScreen } from './src/screens/HomeScreen'
import { Colors, Spacing } from './src/styles'
import { SearchScreen } from './src/screens/SearchScreen'
import { Location1 } from './src/screens/__test__/location'
import { MapScreen } from './src/screens/MapScreen'
import {
  dataFood,
  ReadDataFoodStores,
  ReadDataFoodStoresByFood,
  WriteDataFoodInFoodStores
} from './src/services'
import { MapScreenTest } from './src/screens/__test__/map'
import { CalculateDistance } from './src/screens/__test__/CalculateDistance'
import * as Location from 'expo-location'
import {
  collectionGroup,
  getDocs,
  orderBy,
  query,
  where
} from 'firebase/firestore'
import { HomeNavigator } from './src/routes/HomeNavigator'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  // const [locations, setLocations] = React.useState(null)
  // const [errorMsg, setErrorMsg] = useState(null)
  //
  // useEffect(() => {
  //   ;(async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync()
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied')
  //       return
  //     }
  //
  //     let location = await Location.geocodeAsync(
  //       '53 Đ. Võ Văn Ngân, Linh Chiểu, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh',
  //       {}
  //     )
  //     setLocations(location)
  //   })()
  // }, [])

  // if (errorMsg) {
  //   console.log('errorMsg', errorMsg)
  // }
  //
  // console.log('locations', locations)
  // WriteDataFoodInFoodStores(dataFood).then(() => {
  //   console.log('success')
  // })

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    paddingTop:
      Platform.OS === 'android' ? StatusBar.currentHeight + Spacing['1'] : 0
  }
})
