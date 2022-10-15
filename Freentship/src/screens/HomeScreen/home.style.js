import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
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
  }
})
