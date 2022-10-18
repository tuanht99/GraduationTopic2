import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../screens/HomeScreen'
import Ionicons from '@expo/vector-icons/Ionicons'
import { SearchScreen } from '../screens/SearchScreen'

const Tab = createBottomTabNavigator()
const NotificationScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Notification Screen</Text>
    </View>
  )
}
const SettingScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Setting Screen</Text>
    </View>
  )
}
const DetailStoreScreen = ({ route }) => {
  const { id } = route.params
  console.log('id', id)
  return (
    <View style={{ flex: 1 }}>
      <Text>Detail Store Screen</Text>
    </View>
  )
}

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Notify"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator()
export const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTab" component={HomeTabs} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="DetailStoreScreen" component={DetailStoreScreen} />
    </Stack.Navigator>
  )
}
