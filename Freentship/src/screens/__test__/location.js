import React, { useState, useEffect } from 'react'
import { Platform, Text, View, StyleSheet } from 'react-native'

import * as Location from 'expo-location'

export const Location1 = () => {
  const [location, setLocation] = useState(null)
  const [googleLocation, setGoogleLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      let googleLocation = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      })
      setLocation(location)
      setGoogleLocation(googleLocation)
      let test = await Location.reverseGeocodeAsync({
        latitude: 37.4219983,
        longitude: -122.084
      })
      console.log('test1: ', test)
    })()
  }, [])

  let text = 'Waiting..'
  let gText = 'Waiting..'
  if (errorMsg) {
    text = errorMsg
  } else if (location) {
    text = JSON.stringify(location)
  }
  if (errorMsg) {
    text = errorMsg
  } else if (googleLocation) {
    gText = JSON.stringify(googleLocation)
    console.log('googleLocation', location)
  }

  return (
    <View>
      <Text>{text}</Text>
      <Text>{gText}</Text>
    </View>
  )
}
