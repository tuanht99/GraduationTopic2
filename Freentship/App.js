import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  Text
} from 'react-native'
import { HomeScreen } from './src/screens/HomeScreen'
import { Colors, Spacing } from './src/styles'
import { SearchScreen } from './src/screens/SearchScreen'
import { Location1 } from './src/screens/__test__/location'
import { MapScreen } from './src/screens/MapScreen'
import { MapScreenTest } from './src/screens/__test__/map'
import { WriteDataFood_StoresByCategory } from './src/services'

// import LoginNavigator from './navigators/LoginNavigator';
// import InforSettingView from './views/InforSettingView';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import DetailsScreenView from './src/screens/DetailsScreenView'
import CartView from './src/screens/CartView'
import DetailOrderView from './src/screens/DetailOrderView'
import OrderCanceledView from './src/screens/OrderCanceledView'
import OrderDeliveredView from './src/screens/OrderDeliveredView'
import OrderView from './src/screens/OrderView'
import YourOrderView from './src/screens/YourOrderView'
const Stack = createNativeStackNavigator();
import { Provider } from "react-redux";
import store from './src/store'
export default function App() {
  const [data, setData] = React.useState(null)

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
