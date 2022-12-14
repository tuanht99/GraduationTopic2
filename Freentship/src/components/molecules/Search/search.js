import React from 'react'
import { TouchableOpacity, TextInput, View } from 'react-native'
import { AdIcon } from '../../atoms/AdIcon'
import { Colors } from '../../../styles'
import styles from './search.style'
import SelectList from "../../SelectList";

export const Search = ({
                           style,
                           styleInput,
                           size,
                           color,
                           placeholder = 'Bạn thèm món gì?',
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
                onChangeText={onChange}
                onFocus={onFocus}
            />

        </TouchableOpacity>
    )
}
