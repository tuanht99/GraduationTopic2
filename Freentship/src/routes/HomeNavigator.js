import React, { useEffect, useState, useRef } from 'react'
import { View, Text, TouchableOpacity, Animated } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens/HomeScreen'
import Ionicons from '@expo/vector-icons/Ionicons'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import {
  doc,
  onSnapshot,
  getDoc,
  query,
  getDocs,
  collection,
  where
} from 'firebase/firestore'
import { db } from '../services/firebase'
import InforView from '../screens/User/InforView'
import { useSelector } from 'react-redux'

const Tab = createBottomTabNavigator()
const NotificationScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1 }}>
      <Text>Notification Screen</Text>

      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeTab')}
          className="bg-red-500 w-[100px] h-[100px]"
        >
          <Text>dạhhfgdhgf</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export const HomeNavigator = ({ navigation }) => {
  const carts = useSelector(state => state.carts)
  const [totals, setTotals] = useState(0)
  const [ordersAc, setOrdersAc] = useState([])
  const [collapsed, setCollapsed] = useState(true)
  const [maxLines, setMaxLines] = useState(2)
  const animationHeight = useRef(new Animated.Value(0)).current
  const user_id = useSelector(state => state.user)

  useEffect(() => {
    const q = query(
      collection(db, 'orders'),
      where('user_id', '==', `${user_id.id}`),
      where('status', 'in', [3, 6, 4 , 1])
    )

    const unsubscribe = onSnapshot(q, querySnapshot => {
      const orders = []

      querySnapshot.forEach(doc => {
        orders.push({id:doc.id , name:doc.data().store_name})
      })
      setOrdersAc(orders)
    })

    return () => {
      
      unsubscribe
    }
  }, [])

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

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  const collapseView = () => {
    Animated.timing(animationHeight, {
      duration: 1000,
      useNativeDriver: false,
      toValue: 0
    }).start()
  }

  const expandView = () => {
    setMaxLines(null)
    Animated.timing(animationHeight, {
      duration: 1000,
      useNativeDriver: false,
      toValue: 5000
    }).start()
  }

  useEffect(() => {
    if (collapsed) {
      collapseView()
    } else {
      expandView()
    }
  }, [collapsed])

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
          component={InforView}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>

      {ordersAc.length > 0 ? (
        <View className="overflow-hidden absolute z-10 bottom-[47px] w-full">
          <TouchableOpacity
            onPress={toggleCollapsed}
            className="w-full h-10 bg-[#99FFFF] flex-row items-center  border-b border-gray-300"
          >
            <View className="ml-2">
              <MaterialIcons name="library-books" size={24} color="black" />
            </View>
            <Text className="font-bold ml-2">
              {ordersAc.length} đơn hàng đang được xử lý
            </Text>
          </TouchableOpacity>

          <Animated.View
            className="w-full bg-white border-b"
            style={{ maxHeight: animationHeight }}
          >
            {ordersAc.map((e, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    navigation.navigate('OrderStatus', { orderId: e.id })
                  }
                  className="flex-row justify-between items-center mx-4"
                >
                  <Text className="p-2" numberOfLines={maxLines}>
                    {e.name}
                  </Text>
                  <Text className="font-bold text-blue-500">Xem</Text>
                </TouchableOpacity>
              )
            })}
          </Animated.View>
        </View>
      ) : (
        ''
      )}

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
