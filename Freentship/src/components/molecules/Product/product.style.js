import { StyleSheet } from 'react-native'
import { Colors, FontSize, Spacing } from '../../../styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerCol: {
    paddingVertical: Spacing['6']
  },
  containerRow: {
    flexDirection: 'row',
    paddingTop: Spacing['6']
  },
  img: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
    alignSelf: 'center'
  },
  adImageText: {
    alignItems: 'center'
  },
  imgRow: {
    width: 100,
    height: 120
  },
  text: {
    flex: 1,
    fontSize: FontSize.xl,
    fontWeight: 'bold',
    color: Colors.black
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'space-around',
    marginLeft: Spacing['4']
  },
  textRow: {
    fontSize: FontSize.xl
  }
})
