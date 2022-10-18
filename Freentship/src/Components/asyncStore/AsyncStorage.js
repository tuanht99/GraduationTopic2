import { Text, StyleSheet, View, Alert, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";

export default function AsyncStorages() {

  const tittle = "thanh";
  const price = "11000";
  const total = "19000";
  const quantity = "11";
  const image = "abc";
  const arr=[]
  const Cart = [
    tittle,
    price,
    total,
    quantity,
    image,
  ]


  console.log("Mảng Array: " + Cart);
  // const inputHandler = (name, price, total, quantity, image) => {
  //   this.setState({
  //     ...this.state,
  //     tittle: name,
  //     price: price,
  //     total: total,
  //     quantity: quantity,
  //     image: image,
  //   });

  //   // console.log("đầu vào: " + this.state[0]);
  // }

  //  ansync   
  // lưu
  const saveHandler = async (Cart) => {

    try {
      const Order = Carts={

        name: tittle,
        price: price,
        total: total,
        quantity: quantity,
        image: image

      }
      await AsyncStorage.setItem('Order', JSON.stringify(Order));
      console.log( Order);
      Alert.alert('save', "Save Order", [{ Text: "ok" }]);
    } catch (error) {
      Alert.alert("lỗi: " + error.message);
    }
  }
  // loading
  const loadHeader = async () => {
    try {
      const OrderString = await AsyncStorage.getItem('Order');
      const Order = JSON.parse(OrderString);
      arr.push(
      this.Order
      )
      console.log(Order);
      Alert.alert('save', "Load Order", [{ Text: "ok" }]);
    } catch (error) {
      Alert.alert(error.message);
    }
  }


  return (
    <View style={styles.container}>
      {/* sản phẩm */}
      {/* <TextInput value={this.state.tittle}
      onChangeText={this.inputHandler}></TextInput>
       <TextInput value={this.state.price}
      onChangeText={this.inputHandler}></TextInput>
       <TextInput value={this.state.total}
      onChangeText={this.inputHandler}></TextInput>
       <TextInput value={this.state.quantity}
      onChangeText={this.inputHandler}></TextInput>
       <TextInput value={this.state.image}
      onChangeText={this.inputHandler}></TextInput> */}
      {/*  */}
      <Button title="Save" onPress={saveHandler}
        style={styles.Button}></Button>
      <Button title="Load" onPress={loadHeader}
        style={styles.Button}></Button>
    </View>
  )
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: 'center'

  },
  Button: {
    marginTop: 5,
    marginBottom: 5
  },


})