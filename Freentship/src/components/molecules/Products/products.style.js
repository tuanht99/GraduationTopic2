import { StyleSheet } from 'react-native'
import { Spacing } from '../../../styles'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    width: 133,
    marginLeft: Spacing['4']
  },
  itemRow: {
    marginHorizontal: Spacing['4']
  },
  alignItemCenter: {
    alignItems: 'center'
  },
  alignItemStart: {
    alignItems: 'flex-start'
  }
})
