import React from 'react'
import { View, Image } from 'react-native'
import { Search } from '../../molecules/Search'
import styles from './search-home.style'
import { Colors, FontSize } from '../../../styles'
import { AdIcon } from '../../atoms/AdIcon'
import LogoApp from '../../../assets/images/logos/app-user-red.png'

export const SearchHome = ({ style, styleImg, flexDirection }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.menuContainer, styles.menuContainerRow]}>
        <Image source={LogoApp} style={[styles.img, styleImg]} />
        {flexDirection && (
          <Search
            style={[styles.searchContainer, styles.searchContainerRow]}
            styleInput={styles.iputSearchRow}
            size={FontSize['2xl']}
            color={Colors.gray}
            onPress={() => console.log('search icon menu: search')}
          />
        )}
        <AdIcon
          style={styles.icon}
          name="menu"
          size={FontSize['2xl']}
          color={Colors.gray}
          onPress={() => console.log('search icon menu: menu')}
        />
      </View>
      {!flexDirection && (
        <Search
          style={styles.searchContainer}
          size={FontSize['2xl']}
          color={Colors.gray}
          onPress={() => console.log('search icon menu: search')}
        />
      )}
    </View>
  )
}
