import { StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native'
import { HomeScreen } from './src/screens/HomeScreen'

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
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})
