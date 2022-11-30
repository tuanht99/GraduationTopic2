import StoreScreen from '../screens/Store/StoreScreen'
import DetailsScreenView from '../screens/Food/DetailsScreenView'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import storeScreen from '../screens/Store/StoreScreen'
import CardView from '../screens/Cart/CartView'
import { HomeScreen } from '../screens/HomeScreen/home.screen'
import OrderView from '../screens/Food/OrderView'
import YourOrderView from '../screens/Food/YourOrderView'
import InforView from '../screens/User/InforView'
import InforSettingView from '../screens/User/InforSettingView'
import ChangeProfileView from '../screens/User/ChangeProfileView'
import OTPChangeView from '../screens/User/OTPChangeView'
import { ConfirmOTP } from '../screens/User/ConfirmOTPView'
import InputPhoneNumScreen from '../screens/User/ChangePhoneNumber'
import { HomeNavigator } from './HomeNavigator'

const Stack = createNativeStackNavigator()

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeNavigator">
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
        <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
        <Stack.Screen name="OrderView" component={OrderView} />
        <Stack.Screen name="YourOrderView" component={YourOrderView} />
        <Stack.Screen name="InforSettingView" component={InforSettingView} />
        <Stack.Screen name="ChangeProfile" component={ChangeProfileView} />
        <Stack.Screen name="OTPChangeView" component={OTPChangeView} />
        <Stack.Screen name="ConfirmOTP" component={ConfirmOTP} />
        <Stack.Screen name="ChangePhoneView" component={InputPhoneNumScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
