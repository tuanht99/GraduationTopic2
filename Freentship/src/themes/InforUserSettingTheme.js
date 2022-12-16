import { StyleSheet, flex, } from 'react-native'


const InforSettingView = StyleSheet.create({
  container: {


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
    paddingTop: 30,
    backgroundColor: "white",

  },
  avatar: {
    margin: 5,
    flex: 3,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: "white",

  },
  Profile: {
    margin: 5,
    flex: 4,
    display: 'flex',

    backgroundColor: 'white',
    flexDirection: 'column',
  },

  ChangePassword: {
    margin: 5,
    flex: 1.2,

    backgroundColor: 'white',
  },
  navigatorsText: {
    left: 55,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    alignContent: 'center',

  },
  Image: {
    paddingTop: 50,
    width: 50,
    height: 50,
  },
  avatarchange: {
    height: 80, width: 80,
    resizeMode: "contain",
    borderRadius: 50,

  },
  profileText: {
    fontSize: 25,
    textAlign: 'center',
    paddingTop: 3,
    fontWeight: 'bold'
  },

  textProfile: {
    marginLeft: 70,
    fontSize: 20,
    color: 'blue',
  },
  touchableOpacityChangePassword: {
    alignItems: 'center',
  },
  Phone: {
    flex: 2,
    margin: 5,
    padding: 5,
    backgroundColor: 'white',
  },
  PhoneText: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10,
    color: 'black',
  },
  textPhone: {
    marginLeft: 30,
    fontSize: 20,
    color: 'blue',
  },
});
export default InforSettingView;