import { Text, StyleSheet, View, Alert, TextInput, Button } from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { async } from '@firebase/util';
import Quantity from "../../screens/Quantity";
import { useState } from "react";

export default function AsyncStorages() {

    const [Total, setTotal] = useState(0);


    const initialVar = 1;
    const [Qty, setQty] = useState(initialVar)

    React.useEffect(() => {
        setTotal(Qty * 20000);
    }, [Qty])

    const setData = (data) => {
        setQty(data);
    }
    const state = {

        id: '',

    };
    const inputHandler = (id) => {
        this.setState({ ...this.state, id: id });
        console.log(this.state);
    }
    const saveHandler = async () => {
        try {
            const Order = {
                id: this.state.id,
            }
            await AsyncStorage.setItem('id', JSON.stringify(Order));

        } catch (error) {
            Alert.alert(error.message);
        }
    }
    const loadHeader = async () => {
        try {
            const OrderString = await AsyncStorage.getItem('id');
            const Order = JSON.parse(OrderString);
            this.setState({ ...this.state, id: Order.id });
        } catch (error) {
            Alert.alert(error.message);
        }
    }
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
                        <Text numberOfLines={1}>Trà sữa</Text>
                    </View>
                    <View>
                        <Text style={{ paddingRight: 10, fontWeight: "bold" }}>
                            {20000}
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
                    <Quantity setData={setData} ></Quantity>
                </View>
            </View>
        </View>
        {/*  */}
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
                        <Text numberOfLines={1}>Trà sữa</Text>
                    </View>
                    <View>
                        <Text style={{ paddingRight: 10, fontWeight: "bold" }}>
                            {20000}
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
                    <Quantity setData={setData} ></Quantity>
                </View>
            </View>
        </View>
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