import { View, Text, TouchableOpacity, Dimensions, StyleSheet, } from 'react-native'
const width = Dimensions.get('window').width;
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import CalendarPicker from 'react-native-calendar-picker';
export default function ModalSimple(props) {

    CloseModal = (bool ,data)=>{
        props.changeModalVisible(bool);
        props.setData(data);
    }
    
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const startDate = selectedStartDate
      ? selectedStartDate.format("D M Y").toString()
      : '';
    console.log(selectedStartDate)
    return (
    <TouchableOpacity
            disabled={true}
            style={styles.container}
            
        >
        <View style={styles.Modal}>
            <View style={styles.views}>
            <CalendarPicker  onDateChange={setSelectedStartDate} />



                <View style={styles.buttionView}>
                    <TouchableOpacity style={styles.TouchableOpacity}
                        onPress={() => CloseModal(false)}
                    >
                        <Text style={{ color: 'blue' }}> Cancel</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchableOpacity}
                        onPress={() => CloseModal(false, startDate)}
                    >
                        <Text style={{ color: 'blue' }}> OK</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>

    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    }
    , Modal: {
        height: 350,
        backgroundColor:'red',
        justifyContent: 'flex-start',
        width: width,
       
       borderRadius: 10,
       
    }
    , TouchableOpacity: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    buttionView: {
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
   
})