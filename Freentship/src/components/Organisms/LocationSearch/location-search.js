import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styles from './location-search.style'
import { Location } from '../../molecules/Location'
import { Colors, FontSize } from '../../../styles'

export const LocationSearch = ({ title = 'Giao tới địa chỉ' }) => {
  const [location, setLocation] = React.useState(
    '53 Đ. Võ Văn Ngân, Linh Chiểu, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh'
  )
  const icon1 = {
    name: 'md-location',
    color: Colors.red,
    size: FontSize['2xl']
  }
  const icon2 = {
    name: 'arrow-forward',
    color: Colors.black,
    size: FontSize['2xl']
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Location
        name1={icon1.name}
        color1={icon1.color}
        size1={icon1.size}
        name2={icon2.name}
        color2={icon2.color}
        size2={icon2.size}
      >
        {location}
      </Location>
    </View>
  )
}
