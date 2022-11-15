import DetailsScreenView from '../screens/Food/DetailsScreenView'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CardView from '../screens/Cart/CartView'
import { HomeScreen } from '../screens/HomeScreen/home.screen'
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

const Stack = createNativeStackNavigator()

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="InforView"
          options={{
            // hidden navbar
            headerShown: false
          }}
          component={InforView}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
          // hidden navbar
          headerShown: false
        }} />
        <Stack.Screen name="StoreScreen" component={StoreScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="LocationScreen" component={LocationScreen} />
        <Stack.Screen name="SignupPending" component={SignupPending} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="DetailsScreenView" component={DetailsScreenView} />
        <Stack.Screen name="CartView" component={CardView} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
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
