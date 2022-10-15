import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import LoginNavigator from './navigators/LoginNavigator';
// import InforSettingView from './views/InforSettingView';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import DetailsScreenView from './src/screens/DetailsScreenView'
import CartView from './src/screens/Cart/CartView'
import DetailOrderView from './src/screens/DetailOrderView'
import OrderCanceledView from './src/screens/OrderCanceledView'
import OrderDeliveredView from './src/screens/OrderDeliveredView'
import OrderView from './src/screens/OrderView'
import YourOrderView from './src/screens/YourOrderView'
const Stack = createNativeStackNavigator();
import { Provider } from "react-redux";
import store from './src/store'
import AsyncStorages from '../Freentship/src/components/asyncStore/AsyncStorage';
export default function App() {
  return (
    <Provider store={store}>
     
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DetailsScreenView" component={DetailsScreenView} />
        <Stack.Screen name="CartView" component={CartView} />
        <Stack.Screen name="DetailOrderView" component={DetailOrderView} />
        <Stack.Screen name="OrderCanceledView" component={OrderCanceledView} />
        <Stack.Screen name="OrderDeliveredView" component={OrderDeliveredView} />
        <Stack.Screen name="OrderView" component={OrderView} />
        <Stack.Screen name="YourOrderView" component={YourOrderView} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
