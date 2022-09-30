import { StyleSheet } from 'react-native'
import { Colors, Spacing } from '../../../styles'

export default StyleSheet.create({
  container: {
    padding: Spacing['4'],
    backgroundColor: Colors.white
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing['2']
  },
  menuContainerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Spacing['2'],
    marginBottom: 0
  },
  iputSearchRow: {
    paddingVertical: 0
  },
  img: {
    width: 220,
    height: 60
  },
  icon: {},
  searchContainer: {
    marginTop: Spacing['2']
  },
  searchContainerRow: {
    marginHorizontal: Spacing['4']
  }
})
