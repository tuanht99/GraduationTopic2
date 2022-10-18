// Screens
import StoreScreen from '../screens/Store/StoreScreen';
import DetailsScreenView from '../screens/Food/DetailsScreenView'

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardView from '../screens/Cart/CartView'
import OrderView from '../screens/Food/OrderView'
import YourOrderView from '../screens/Food/YourOrderView';
const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="StoreScreen" options={{
        headerShown: false,
      }} component={StoreScreen} />
      <Stack.Screen name="DetailsScreenView" component={DetailsScreenView} />
      <Stack.Screen name="CartView" component={CardView} />
      <Stack.Screen name="OrderView" component={OrderView} />
      <Stack.Screen name="YourOrderView" component={YourOrderView} />
    </Stack.Navigator>
  );

}

export default Router