import { StyleSheet } from 'react-native'
import { Colors, FontSize, Spacing } from '../../../styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: Spacing['6']
  },
  img: {
    flex: 1,
    width: '100%',
    borderRadius: 10
  },
  text: {
    flex: 1,
    fontSize: FontSize.xl,
    fontWeight: 'bold',
    color: Colors.black
  }
})
