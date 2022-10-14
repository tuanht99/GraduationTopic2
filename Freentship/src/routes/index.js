// Screens
import StoreScreen from '../screens/Store/StoreScreen';
import DetailsScreenView from '../screens/Food/DetailsScreenView'

import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


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
        
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}
 
export default Router