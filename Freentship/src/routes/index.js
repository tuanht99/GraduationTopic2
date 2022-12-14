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
        <Stack.Screen name="OrderStatus" component={OrderStatus} options={{ title: 'Tr???ng th??i ????n h??ng' }}
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


        <Stack.Screen name="FavoriteStoreView" component={FavoriteStoreView} options={{ title: 'C???a h??ng y??u th??ch' }} />

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
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ title: '????ng k?? t??i kho???n m???i' }} />
        <Stack.Screen name="DetailsScreenView" component={DetailsScreenView} options={{
          title: 'Chi ti???t s???n ph???m'
        }} />
        {/* gi??? h??ng */}
        <Stack.Screen name="CartView" component={CardView} />
        <Stack.Screen name="FindShipper" component={FindShipper} options={{ title: 'Tr???ng th??i ????n h??ng' }} />
        <Stack.Screen
          name="HomeTab"
          component={HomeNavigator}
          options={{
            // hidden navbar
            headerShown: false
          }}
        />
        <Stack.Screen name="OrderView" component={OrderView} options={{ title: '?????t h??ng' }} />
        {/* ????n h??ng c???a t??i */}
        <Stack.Screen name="YourOrderView" component={YourOrderView} />
        <Stack.Screen name="InforSettingView" component={InforSettingView} />
        {/* ch???nh s???a th??ng tin */}
        <Stack.Screen name="ChangeProfile" component={ChangeProfileView} />
        {/* OTP Thay ?????i sdt */}
        <Stack.Screen name="OTPChangeView" component={OTPChangeView} />
        {/* x??c nh???n thay ?????i s??? ??i???n tho???i */}
        <Stack.Screen name="ConfirmOTP" component={ConfirmOTP} options={{
          title: 'X??c nh???n OTP'
        }} />
        {/* thay ?????i s??? ??i???n tho???i */}
        <Stack.Screen name="ChangePhoneView" component={InputPhoneNumScreen} />
        {/*  th??ng b??o ????n h??ng */}
        <Stack.Screen name="NotifyOrder" component={NotifyOrder} />
        <Stack.Screen name="CCCD" component={XacMinhCCCD} />
        <Stack.Screen name="Vourcher" component={Vourcher} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
