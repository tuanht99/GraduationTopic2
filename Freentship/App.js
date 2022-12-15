import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  Text
} from 'react-native'
import { Colors, Spacing } from './src/styles'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import Routes from './src/routes'

export default function App() {

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Routes />
      </SafeAreaView>
    </Provider>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})
