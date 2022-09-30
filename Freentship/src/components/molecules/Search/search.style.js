import { StyleSheet } from 'react-native'
import { Colors, Spacing } from '../../../styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 5,
    position: 'relative'
  },
  iconContainer: {
    marginHorizontal: Spacing['1']
  },
  isPress: {
    zIndex: 2
  },
  searchContainer: {
    position: 'absolute',
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: 1
  },
  textInput: {
    flex: 1,
    paddingVertical: Spacing['1']
  }
})
