import { StyleSheet } from 'react-native'
import { Colors, FontSize, Spacing } from '../../../styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing['1']
  },
  qc: {
    backgroundColor: Colors.yellow,
    color: Colors.white,
    borderRadius: Spacing['1'],
    paddingVertical: 4,
    paddingHorizontal: Spacing['1'],
    marginRight: Spacing['1']
  },
  text: {
    flex: 1,
    fontSize: FontSize.xl
  }
})
