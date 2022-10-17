import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  Text, TouchableHighlight
} from 'react-native'
import { HomeScreen } from './src/screens/HomeScreen'
import { Colors, Spacing } from './src/styles'
import { SearchScreen } from './src/screens/SearchScreen'
import { Location1 } from './src/screens/__test__/location'
import { MapScreen } from './src/screens/MapScreen'
import { MapScreenTest } from './src/screens/__test__/map'
import { WriteDataFood_StoresByCategory } from './src/services'
import Routes from './src/routes'
import getDistance from 'geolib/es/getDistance'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function App() {

  getDistance(
    { latitude: 51.5103, longitude: 7.49347 },
    { latitude: "51° 31' N", longitude: "7° 28' E" } , accuracy = 1)
  
  return (
    <SafeAreaView style={styles.container}>
      {/* <Routes /> */}
      <TouchableHighlight style= {{width : 100 , height : 100  , backgroundColor:'red'}} onPress={getDistance}><Text>Click</Text></TouchableHighlight>
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
