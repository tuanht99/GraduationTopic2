import { StyleSheet } from 'react-native'



const ChangePasswordtheme = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: "#DCDCDC",
        width: '100%',
        height: '100%',
    },
    title: {
        color: 'red',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
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
        width: 100
    },
    navigatorsText: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        paddingTop: 15,
    },
    ChangePassword: {
        margin: 5,
        flex: 8,
        display: 'flex',
      
        backgroundColor: 'white',
      },
    ButtonSubmit: {
        margin: 5,
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'white', 
    },
    PasswordText:{
        fontSize: 20,
        margin: 10,
    },
    Button:{
        color: 'E94730',
        borderRadius: 2,

    },
    
});
export default ChangePasswordtheme