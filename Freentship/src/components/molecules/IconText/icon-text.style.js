import { StyleSheet } from 'react-native'
import { Colors, Spacing } from '../../../styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    marginLeft: Spacing['1'],
    color: Colors.backgroundColor
  }
})
