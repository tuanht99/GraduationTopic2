// Screens
import StoreScreen from '../screens/Store/StoreScreen';
import DetailsScreenView from '../screens/Food/DetailsScreenView'

import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardView from '../screens/Cart/CartView'
import { HomeScreen } from '../screens/HomeScreen/home.screen';
import OrderView from '../screens/Food/OrderView'
const Stack = createNativeStackNavigator();

 function Router() {
  return (
    
   <NavigationContainer>
      <Stack.Navigator initialRouteName="Store">
        <Stack.Screen name="Store" options={{
          // hidden navbar
          headerShown: false,
        }} component={StoreScreen} />
        <Stack.Screen name="DetailsScreenView" component={DetailsScreenView} />
        <Stack.Screen name="CartView" component={CardView} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="OrderView" component={OrderView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}
 
export default Router