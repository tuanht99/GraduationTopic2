import { Text, StyleSheet, View, Alert, TextInput, Button,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { async } from '@firebase/util';
import Quantity from "../Quantity";
import { useState } from "react";

export default function AsyncStorages() {
   
    const state = {


        tittle:'',
        price:'',
        total:'',
        quantity:'',
        image:'',
    
      };
      const inputHandler = (name, price,total, quantity , image) => {
        this.setState({ ...this.state, tittle: name, price: price,total:total, quantity: quantity,image: image });
    
        console.log(this.state);
      }
    
      //  ansync   
      // lưu
      const saveHandler = async () => {
        try {
          const Order = {
    
            name: tittle, 
            price: price,
            total:total, 
            quantity: quantity,
            image: image
    
          }
          await AsyncStorage.setItem('id', JSON.stringify(Order));
    
        } catch (error) {
          Alert.alert(error.message);
        }
      }
      // loading
      const loadHeader = async () => {
        try {
          const OrderString = await AsyncStorage.getItem('id');
          const Order = JSON.parse(OrderString);
          this.setState({
            name: Order.name, price: Order.price,
            total: Order.total, quantity: Order.quantity, images: Order.images
            
          });
        } catch (error) {
          Alert.alert(error.message);
        }
      }
 
   
    return (
        <View style={styles.container}>
    {/* sản phẩm */}
   
        {/*  */}
       
     </View>
     )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,

       
    },
    Button: {
        marginTop: 5,
        marginBottom: 5
    },
    TextInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        // marginBottom: 10,
        // marginTop: 5
    }

})