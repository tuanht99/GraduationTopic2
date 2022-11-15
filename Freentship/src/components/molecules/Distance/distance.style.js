import { StyleSheet } from 'react-native'
import { Colors, FontSize, Spacing } from '../../../styles'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing['1'],
    paddingHorizontal: Spacing['1']
  },
  qc: {
    backgroundColor: Colors.yellow,
    color: Colors.white,
    borderRadius: Spacing['1.5'],
    // paddingVertical: Spacing['1.5']
    paddingHorizontal: Spacing['1.5']
  },
  text: {
    flex: 1,
    fontSize: FontSize.md
  }
})
