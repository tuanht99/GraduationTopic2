import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const DemoProductView = () => {
    const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>This is Product Screen</Text>
        <TouchableOpacity onPress={() => navigation.navigate('DetailsScreenView')}>
            <Text>Product</Text>
        </TouchableOpacity>
    </View>
  )
}

export default DemoProductView