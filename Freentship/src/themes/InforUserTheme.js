import {
  StyleSheet
} from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const StyleInforUser = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fdRow: {
    flexDirection: 'row',
  },
  header: {

    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 100,
    backgroundColor: '#fff',
    // position: 'relative',
    // top: 0,
    // width: windowWidth,
  },
  info: {
    flex: 1,
    maxWidth: windowWidth,
  },
  imgUser: {
    height: 80, width: 80,
    resizeMode: "contain",
    borderRadius: 50,
  },
  imgGif: {
    height: 50, width: 50,
    resizeMode: "contain",
    flex: 2, justifyContent: 'center', alignItems: 'center'
  },
  text: {
    fontSize: 42,
  },
  mr10: {
    marginBottom: 8,
    marginTop: 8,
  },
  horizonline: {
    backgroundColor: '#DDDDDD', height: 5
  },
  bold: { fontWeight: 'bold', fontSize: 14 },
  textSize17: { fontSize: 16 },
  italic: { fontStyle: 'italic' },
  textGif: { fontSize: 13, color: '#AAAAAA' },
  textVersion: { fontSize: 15, color: '#999999' },
  icon: {
    fontSize: 20,
    marginLeft: 20,
    marginRight: 20,
    fontWeight: 'bold',
    color: "black"
  },

  rightIcon: {
    fontSize: 17,
    marginLeft: 10,
    marginRight: 10,
    color: "black"
  }
  ,
  supportLoShip: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  htrOrderText: {
    fontSize: 18,
    fontWeight: '900',
    marginLeft: 20,
    marginBottom: 10,
  },
  htrOrder: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
  },
  orderStatusTrue: {
    color: '#00FF00',
    fontWeight: '700',
  },
  orderStatusFalse: {
    color: '#999999',
    fontWeight: '700',
  }
});

export default StyleInforUser