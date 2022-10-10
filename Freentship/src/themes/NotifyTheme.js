import { StyleSheet,  flex, } from 'react-native'



const Styles_Nottifys = StyleSheet.create({
    scrollView: {
  
      marginHorizontal: 0,
    },
    text: {
      fontSize: 25,
      paddingTop: 20,
    },
    view: {
      height: "100%",
      width: "100%",
    },
    image: {
     paddingTop: 30,
    },
    Menu: {
      paddingTop: 20,
      paddingBottom: 50,
      paddingLeft: 75,
    },
    touch: {
      height: 80,
      flex: 1,
      alignItems: "center",
      flexDirection: 'column'
  
    },
    viewhead: {
      flex: 1,
      display: flex,
      flexDirection: 'row',
      height: '100%',
      width: '100%',
      paddingTop: 10,
  
    },
    viewScroll: {
      flex: 10,
      display: flex,
  
      height: '100%',
      width: '100%',
    },
    viewNagivator: {
      flex: 0.5,
      display: flex,
  
      height: '100%',
      width: '100%',
    }
  });
  export default Styles_Nottifys