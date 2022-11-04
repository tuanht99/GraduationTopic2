import {
    StyleSheet
  } from 'react-native';
  import { Dimensions } from 'react-native';
  
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  
  const StoreStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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
    , btnCategory:{
 
      marginRight: 10,
    },
    disabledButton: {     flexDirection: 'row', justifyContent: 'space-evenly' ,  marginTop: 10
    }
    , category:{
      borderRadius: 20 , backgroundColor: "#C0C0C0" , paddingLeft: 15 , paddingRight: 15 
    },
    ml15:{paddingLeft: 15}
    ,
    loation:{
      fontSize: 20, marginLeft:45, marginRight: 5 
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
      opacity: 0.6
    }
  });
  
  export default StoreStyle