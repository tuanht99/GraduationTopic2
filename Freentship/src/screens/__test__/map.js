import * as React from 'react'
import MapView, { Callout, Marker } from 'react-native-maps'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Ionicons } from '@expo/vector-icons'

export const MapScreenTest = () => {
  const [keyword, setKeyword] = useState('')
  const KEYMAP = 'AIzaSyCm7K0XCEvpUZUHnYxOtzkY27uMpqVbQFQ'
  const COMPONENTS = 'country:vn'
  const apiMap = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${keyword}&language=vi&components=${COMPONENTS}&key=${KEYMAP}`
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0
  })
  const [errorMsg, setErrorMsg] = useState(null)
  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      console.log('location', location)
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      })
    })()
  }, [])

  let text = 'Waiting..'
  if (errorMsg) {
    text = errorMsg
  } else if (location) {
    text = JSON.stringify(location)
  }
  console.log('location: ', location)
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: 'distance'
        }}
        onPress={(data, details = null) => {
          console.log('a', data, details)
          setLocation({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng
          })
        }}
        query={{
          key: KEYMAP,
          language: 'vi',
          components: 'country:vn'
        }}
        styles={styles.googleAPI}
      />
      {location.latitude !== 0 && (
        <MapView
          onRegionChangeComplete={region => {
            setLocation({
              latitude: region.latitude,
              longitude: region.longitude
            })
          }}
          provider={MapView.PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.04,
            longitudeDelta: 0.05
          }}
        >
          <Marker
            draggable={true}
            onDragEnd={e => {
              setLocation(e.nativeEvent.coordinate)
            }}
            coordinate={location}
          />
        </MapView>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  googleAPI: {
    container: { flex: 0, position: 'absolute', width: '100%', zIndex: 1 },
    listView: { backgroundColor: 'white' }
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
})
