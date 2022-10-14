import * as React from 'react'
import MapView from 'react-native-maps'
import { View } from 'react-native'
import styles from './map-screen.style'

export const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  )
}
