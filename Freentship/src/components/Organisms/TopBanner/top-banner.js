import React from 'react'
import { Location } from '../../molecules/Location'
import styles from './top-banner.style'
import { View, ImageBackground, Text } from 'react-native'
import { Colors, FontSize } from '../../../styles'

export const TopBanner = () => {
  const nameIcons = ['location-sharp', 'chevron-forward-sharp']
  const colorIcon = Colors.white
  const sizeIcon = FontSize['2xl']
  const numberOfLines = 1
  const uriImg = 'https://loship.vn/dist/images/home-banner-18062021.jpg'
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: uriImg }}>
        <Location
          name1={nameIcons[0]}
          name2={nameIcons[1]}
          color1={colorIcon}
          color2={colorIcon}
          size1={sizeIcon}
          size2={sizeIcon}
          styleText={styles.text}
          numberOfLines={numberOfLines}
        >
          53 Đ. Võ Văn Ngân, Linh Chiểu, Thành Phố Thủ Đức, Thành phố Hồ Chí
          Minh
        </Location>
      </ImageBackground>
    </View>
  )
}
