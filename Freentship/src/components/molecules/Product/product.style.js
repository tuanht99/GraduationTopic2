import { StyleSheet } from 'react-native'
import { Colors, FontSize, Spacing } from '../../../styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0.6,
    borderRadius: 10,
    borderColor: Colors.gray,
    justifyContent: 'space-between'
  },
  containerCol: {
    marginVertical: Spacing['6']
  },
  containerRow: {
    flexDirection: 'row',
    marginTop: Spacing['6']
  },
  img: {
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
    fontSize: FontSize.lg,
    fontWeight: 'bold',
    color: Colors.black,
    marginVertical: Spacing['1'],
    paddingHorizontal: Spacing['1']
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'space-around',
    marginLeft: Spacing['4']
  },
  textRow: {
    fontSize: FontSize.xl
  },
  textCol: {
    marginVertical: Spacing['4']
  },
  loaderDistance: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: Spacing['1']
  },
  loader1: {
    flex: 0.2,
    height: 20,
    marginHorizontal: Spacing['1'],
    backgroundColor: Colors.gray,
    borderRadius: 10
  },
  loader2: {
    flex: 0.8
  },
  imgCol: {
    flex: 1,
    height: 140
  }
})
