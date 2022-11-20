// Screens
import StoreScreen from '../screens/Store/StoreScreen';
import DetailScreenView from '../screens/Food/DetailsScreenView'

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardView from '../screens/Cart/CartView'
import OrderView from '../screens/Food/OrderView'
import YourOrderView from '../screens/Food/YourOrderView';
import FindShipper from '../screens/FindShipper/FindShipper';
const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="StoreScreen" options={{
        headerShown: false,
      }} component={StoreScreen} />
      <Stack.Screen name="DetailsScreenView" component={DetailScreenView} />
      <Stack.Screen name="CartView" component={CardView} />
      <Stack.Screen name="OrderView" component={OrderView} />
      <Stack.Screen name="YourOrderView" component={YourOrderView} />
      <Stack.Screen name="FindShipper" component={FindShipper} />
      
    </Stack.Navigator>
  );

}

export default Router