import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import formatCash from '../formatCash'

export default function OrderItem({ value, navigation }) {
  return (
    <View
      style={styles.item}
      onStartShouldSetResponder={() => {
        navigation.navigate('OrderItemDetail', {
          orderId: value.id,
          storeId: value.data.food_store_id,
          nameStore: value.data.store_name
        })
      }}
    >
      <View style={{ borderRadius: 50 }}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 10 }}
          source={{ uri: value.data.ordered_food[0].image + '' }}
        />
      </View>
      <View style={{ paddingLeft: 10 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '800'
          }}
        >
          {value.data.store_name}
        </Text>
        <Text style={{ fontSize: 18, color: 'grey' }}>
          {value.data.ordered_food[0].food_name}
        </Text>
        <Text style={{ fontSize: 18 }}>
          Tổng tiền: {formatCash(value.data.totalPrice + '')} VNĐ
        </Text>
        <Text>
          {value.data.status === 5 ? (
            <Text style={{ color: 'green' }}>Giao hàng thành công</Text>
          ) : (
            <Text style={{ color: 'red' }}>Đã huỷ</Text>
          )}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  }
})
