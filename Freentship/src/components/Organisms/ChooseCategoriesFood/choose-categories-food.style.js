import { StyleSheet } from 'react-native'
import { Colors, Spacing } from '../../../styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: Spacing['2']
  },
  itemLoader: {
    width: 133,
    marginLeft: Spacing['4'],
    borderWidth: 0.6,
    borderRadius: 10,
    borderColor: Colors.gray
  },
  itemLoaderImg: {
    flex: 1,
    height: 140,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: Colors.gray
  },
  itemLoaderName: {
    flex: 1,
    height: 20,
    backgroundColor: Colors.gray,
    marginHorizontal: Spacing['1.5'],
    marginVertical: Spacing['1'],
    borderRadius: 10
  }
})
