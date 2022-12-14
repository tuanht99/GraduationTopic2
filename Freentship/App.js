import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  Text
} from 'react-native'
import { Colors, Spacing } from './src/styles'
import { HomeNavigator } from './src/routes/HomeNavigator'
import { NavigationContainer } from '@react-navigation/native'
import StoreScreen from './src/screens/Store/StoreScreen'
import { SearchScreen } from './src/screens/SearchScreen'
import { Location1 } from './src/screens/__test__/location'
import { MapScreen } from './src/screens/MapScreen'
import { MapScreenTest } from './src/screens/__test__/map'
import { WriteDataFood_StoresByCategory } from './src/services'
import InforSettingView from './src/screens/User/InforView'
import Routes from './src/routes'

export default function App() {

  return (
    <SafeAreaView style={styles.container}>

      <Routes/>

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
