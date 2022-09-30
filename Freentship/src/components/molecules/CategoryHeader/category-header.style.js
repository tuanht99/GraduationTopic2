import { StyleSheet } from 'react-native'
import { Colors, FontSize, Spacing } from '../../../styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Spacing['6'],
    marginHorizontal: Spacing['4']
  },
  title: {
    fontSize: FontSize['xl'],
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  seeAll: {
    color: Colors.blue
  }
})
