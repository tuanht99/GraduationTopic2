
import React from 'react'
import { View, Text, Image, SafeAreaView, ImageBackground, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import {DATA,DATAFOOD} from '../Store/DataAo'
import Styles from './StoreStyle';
const ListOrderHistory = () => {
  return (
    <FlatList
            data={DATAFOOD[0].products} keyExtractor={item => item.id}
            renderItem={({ item }) => {
                return (
                    <View >
                        {/*onPress={() => navigation.navigate('Store')} */}
                        <TouchableOpacity style={Styles.htrOrder}>
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
export default ListOrderHistory