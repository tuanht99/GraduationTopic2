import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { collection, query, where, onSnapshot } from 'firebase/firestore'
import { db } from '../../services'
import AsyncStorage from '@react-native-async-storage/async-storage'
import OrderItem from '../../Components/Order/OrderItem'
import { FlatList } from 'react-native'

export default function OrdersManagement({ navigation }) {
  const getUserID = async () => {
    try {
      const value = await AsyncStorage.getItem('userID1')
      if (value !== null) {
        setUserID(value)
      }
    } catch (e) {
      console.log('Không có userID nào!')
    }
  }

  const getOrders = () => {
    const q = query(
      collection(db, 'orders'),
      where('user_id', '==', userID + ''),
      where('status', 'in', [5, 9])
    )
    const unsubscribe = onSnapshot(q, querySnapshot => {
      const orders = []
      querySnapshot.forEach(doc => {
        orders.push({ id: doc.id, data: doc.data() })
      })
      setOrders(orders)
    })
  }
  const renderItem = ({ item }) => (
    <OrderItem value={item} navigation={navigation} />
  )
  const [userID, setUserID] = useState()
  const [orders, setOrders] = useState([])

  useEffect(() => {
    getUserID()
    console.log(userID)
  }, [])

  useEffect(() => {
    if (userID !== '') {
      getOrders()
    }
  }, [userID])
  return (
    <SafeAreaView>
      {orders.length > 0 ? (
        <FlatList
          data={orders}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text>Không có đơn hàng nào!</Text>
      )}
    </SafeAreaView>
  )
}
