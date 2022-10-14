import React from 'react'
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
import { MapScreenTest } from './src/screens/__test__/map'
import { WriteDataFood_StoresByCategory } from './src/services'

export default function App() {
  const [data, setData] = React.useState(null)

  return (
    <SafeAreaView style={styles.container}>
      {/*<HomeScreen />*/}
      {/*<SearchScreen />*/}
      {/*<Location1 />*/}
      {/*<MapScreenTest />*/}
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
