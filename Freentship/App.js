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
import {LocationScreen} from './src/screens/LocationScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
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
          <Stack.Screen name="DetailsScreenView" component={DetailsScreenView} />
          <Stack.Screen name="CartView" component={CardView} />
          <Stack.Screen name="OrderView" component={OrderView} />
          <Stack.Screen name="YourOrderView" component={YourOrderView} />
        </Stack.Navigator>
      </NavigationContainer>
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
