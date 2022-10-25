import React, { useState, useEffect } from 'react'
import { Location } from '../../molecules/Location'
import styles from './top-banner.style'
import { View, ImageBackground, Text } from 'react-native'
import { Colors, FontSize } from '../../../styles'
import * as LocationPK from 'expo-location'

export const TopBanner = ({ location }) => {
  const nameIcons = ['location-sharp', 'chevron-forward-sharp']
  const colorIcon = Colors.white
  const sizeIcon = FontSize['2xl']
  const numberOfLines = 1
  const uriImg = 'https://loship.vn/dist/images/home-banner-18062021.jpg'

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: uriImg }}>
        <Location
          border={true}
          name1={nameIcons[0]}
          name2={nameIcons[1]}
          color1={colorIcon}
          color2={colorIcon}
          size1={sizeIcon}
          size2={sizeIcon}
          styleText={styles.text}
          numberOfLines={numberOfLines}
        >
          {location.address}
        </Location>
      </ImageBackground>
    </View>
  )
}
