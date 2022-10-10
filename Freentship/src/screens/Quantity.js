import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';

export default function Adjust(props) {

   
    const [Quantity, setQuantity] = useState(1);
    props.setData(Quantity);
    
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
    
    return (


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

    )
}

const styles = StyleSheet.create({
    bottom: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})