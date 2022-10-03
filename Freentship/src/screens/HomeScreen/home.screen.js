import react from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './home.style'

export const HomeScreen = () => {
  const uriImg = 'https://loship.vn/dist/images/home-banner-18062021.jpg'
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageContainer} source={{ uri: uriImg }}>
        <Text>Home Screen!</Text>
      </ImageBackground>
    </View>
  )
}
