import DetailsScreenView from '../screens/Food/DetailsScreenView'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CardView from '../screens/Cart/CartView'
import OrderView from '../screens/Food/OrderView'
import YourOrderView from '../screens/Food/YourOrderView'
import InforView from '../screens/User/InforView'
import InforSettingView from '../screens/User/InforSettingView'
import ChangeProfileView from '../screens/User/ChangeProfileView'
import OTPChangeView from '../screens/User/OTPChangeView'
import { ConfirmOTPView } from '../screens/User/ConfirmOTPView'
import { ConfirmOTP } from '../screens/ConfirmOTP'
import InputPhoneNumScreen from '../screens/User/ChangePhoneNumber'
import { HomeNavigator } from './HomeNavigator'
import { LoginScreen } from '../screens/LoginScreen'
import { SignupScreen } from '../screens/SignupScreen'
import { SignupPending } from '../screens/SignupPending'
import { LocationScreen } from '../screens/LocationScreen'
import { SearchScreen } from '../screens/SearchScreen'
import StoreScreen from '../screens/Store/StoreScreen'
import { RatingView } from '../screens/RatingView'
import { CommentsView } from '../screens/CommentsView'
// notify Order
import NotifyOrder from '../screens/Notify/NotifyOrder'
import XacMinhCCCD from '../screens/User/XacMinhCCCD'
import Vourcher from '../screens/Coupon/Vourcher'
import OrdersManagement from '../screens/Order/OrdersManagement'
import OrderItem from '../Components/Order/OrderItem'
import OrderStatus from '../screens/OrderStatus/index'
import { OrderItemDetail } from '../screens/Order/OrderItemDetail'

import ChatScreen from '../screens/ChatScreen'

import FindShipper from '../screens/FindShipper/FindShipper'
import FavoriteStoreView from '../screens/FavoriteStoreView'
import { MapScreen } from "../screens/MapScreen";


const Stack = createNativeStackNavigator()

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="InfoView"
          options={{
            // hidden navbar
            headerShown: false
          }}
          component={InforView}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            // hidden navbar
            headerShown: false,
          }}
        />

        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="OrderItemDetail" component={OrderItemDetail}
        />
        <Stack.Screen name="RatingView" component={RatingView}
        />
        <Stack.Screen name="OrderStatus" component={OrderStatus} options={{ title: 'Trạng thái đơn hàng' }}
        />
        <Stack.Screen name="CommentsView" component={CommentsView}
        />
        <Stack.Screen name="OrderItem" component={OrderItem} />

        <Stack.Screen name="OrdersManagement" component={OrdersManagement} />
        <Stack.Screen
          name="StoreScreen"
          component={StoreScreen}
          options={{
            // hidden navbar
            headerShown: false
          }} />


        <Stack.Screen name="FavoriteStoreView" component={FavoriteStoreView} options={{ title: 'Cửa hàng yêu thích' }} />

        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            // hidden navbar
            headerShown: false
          }}
        />
        <Stack.Screen name="LocationScreen" component={LocationScreen} />
        <Stack.Screen name="SignupPending" component={SignupPending} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ title: 'Đăng ký tài khoản mới' }} />
        <Stack.Screen name="DetailsScreenView" component={DetailsScreenView} options={{
          title: 'Chi tiết sản phẩm'
        }} />
        {/* giỏ hàng */}
        <Stack.Screen name="CartView" component={CardView} />
        <Stack.Screen name="FindShipper" component={FindShipper} options={{ title: 'Trạng thái đơn hàng' }} />
        <Stack.Screen
          name="HomeTab"
          component={HomeNavigator}
          options={{
            // hidden navbar
            headerShown: false
          }}
        />
        <Stack.Screen name="OrderView" component={OrderView} options={{ title: 'Đặt hàng' }} />
        {/* đơn hàng của tôi */}
        <Stack.Screen name="YourOrderView" component={YourOrderView} />
        <Stack.Screen name="InforSettingView" component={InforSettingView} />
        {/* chỉnh sửa thông tin */}
        <Stack.Screen name="ChangeProfile" component={ChangeProfileView} />
        {/* OTP Thay đổi sdt */}
        <Stack.Screen name="OTPChangeView" component={OTPChangeView} />
        {/* xác nhận thay đổi số điện thoại */}
        <Stack.Screen name="ConfirmOTP" component={ConfirmOTP} options={{
          title: 'Xác nhận OTP'
        }} />
        {/* thay đổi số điện thoại */}
        <Stack.Screen name="ChangePhoneView" component={InputPhoneNumScreen} />
        {/*  thông báo đơn hàng */}
        <Stack.Screen name="NotifyOrder" component={NotifyOrder} />
        <Stack.Screen name="CCCD" component={XacMinhCCCD} />
        <Stack.Screen name="Vourcher" component={Vourcher} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
