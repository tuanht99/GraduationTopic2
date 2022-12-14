import React, { useEffect, useState, useRef } from 'react'
import { View, Text, TouchableOpacity, Animated } from 'react-native'
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



export const HomeNavigator = ({ navigation }) => {
  const carts = useSelector(state => state.carts)
  const [totals, setTotals] = useState(0)
  const [orders, setOrders] = useState([])
  const [ordersAc, setOrdersAc] = useState([])
  const [collapsed, setCollapsed] = useState(true)
  const [maxLines, setMaxLines] = useState(2)
  const animationHeight = useRef(new Animated.Value(0)).current

  export const HomeNavigator = ({ navigation, route }) => {
    const { location } = route.params
    React.useEffect(() => {
      if (location) {
        navigation.navigate('Home', { location: locatiogcvn });
      }
    }, [])

    useEffect(() => {
      // const arr = orders.filter(getOrders)
      // console.log('arr', arr)
      // setOrdersAc(arr)
      if (orders.length > 0) {
        setOrdersAc([])
        orders.forEach(elements => {
          console.log('elements.status', elements.status)
          if (elements.status === 6 || elements.status === 2) {
            setOrdersAc(prev => [...prev, elements])
          }
        })
      }
    }, [orders])

    // const getOrders = orders => {
    //   return orders.status === 6 || orders.status === 3 || orders.status === 2
    // }

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
            component={SettingScreen}
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
              <Text className="font-bold ">
                {ordersAc.length} đơn hàng đang được xử lý
              </Text>
            </TouchableOpacity>

            <Animated.View
              className="w-full bg-white border-b"
              style={{ maxHeight: animationHeight }}
            >
              {ordersAc.map(e => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('OrderStatus', { orderId: e.id })
                    }
                    className="flex-row justify-between items-center mx-4"
                  >
                    <Text className="p-2" numberOfLines={maxLines}>{e.id}</Text>
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

