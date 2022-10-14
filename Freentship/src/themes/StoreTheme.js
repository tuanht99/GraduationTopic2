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

    imgFood:{
       flexDirection: 'row',
       maxWidth: windowWidth,
       height:windowHeight/4,
    },
    iconCicle:{
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        top:10,
        backgroundColor: '#222222', borderRadius: 50
    },
    rightIcon:{
        left:10,
    },
    heartIcon:{
        left:230,
    },
    srearchIcon:{
        left:240,
    },
    sharechIcon:{
      backgroundColor: '#fff',
      top:170,
      left:200,
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