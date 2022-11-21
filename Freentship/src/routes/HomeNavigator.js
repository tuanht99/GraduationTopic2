import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens/HomeScreen'
import Ionicons from '@expo/vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import {useSelector} from "react-redux";

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

export const HomeNavigator = ({ navigation }) => {
    const carts = useSelector(state => state.carts)
    const [totals, setTotals] = useState(0)

    React.useEffect(() => {
        let total = 0;
        if (carts.length > 0) carts.forEach(item => {
            item.items.forEach(item => {
                total += item.Quantity;
            })
        })
        setTotals(total)
    }, [carts])

  return (
    <View style={{ flex: 1 }}>
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

        {totals > 0 &&<View style={{position: 'absolute', zIndex: 1, bottom: 80, right: 30}}>
            <TouchableOpacity onPress={() => navigation.navigate('CartView')}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#fff',
                        padding: 10,
                        borderRadius: 15,
                        borderWidth: 0.3,
                        borderColor: '#808080'
                    }}
                >
                    <View>
                        <AntDesign name="shoppingcart" size={24} color="black"/>
                    </View>
                    <View
                        style={{position: 'absolute', zIndex: 1, bottom: 30, right: 0}}
                    >
                        <View
                            style={{
                                backgroundColor: 'red',
                                borderRadius: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 20,
                                height: 18

                            }}
                        >
                            <Text style={{color: '#fff'}}>{totals}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>}
    </View>
  )
}
