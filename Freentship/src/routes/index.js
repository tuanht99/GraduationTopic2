
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// thông tin Food
import DetailsScreenView from '../screens/Food/DetailsScreenView'
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
// notify Order
import NotifyOrder from '../screens/Notify/NotifyOrder'
const Stack = createNativeStackNavigator()

function Router() {
  return (
   
    //  <NavigationContainer>
    //     <Stack.Navigator initialRouteName="Store">
    //       <Stack.Screen name="Store" options={{
    //         // hidden navbar
    //         headerShown: false,
    //       }} component={StoreScreen} />
    // {/* <Stack.Screen name="Store" component={StoreScreen} /> */}
    //       <Stack.Screen name="DetailsScreenView" component={DetailsScreenView} />
    //       <Stack.Screen name="CartView" component={CardView} />
    //       <Stack.Screen name="Home" component={HomeScreen} />
    //       <Stack.Screen name="OrderView" component={OrderView} />
    //       <Stack.Screen name="YourOrderView" component={YourOrderView} />
    //       <Stack.Screen name="InforView" component={InforView} />
    //       <Stack.Screen name="InforSettingView" component={InforSettingView} />
    // <Stack.Screen name="ChangeProfile" component={ChangeProfileView} />
    // <Stack.Screen name="OTPChangeView" component={OTPChangeView} />
    // <Stack.Screen name="ConfirmOTP" component={ConfirmOTP} />
    // <Stack.Screen name="ChangePhoneView" component={InputPhoneNumScreen} />

    //     </Stack.Navigator>
    //   </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NotifyOrder">
      {/* chạy dầu */}
        <Stack.Screen
          name="InforView"
          options={{
            // hidden navbar
            headerShown: false
          }}
          component={InforView}
        />
        {/* thôn tin food */}
        <Stack.Screen name="DetailsScreenView" component={DetailsScreenView} />
        {/* giỏ hàng */}
        <Stack.Screen name="CartView" component={CardView} />
        {/*  màn hình chính */}
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        {/* đơn hàng */}
        <Stack.Screen name="OrderView" component={OrderView} />
        {/* đơn hàng của tôi */}
        <Stack.Screen name="YourOrderView" component={YourOrderView} />
        {/* chỉnh sửa hình ảnh */}
        <Stack.Screen name="InforSettingView" component={InforSettingView} />
        {/* chỉnh sửa thông tin */}
        <Stack.Screen name="ChangeProfile" component={ChangeProfileView} />
        {/* OTP Thay đổi sdt */}
        <Stack.Screen name="OTPChangeView" component={OTPChangeView} />
        {/* xác nhận thay đổi số điện thoại */}
        <Stack.Screen name="ConfirmOTP" component={ConfirmOTP} />
        {/* thay đổi số điện thoại */}
        <Stack.Screen name="ChangePhoneView" component={InputPhoneNumScreen} />
        {/*  thông báo đơn hàng */}
        <Stack.Screen name="NotifyOrder" component={NotifyOrder} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
