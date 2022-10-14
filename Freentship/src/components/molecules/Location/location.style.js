import { StyleSheet } from 'react-native'
import { Colors, Spacing } from '../../../styles'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Spacing['3'],
    marginBottom: Spacing['6']
  },
  containerBorder: {
    backgroundColor: Colors.black,
    opacity: 0.6,
    marginHorizontal: Spacing['4'],
    padding: Spacing['2'],
    borderRadius: 25
  },
  text: {
    paddingRight: Spacing['1']
  },
  iconContainer: {
    marginLeft: Spacing['1']
  }
})
