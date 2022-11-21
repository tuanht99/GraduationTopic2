import { StyleSheet } from 'react-native'
import { Colors, FontSize, Spacing } from '../../../styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    marginTop: Spacing['2']
  },
  noProductContainer: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: Spacing['2']
  },
  noProductText: {
    fontSize: FontSize['2xl']
  }
})
