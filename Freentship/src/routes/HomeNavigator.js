import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens/HomeScreen'
import Ionicons from '@expo/vector-icons/Ionicons'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { getInfoUser } from '../services/index'
import { useNavigation } from '@react-navigation/native'
import { doc, onSnapshot, getDoc } from 'firebase/firestore'
import { db } from '../services/firebase'

const Tab = createBottomTabNavigator()
const NotificationScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1 }}>
      <Text>Notification Screen</Text>

      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('OrderStatus', {
              orderId: 'YIyxn0rxG96xuyDsquKb'
            })
          }
          className="bg-red-500 w-[100px] h-[100px]"
        >
          <Text>dạhhfgdhgf</Text>
        </TouchableOpacity>
      </View>
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
  const [orders, setOrders] = useState([])
  const [ordersAc, setOrdersAc] = useState([])

  console.log('orders: ', orders)
  console.log('ordersAc: ', ordersAc)
  useEffect(() => {
    getInfoUser('kxzmOQS3sVUr2pm9AbLI').then(user => {
      const orders = []
      user.a.forEach(element => {
        setOrders([])
        onSnapshot(doc(db, 'orders', element), doc => {
          orders.push({
            status: doc.data().status,
            id: doc.id
          })
          setOrders(orders)
        })
      })
    })
  }, [])

  useEffect(() => {
    const arr = orders.filter(a)
    console.log('arr', arr)
    setOrdersAc(arr)
  }, [orders])

  const a = orders => {
    return orders.status === 6 || orders.status === 3 || orders.status === 2
  }

  React.useEffect(() => {
    let total = 0
    if (carts.length > 0)
      carts.forEach(item => {
        item.items.forEach(item => {
          total += item.Quantity
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
      {ordersAc !== [] ? (
        <View className="w-full h-10 bg-[#99FFFF] flex-row items-center absolute z-10 bottom-[47px] border-b border-gray-300">
          <View className="ml-2">
            <MaterialIcons name="library-books" size={24} color="black" />
          </View>
          <Text className="font-bold"> 1 đơn hàng đang được xử lý</Text>
        </View>
      ) : '' }

      {totals > 0 && (
        <View
          style={{ position: 'absolute', zIndex: 1, bottom: 80, right: 30 }}
        >
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
                <AntDesign name="shoppingcart" size={24} color="black" />
              </View>
              <View
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  bottom: 30,
                  right: 0
                }}
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
                  <Text style={{ color: '#fff' }}>{totals}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}
