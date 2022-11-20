import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native'
import { Colors, Spacing } from './src/styles'
import { HomeNavigator } from './src/routes/HomeNavigator'
import { NavigationContainer } from '@react-navigation/native'
import StoreScreen from './src/screens/Store/StoreScreen'
import { SearchScreen } from './src/screens/SearchScreen'
import DetailsScreenView from './src/screens/Food/DetailsScreenView'
import CardView from './src/screens/Cart/CartView'
import OrderView from './src/screens/Food/OrderView'
import YourOrderView from './src/screens/Food/YourOrderView';
import FindShipper from './src/screens/FindShipper/FindShipper'
import { LocationScreen } from './src/screens/LocationScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ShipperInfor from './src/screens/FindShipper/ShipperInfor'
import { LoginScreen } from './src/screens/LoginScreen'
import { SignupScreen } from './src/screens/SignupScreen'
import { ConfirmOTP } from './src/screens/ConfirmOTP'
import { SignupPending } from './src/screens/SignupPending'
import InforSettingView from './src/screens/User/InforSettingView'
import ChangeProfileView from './src/screens/User/ChangeProfileView'
import OTPChangeView from './src/screens/User/OTPChangeView'
// confirm
import { ConfirmOTPChange } from './src/screens/User/ConfirmOTPView'
// ChangePhone
import InputPhoneNumScreen from './src/screens/User/ChangePhoneNumber'
const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
      
        <Stack.Navigator
          initialRouteName='LoginScreen'
        >
          <Stack.Screen name="SignupPending" component={SignupPending} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="ConfirmOTP" component={ConfirmOTP} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="LocationScreen" component={LocationScreen} />
          <Stack.Screen name="HomeTab" component={HomeNavigator} options={{
            // hidden navbar
            headerShown: false,
          }} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} options={{
            // hidden navbar
            headerShown: false,
          }} />
          <Stack.Screen name="StoreScreen" component={StoreScreen} options={{
            // hidden navbar
            headerShown: false,
          }} />
          <Stack.Screen name="DetailsScreenView" component={DetailsScreenView} />
          <Stack.Screen name="CartView" component={CardView} />
          <Stack.Screen name="OrderView" component={OrderView} />
          <Stack.Screen name="YourOrderView" component={YourOrderView} />
          <Stack.Screen name="FindShipper" component={FindShipper} options={{
            // hidden navbar
            headerShown: false,
          }} />
          {/* phần chỉnh sửa user */}
          <Stack.Screen name="InforSettingView" component={InforSettingView} />
           {/* chỉnh sửa hình ảnh */}
        {/* chỉnh sửa thông tin */}
        <Stack.Screen name="ChangeProfile" component={ChangeProfileView} />
        {/* OTP Thay đổi sdt */}
        <Stack.Screen name="OTPChangeView" component={OTPChangeView} />
        {/* xác nhận thay đổi số điện thoại */}
        <Stack.Screen name="ConfirmOTPChange" component={ConfirmOTP} />
        {/* thay đổi số điện thoại */}
        <Stack.Screen name="ChangePhoneView" component={InputPhoneNumScreen} />
        {/*  thông báo đơn hàng */}
        {/* <Stack.Screen name="NotifyOrder" component={NotifyOrder} /> */}

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    paddingTop:
      Platform.OS === 'android' ? StatusBar.currentHeight + Spacing['1'] : 0
  }
})
