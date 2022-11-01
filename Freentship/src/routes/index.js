// Screens
import StoreScreen from '../screens/Store/StoreScreen'
import DetailsScreenView from '../screens/Food/DetailsScreenView'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// cửa hàng
import storeScreen from '../screens/Store/StoreScreen'
// giỏ hàng
import CardView from '../screens/Cart/CartView'
// trang chính
import { HomeScreen } from '../screens/HomeScreen/home.screen'
// đơn hàng
import OrderView from '../screens/Food/OrderView'
// đơn hàng của bạn
import YourOrderView from '../screens/Food/YourOrderView'
// thônng tin tài khoản
import InforView from '../screens/User/InforView'
// sửa thông tin tài khoản
import InforSettingView from '../screens/User/InforSettingView'
// thay đổi thông tin tài khoản
import ChangeProfileView from '../screens/User/ChangeProfileView'
// OTP thay đổi tài khoản
import OTPChangeView from '../screens/User/OTPChangeView'
// confirm
import { ConfirmOTP } from '../screens/User/ConfirmOTPView'
// ChangePhone
import InputPhoneNumScreen from '../screens/User/ChangePhoneNumber'
// huy don
import OrderCanceledView from '../screens/Order/OrderCanceledView'
// chi tiet don
import DetailOrderView from '../screens/Order/DetailOrderView'
// don da nhan
import OrderDeliveredView from '../screens/Order/OrderDeliveredView'
const Stack = createNativeStackNavigator()

function Router() {
  return (
    //  <NavigationContainer>
    //     <Stack.Navigator initialRouteName="Home">
    //       <Stack.Screen name="Home" options={{
    //         // hidden navbar
    //         headerShown: false,
    //       }} component={HomeScreen} />
    // <Stack.Screen name="Store" component={StoreScreen} />
    //       <Stack.Screen name="DetailsScreenView" component={DetailsScreenView} />
    //       <Stack.Screen name="CartView" component={CardView} />
    //       {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
    //       <Stack.Screen name="OrderView" component={OrderView} />
    //       <Stack.Screen name="YourOrderView" component={YourOrderView} />
    //       {/* <Stack.Screen name="InforView" component={InforView} />
    //       <Stack.Screen name="InforSettingView" component={InforSettingView} /> */}
    // <Stack.Screen name="ChangeProfile" component={ChangeProfileView} />
    // <Stack.Screen name="OTPChangeView" component={OTPChangeView} />
    // <Stack.Screen name="ConfirmOTP" component={ConfirmOTP} />
    // <Stack.Screen name="ChangePhoneView" component={InputPhoneNumScreen} />

    //     </Stack.Navigator>
    //   </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InforView">
        <Stack.Screen
          name="InforView"
          options={{
            // hidden navbar
            headerShown: false
          }}
          component={InforView}
        />
        <Stack.Screen name="DetailsScreenView" component={DetailsScreenView} />
        <Stack.Screen name="CartView" component={CardView} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="OrderView" component={OrderView} />
        <Stack.Screen name="YourOrderView" component={YourOrderView} />
        {/* <Stack.Screen name="InforView" component={InforView} /> */}
        <Stack.Screen name="InforSettingView" component={InforSettingView} />
        <Stack.Screen name="ChangeProfile" component={ChangeProfileView} />
        <Stack.Screen name="OTPChangeView" component={OTPChangeView} />
        <Stack.Screen name="ConfirmOTP" component={ConfirmOTP} />
        <Stack.Screen name="ChangePhoneView" component={InputPhoneNumScreen} />
        <Stack.Screen name="OrderCanceledView" component={OrderCanceledView} />
        <Stack.Screen name="DetailOrderView" component={DetailOrderView} />
        <Stack.Screen name="OrderDeliveredView" component={OrderDeliveredView} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
