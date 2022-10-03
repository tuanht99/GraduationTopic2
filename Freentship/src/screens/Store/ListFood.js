
import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import {DATAFOOD} from '../Store/DataAo'
import Styles from './StoreStyle';

const ListFood = ({navigation}) => {
  return (
    <FlatList
            data={DATAFOOD[0].products} keyExtractor={item => item.id}
            renderItem={({ item }) => {
                return (
                    <View >
                        
                        <TouchableOpacity style={Styles.htrOrder} onPress={() => navigation.navigate("DetailsScreenView")}>
                            <View style={{
                                flex: 2, justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Image style={{
                                    height: 90, width: 90,
                                    borderRadius: 15,
                                    overflow: 'hidden',
                                    resizeMode: 'contain',

                                }} source={item.image} />
                            </View>
                            <View style={{ flexDirection: 'column', flex: 4 }}>
                                <Text style={[Styles.bold, Styles.textSize17]}>
                                    {item.name}
                                </Text>
                                <Text style={Styles.textGif}>
                                    {item.discription}
                                </Text>
                                <Text style={{ fontSize: 13 }}>
                                    {item.price}
                                </Text>
                                <Text>{item.idCategory}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )
            }}
        >
        </FlatList>
  )
}
export default ListFood