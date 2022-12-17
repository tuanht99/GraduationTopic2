import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native'

import { getDistance, getPreciseDistance } from 'geolib'
import { AdDistance } from '../../Components/atoms/AdDistance'

export const CalculateDistance = () => {
  const locationFrom = { lat: 10.8511574, lng: 106.7579434 }
  const locationTo = { lat: 10.7613952, lng: 106.6821874 }
  // const locationTo1 = { lat: 10.8501108, lng: 106.7540356 }
  const calculateDistance = () => {
    let dis = getDistance(
      { latitude: 10.8511574, longitude: 106.7579434 },
      { latitude: 10.8501108, longitude: 106.7540356 }
    )
    alert(`Distance\n\n${dis} Meter\nOR\n${dis / 1000} KM`)
  }

  const calculatePreciseDistance = () => {
    let pdis = getPreciseDistance(
      { latitude: 10.8511574, longitude: 106.7579434 },
      { latitude: 10.7613952, longitude: 106.6821874 }
    )
    alert(`Precise Distance\n\n${pdis} Meter\nOR\n${pdis / 1000} KM`)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.header}>
            Example to Calculate Distance Between Two Locations
          </Text>
          <AdDistance locationFrom={locationFrom} locationTo={locationTo} />
          <Text style={styles.textStyle}>
            Distance between
            {'\n'}
            cho thu duc
          </Text>
          <TouchableHighlight
            style={styles.buttonStyle}
            onPress={calculateDistance}
          >
            <Text>Get Distance</Text>
          </TouchableHighlight>
          <Text style={styles.textStyle}>
            Precise Distance between
            {'\n'}
            truong dai hoc su pham thanh pho ho chi minh
          </Text>
          <TouchableHighlight
            style={styles.buttonStyle}
            onPress={calculatePreciseDistance}
          >
            <Text>Get Precise Distance</Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center'
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    paddingVertical: 20
  },
  textStyle: {
    marginTop: 30,
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    paddingVertical: 20
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#dddddd',
    margin: 10
  }
})
