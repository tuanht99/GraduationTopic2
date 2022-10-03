import { StyleSheet } from 'react-native'
import { Colors, FontSize, Spacing } from '../../../styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: Spacing['6'],
    marginHorizontal: Spacing['4'],
    paddingVertical: Spacing['1']
  },
  image: {
    width: Spacing['6'],
    height: Spacing['6'],
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: Spacing['4'],
    marginHorizontal: Spacing['1']
  },
  text: {
    flex: 4,
    fontWeight: 'bold',
    fontSize: FontSize.xl,
    marginHorizontal: Spacing['1']
  }
})
