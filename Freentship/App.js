import { StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native'
import { HomeScreen } from './src/screens/HomeScreen'
import { Colors, Spacing } from './src/styles'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
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
