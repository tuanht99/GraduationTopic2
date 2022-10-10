import {
    StyleSheet
} from 'react-native';

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const FavoriteStoreTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  mr10: {
    marginBottom: 8,
    marginTop: 8,
  },
  bold: { fontWeight: 'bold', fontSize: 14 },
  textSize17:{  fontSize: 16},
  italic: { fontStyle: 'italic' },
  textGif: { fontSize: 13, color: '#AAAAAA' },
  textVersion: { fontSize: 15, color: '#999999' },
  icon: {
    fontSize: 15,
    marginRight: 10,
    fontWeight: 'bold',
    color: "black",
  }
  ,
  htrOrderText: {
    fontSize: 18,
    fontWeight: '900',
    marginLeft: 20,
    marginBottom: 10,
  },
  htrOrder:{
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
  },
  orderStatusTrue:{
    color:'#00FF00',
    fontWeight:'700',
  },
  orderStatusFalse:{
    color:'#999999',
    fontWeight:'700',
  }
  });

  export default FavoriteStoreTheme