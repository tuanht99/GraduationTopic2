import { StyleSheet } from 'react-native'
import { Colors, Spacing } from '../../styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  searchHomeAbs: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    top: 0
  },
  searchHomeImgAbs: {
    width: 100,
    height: 30
  },
  searchHome: {
    borderWidthTop: 0.6,
    borderRadius: 10,
    transform: [{ translateY: -8 }]
  },
  imageContainer: {
    height: 130
  },
  loaderContainer: {
    flex: 1
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
  },
  itemLoaderDistance: {
    flex: 1,
    flexDirection: 'row',
    height: 20,
    marginHorizontal: Spacing['1.5'],
    marginBottom: Spacing['1']
  },
  itemLoaderDistanceText: {
    flex: 0.8,
    marginLeft: Spacing['1.5'],
    borderRadius: 10,
    backgroundColor: Colors.gray
  },
  itemLoaderDistanceIcon: {
    flex: 0.2,
    borderRadius: 5,
    backgroundColor: Colors.gray
  }
})
