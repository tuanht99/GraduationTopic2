import React from 'react'
import styles from './greeting.style'
import { AdImageText } from '../../atoms/AdImageText'

export const Greeting = ({ source, label, numberOfLines = 1 }) => {
  return (
    <AdImageText
      style={styles.container}
      imageStyle={styles.image}
      textStyle={styles.text}
      source={source}
      label={label}
      numberOfLines={numberOfLines}
    />
  )
}
