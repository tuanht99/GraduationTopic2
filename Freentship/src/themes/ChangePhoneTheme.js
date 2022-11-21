import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {

        marginTop: 10,
        flex: 1,

        backgroundColor: "#DCDCDC",
    },
    navigators: {
        
        flex: 1,
        display: 'flex',
        paddingTop: 10,
        flexDirection: 'row',
        paddingTop: 30,
        backgroundColor: "white",

    },
    navigatorText: {
        left: 100,
        
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        alignContent: 'center',

    },
    Inputphone: {
        margin: 5,
        flex: 8,
        backgroundColor: "white",
        justifyContent: 'center', 
        alignItems: 'center'
    },
    TextTitle:{
        fontWeight: 'bold',
       margin:10,
       fontSize:30,
       color: 'red',
       
    },
    inputContainer: {
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 9,
        borderWidth: 3,
        borderColor: '#d7d7d7',
        margin:10,
      },
      bottom:{
        flex: 1,
        display: 'flex',
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    
});