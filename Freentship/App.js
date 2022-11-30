import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  Text
} from 'react-native'
import { Colors, Spacing } from './src/styles'
import Routes from './src/routes'


export default function App() {

  return (
    <SafeAreaView style={styles.container}>

      <Routes />

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
