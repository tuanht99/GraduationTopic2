import { StyleSheet } from 'react-native'



const ChangeProfilers = StyleSheet.create({

    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: "#DCDCDC",
        width: '100%',
        height: '100%',
    },
    navigators: {
        margin: 5,
        flex: 1,
        display: 'flex',
        paddingTop: 10,
        flexDirection: 'row',

        backgroundColor: "white",

    },
    touchableOpacityChangePassword: {
        width: 50
    },
    navigatorsText: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
        paddingTop: 15,
    },
    content:{
        padding: 10,
        margin: 5,
        flex: 10,
        display: 'flex',
        backgroundColor: 'white',
       
    },
    bottom:{
        flex: 1,
       
        backgroundColor: 'white',
        justifyContent: 'center',
     
    },
    inputField: {
        fontSize: 20,
        width: '100%',

       
    },
    TextTitle:{
        fontWeight: 'bold',
       margin:10,
    },
    inputContainer: {
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 9,
        borderWidth: 3,
        borderColor: '#d7d7d7',
        margin:10,
        
      },
    Date:{
        flex:1,
        margin:5,
        flexDirection:'row'
    }
    ,profileText:{
        textAlign: 'center',
        paddingTop:20,
        paddingLeft:15
    },
    sex:{
        
       
        flexDirection: 'column',
        flex:1,
        paddingLeft:50
    }
});
export default ChangeProfilers