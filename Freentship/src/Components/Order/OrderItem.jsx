import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { TouchableRipple } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

export default function OrderItem({ value, navigation }) {
  const [foods, setFoods] = useState()

  return (
    <View
      style={styles.item}
      onStartShouldSetResponder={() => {
        navigation.navigate('OrderItemDetail', {
          orderId: value.id
        })
      }}
    >
      {/* <AntDesign name="checkcircle" size={24} color="black" />
       <AntDesign name="closecircle" size={24} color="black" /> */}
      {value.data.status == 5 && (
        <AntDesign name="checkcircle" size={24} color="green" />
      )}
      {value.data.status == 9 && (
        <AntDesign name="closecircle" size={24} color="#E94730" />
      )}
      {(value.data.status == 3 || value.status == 2) && (
        <MaterialIcons name="pending" size={24} color="#E94730" />
      )}
      <Text style={styles.title}>{value.id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 20
  }
})
