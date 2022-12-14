import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native'
import { Colors, Spacing } from './src/styles'
import { HomeNavigator } from './src/routes/HomeNavigator'
import { NavigationContainer } from '@react-navigation/native'
import StoreScreen from './src/screens/Store/StoreScreen'
import { SearchScreen } from './src/screens/SearchScreen'
import DetailsScreenView from './src/screens/Food/DetailsScreenView'
import CardView from './src/screens/Cart/CartView'
import OrderView from './src/screens/Food/OrderView'
import YourOrderView from './src/screens/Food/YourOrderView';
import FindShipper from './src/screens/FindShipper/FindShipper'
import {LocationScreen} from './src/screens/LocationScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ShipperInfor from './src/screens/FindShipper/ShipperInfor'
import {CommentsView} from "./src/screens/CommentsView";
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {RatingView} from "./src/screens/RatingView";

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="LocationScreen" component={LocationScreen} />
              <Stack.Screen name="HomeTab" component={HomeNavigator} options={{
                // hidden navbar
                headerShown: false,
              }} />
              <Stack.Screen name="SearchScreen" component={SearchScreen} options={{
                // hidden navbar
                headerShown: false,
              }} />
              <Stack.Screen name="StoreScreen" component={StoreScreen} options={{
                // hidden navbar
                headerShown: false,
              }} />
              <Stack.Screen name="CommentsView" component={CommentsView} />
              <Stack.Screen name="RatingView" component={RatingView} />
              <Stack.Screen name="DetailsScreenView" component={DetailsScreenView} />
              <Stack.Screen name="CartView" component={CardView} />
              <Stack.Screen name="OrderView" component={OrderView} />
              <Stack.Screen name="YourOrderView" component={YourOrderView} />
              <Stack.Screen name="FindShipper" component={FindShipper} options={{
                // hidden navbar
                headerShown: false,
              }} />
              <Stack.Screen name="ShipperInfor" component={ShipperInfor} options={{
                // hidden navbar
                headerShown: false,
              }} />

            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    paddingTop:
      Platform.OS === 'android' ? StatusBar.currentHeight + Spacing['1'] : 0
  }
})
