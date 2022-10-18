import React, { useState, useEffect } from 'react'
import { Location } from '../../molecules/Location'
import styles from './top-banner.style'
import { View, ImageBackground, Text } from 'react-native'
import { Colors, FontSize } from '../../../styles'
import * as LocationPK from 'expo-location'

export const TopBanner = ({ setLocationUser }) => {
  const nameIcons = ['location-sharp', 'chevron-forward-sharp']
  const colorIcon = Colors.white
  const sizeIcon = FontSize['2xl']
  const numberOfLines = 1
  const uriImg = 'https://loship.vn/dist/images/home-banner-18062021.jpg'

  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
    ;(async () => {
      let { status } = await LocationPK.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      const location = await LocationPK.getCurrentPositionAsync({})
      const locationAddress = await LocationPK.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      })
      // console.log('geoLocation', geoLocation)
      setLocation(locationAddress)
      setLocationUser({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        address: `${locationAddress[0].streetNumber}, ${locationAddress[0].street}, ${locationAddress[0].subregion}, ${locationAddress[0].region}, ${locationAddress[0].country}`
      })
    })()
  }, [])

  let text = 'Waiting..'
  if (errorMsg) {
    text = errorMsg
  } else if (location) {
    const locationTmp = location[0]
    text = `${locationTmp.streetNumber}, ${locationTmp.street}, ${locationTmp.subregion}, ${locationTmp.region}, ${locationTmp.country}`
  }

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
          {text}
        </Location>
      </ImageBackground>
    </View>
  )
}
