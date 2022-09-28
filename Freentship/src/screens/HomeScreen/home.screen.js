import react from 'react'
import { View } from 'react-native'
import styles from './home.style'
import { TopBanner } from '../../components/Organisms/TopBanner'

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TopBanner />
    </View>
  )
}
