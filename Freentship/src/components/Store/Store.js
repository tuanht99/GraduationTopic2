import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, SafeAreaView, ImageBackground, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Styles from './StoreStyle';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { DATA, DATAFOOD } from '../Store/DataAo'
import ListOrderHistory from './ListFood';
export default function Store({ navigation }) {

    const [foodId, setFootId] = useState(1)
    console.log(foodId);
    const headleChangeColor = (value) => (
        setFootId(value)
    )


    const HeaderComponent = () => (
        <View>
            {DATA.map(data => (
                <View>
                    <ImageBackground style={Styles.imgFood} source={data.image}>
                        <TouchableOpacity style={[Styles.iconCicle, Styles.rightIcon]} onPress={() => navigation.goBack()}>
                            <AntDesign name="arrowleft" size={21} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity style={[Styles.iconCicle, Styles.heartIcon]}>
                            <AntDesign name="heart" size={21} color="red" />
                        </TouchableOpacity>
                        <TouchableOpacity style={[Styles.iconCicle, Styles.srearchIcon]}>
                            <FontAwesome5 name="search" size={21} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity style={[Styles.iconCicle, Styles.sharechIcon]}>
                            <FontAwesome5 name="external-link-alt" size={21} color="#000" />
                        </TouchableOpacity>
                    </ImageBackground>

                    <View style={{ flexDirection: 'row', backgroundColor: '#FF3333', justifyContent: 'center', borderRadius: 30, padding: 3, marginTop: 20, marginLeft: 20, maxWidth: 160 }}>
                        <FontAwesome5 name="star" size={18} color="#fff" />
                        <Text style={{ color: '#fff', marginLeft: 15 }}>{data.relationship}</Text>
                    </View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                        {data.name}
                    </Text>

                    <View style={Styles.btnCategory}>
                        <TouchableOpacity style={Styles.category} >
                            <Text>Ăn sáng</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.category} >
                            <Text>Ăn trưa</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.category} >
                            <Text>Ăn tối</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>

                        <Octicons name="location" style={Styles.loation} />
                        <Text style={{ minWidth: 100 }}>3Km</Text>
                        <Text style={[Styles.orderStatusTrue, Styles.ml15]}>Đang mở cửa</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 40, marginTop: 5 }}>
                        <Fontisto name="star" size={25} color="#FFCC00" style={{ marginRight: 5 }} />
                        <Text style={{ marginRight: 50, fontSize: 17, color: "#000", fontWeight: "bold", borderRadius: 10, backgroundColor: '#FFFF99' }}> 4.1 <Text style={{ color: "#666666", fontSize: 15 }}>(15+)</Text></Text>
                        <TouchableOpacity>
                            {/* onPress={() => navigation.navigate('RatingView')} */}
                            <Text style={{ color: '#0099FF', minWidth: 100 }}>Xem thêm</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[Styles.mr10, Styles.horizonline]} />
                    <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                        <FontAwesome5 name="shipping-fast" size={24} color="black" style={{ marginRight: 20 }} />
                        <Text >FreeShip dưới 2km</Text>
                    </View>
                    <View style={[Styles.mr10, Styles.horizonline]} />
                </View>
            ))}

        </View>
    )

    const CategoriesBar = () => (
        <ScrollView
            horizontal>
            {DATAFOOD[0].categories.map((item) => (
                <TouchableOpacity
                    onPress={() => {
                        setFootId(item.id)
                    }} >
                    <Text style={{
                        fontSize: 20, marginLeft: 20, textDecoration: 'underline',
                        color: foodId === item.id ? 'red' : 'black'
                    }}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>

    )
    const Store = () => (
        <FlatList
            data={DATA}
            renderItem={() => (
                <View>
                    <HeaderComponent />
                    <CategoriesBar />
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 20, marginRight: 20, marginTop: 10 }}>Bánh ướt ram giò</Text>
                    <ListOrderHistory />
                </View>
            )}>

        </FlatList>
    )



    return (
        <SafeAreaView style={Styles.container}>
            < Store />
        </SafeAreaView>
    );
}