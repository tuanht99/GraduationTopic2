import React from 'react'
import { View, Text } from 'react-native'
import { getDistance } from 'geolib'

export const AdDistance = ({ locationFrom, locationTo, styles }) => {
  const [distance, setDistance] = React.useState(0)
  React.useEffect(() => {
    setDistance(
      getDistance(
        { latitude: locationFrom.lat, longitude: locationFrom.lng },
        { latitude: locationTo.lat, longitude: locationTo.lng }
      ) / 1000
    )
  }, [locationFrom, locationTo])

  return (
    <View style={styles}>
      <Text>{distance >= 1 ? `${distance} KM` : `${distance * 1000} M`}</Text>
    </View>
  )
}
