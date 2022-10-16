import { Text, StyleSheet, View, Alert, TextInput, Button,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { async } from '@firebase/util';
import Quantity from "../../screens/Quantity";
import { useState } from "react";

export default function AsyncStorages(props ) {
   

    const [Quantity, setQuantity] = useState(1);
    function IncreaseQuantity()  {
        if (Quantity > 0) {
          
            setQuantity(prevState => prevState - 1);
          
        }
       else {
        setQuantity(0);
       }
    }
    function DecreaseQuantity() {
     
        setQuantity(prevState => prevState + 1);
        
    }
    
    const [name,setname] = useState();
    const [price, setprice] = useState(15000);
   
    // setprice(1500);
    // 
    props.setData(Quantity);
    props.setprices(price);
   
    // const state = {

       
    //     name:'',
    //     price:'',


    // };
    // const inputHandler = (name,price) => {
    //     this.setState({ ...this.state ,name: name,price: price });
    //     console.log(this.state);
    // }
    // const saveHandler = async () => {
    //     try {
    //         const Order = {
                
    //             name: this.state.name,
    //             price: this.state.price,
    //         }
    //         await AsyncStorage.setItem('id', JSON.stringify(Order));

    //     } catch (error) {
    //         Alert.alert(error.message);
    //     }
    // }
    // const loadHeader = async () => {
    //     try {
    //         const OrderString = await AsyncStorage.getItem('id');
    //         const Order = JSON.parse(OrderString);
    //         this.setState({ ...this.state, 
    //         name: Order.name, price: Order.price});
    //     } catch (error) {
    //         Alert.alert(error.message);
    //     }
    // }
    return (
        <View style={styles.container}>
    {/* sản phẩm */}
    <View style={{
                flex: 1,
                backgroundColor: "#fff",
                paddingTop: 10,
                paddingBottom: 20,
            }}
        >
            <View style={{ marginLeft: 10 }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingBottom: 50,
                    }}
                >
                    <View>
                        <Text numberOfLines=
                        {1}>
                            {"name" } 
                        </Text>
                    </View>
                    <View>
                        <Text style={{ paddingRight: 10, fontWeight: "bold" }}>
                            {price}{" Đ"}
                        </Text>
                    </View>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <View>

                    </View>
                    {/* Tang Giam  */}
                    <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 0.4,
            paddingRight: 10,
        }}>
            <View>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#fff",
                        borderRadius: 5,
                        width: 20,
                        height: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 0.3,
                        borderColor: "#808080",
                    }}
                  
                    onPress={() => { IncreaseQuantity() }}
                >
                    <Text style={{ fontWeight: "bold" }}>-</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text  style={{ fontWeight: "bold" }}>{Quantity}</Text>
            </View>
            <View>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#fff",
                        borderRadius: 5,
                        width: 20,
                        height: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 0.3,
                        borderColor: "#808080",
                    }}
                    onPress={() => { DecreaseQuantity() }}
                >
                    <Text style={{ fontWeight: "bold" }}>+</Text>
                </TouchableOpacity>
            </View>
            
        </View>
                </View>
            </View>
        </View>
        {/*  */}
       
     </View>)

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