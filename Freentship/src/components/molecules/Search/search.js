import React from 'react'
import { TouchableOpacity, TextInput, View } from 'react-native'
import { AdIcon } from '../../atoms/AdIcon'
import { Colors } from '../../../styles'
import styles from './search.style'

export const Search = ({
  style,
  styleInput,
  size,
  color,
  placeholder,
  value,
  onChange,
  onFocus,
  onPress
}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <AdIcon
        name="search"
        size={size}
        color={color}
        style={styles.iconContainer}
      />
      <View style={styles.searchContainer}></View>
      <TextInput
        style={[styles.textInput, !onPress && styles.isPress, styleInput]}
        placeholder={placeholder}
        placeholderTextColor={Colors.gray}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
      />
    </TouchableOpacity>
  )
}
