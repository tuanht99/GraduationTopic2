import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, SafeAreaView, ImageBackground, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Styles from './StoreStyle';
import Longxaodua from '../../../assets/Food/longxaodua.png';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export default function ComingSoon({ navigation }) {
    const DATA = [{
        image: Longxaodua,
        name: 'Bún Đậu Mắm Tôm Nhà Thỏ - Long Bình',
        relationship: 'Đối tác lo ship',

    }];

    const DATAFOOD = [
        {
            "categories": [
                {
                    "id": 1,
                    "name": "banh bot loc"
                },

                {
                    "id": 2,
                    "name": "banh canh"
                },
                {
                    "id": 3,
                    "name": "banh da"
                },
            ]
            ,

            "products": [
                {
                    id: 1,
                    idCategory: 1,
                    image: Longxaodua,
                    name: 'Lòng xòa dưa',
                    discription: 'Nhiều lòng ít dưa',
                    price: '30.000',
                    status: 'Đang mở cửa',
                },
                {
                    id: 2,
                    idCategory: 1,
                    image: Longxaodua,
                    name: 'Lòng xòa dưa',
                    discription: 'Nhiều lòng ít dưa',
                    price: '30.000',
                    status: 'Đang mở cửa',
                },
                {
                    id: 3,
                    idCategory: 2,
                    image: Longxaodua,
                    name: 'Lòng xòa dưa',
                    discription: 'Nhiều lòng ít dưa',
                    price: '30.000',
                    status: 'Đang mở cửa',
                },
                {
                    id: 4,
                    idCategory: 3,
                    image: Longxaodua,
                    name: 'Lòng xòa dưa',
                    discription: 'Nhiều lòng ít dưa',
                    price: '30.000',
                    status: 'Đang mở cửa',
                },
                {
                    id: 5,
                    idCategory: 1,
                    image: Longxaodua,
                    name: 'Lòng xòa dưa',
                    discription: 'Nhiều lòng ít dưa',
                    price: '30.000',
                    status: 'Đang mở cửa',
                },
                {
                    id: 6,
                    idCategory: 1,
                    image: Longxaodua,
                    name: 'Lòng xòa dưa',
                    discription: 'Nhiều lòng ít dưa',
                    price: '30.000',
                    status: 'Đang mở cửa',
                },
                {
                    id: 7,
                    idCategory: 2,
                    image: Longxaodua,
                    name: 'Lòng xòa dưa',
                    discription: 'Nhiều lòng ít dưa',
                    price: '30.000',
                    status: 'Đang mở cửa',
                },
                {
                    id: 8,
                    idCategory: 3,
                    image: Longxaodua,
                    name: 'Lòng xòa dưa',
                    discription: 'Nhiều lòng ít dưa',
                    price: '30.000',
                    status: 'Đang mở cửa',
                },
            ]
        }

    ];

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

    const [foodId, setFootId] = useState(1)

    const [listFood, setListFood] = useState(0)



    const headleChangeColor = (value) => (
        setFootId(value)
    )


    useEffect(() => {
        setListFood(foodId)
    }, [foodId])


    function ListFood() {
        return (
            <FlatList
                data={DATAFOOD[0].products} keyExtractor={item => item.id}
                renderItem={({ item }) => {

                    return (
                        <View style={{
                            backgroundColor: listFood === item.idCategory ? 'red' : '#fff',
                        }}>
                            <TouchableOpacity style={Styles.htrOrder} onPress={() => navigation.navigate('Store')}>
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
            </FlatList>)
    }

    const StoreComponent = () => (
        <FlatList
            data={DATA}
            renderItem={() => (
                <View>
                    <HeaderComponent></HeaderComponent>
                    <FlatList
                        horizontal
                        data={DATAFOOD[0].categories}
                        renderItem={({ item }) => (
                            <ScrollView>
                                <TouchableOpacity
                                    key={item.id}
                                    onPress={() => {
                                        () => headleChangeColor(item.id)
                                    }} >
                                    <Text style={{
                                        fontSize: 20, marginLeft: 20, textDecoration: 'underline',
                                        color: foodId === item.id ? 'red' : 'black'
                                    }}>
                                        {item.name}
                                    </Text>

                                </TouchableOpacity>
                            </ScrollView>
                        )}
                    />
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 20, marginRight: 20, marginTop: 10 }}>Bánh ướt ram giò</Text>
                    <ListFood></ListFood>
                </View>
            )}>

        </FlatList>
    )



    return (
        <SafeAreaView style={Styles.container}>
            < StoreComponent />
        </SafeAreaView>
    );
}