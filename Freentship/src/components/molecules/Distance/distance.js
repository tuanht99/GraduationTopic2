import React from 'react'
import { View, Text } from 'react-native'
import styles from './distance.style'
import { IconText } from '../IconText'
import { Colors, FontSize } from '../../../styles'
import { getDistance } from 'geolib'

export const Distance = ({ advertisement, locationFrom, locationTo, style, setDistanceValue }) => {
  const icon = {
    name: 'location',
    size: FontSize.xl,
    color: Colors.gray,
    numberOfLines: 1
  }
  const [distance, setDistance] = React.useState(0)
  React.useEffect(() => {
    const value = getDistance(
      {
        latitude: locationFrom.latitude,
        longitude: locationFrom.longitude
      },
      { latitude: locationTo.latitude, longitude: locationTo.longitude }
    ) / 1000
    setDistance(value)
    setDistanceValue ? setDistanceValue(value) : null
      
  }, [locationFrom, locationTo])

  return (
    <View style={[styles.container, style]}>
      {advertisement && <Text style={styles.qc}>QC</Text>}
      <IconText
        styleText={styles.text}
        name={icon.name}
        size={icon.size}
        color={icon.color}
        numberOfLines={icon.numberOfLines}
      >
        {distance >= 1 ? `${distance} KM` : `${distance * 1000} M`}
      </IconText>
    </View>
  )
}
