import * as React from 'react';
import { View, Text, Button, Image, ScrollView, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import AppStyle from '../themes/IndexTheme';
import Longxaodua from '../assets/longxaodua.jpg';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


export default function ComingSoon({ navigation }) {
    return (
        <SafeAreaView style={AppStyle.StoreTheme.container}>
            <ScrollView>

                <ImageBackground style={AppStyle.StoreTheme.imgFood} source={Longxaodua}>
                    <TouchableOpacity style={[AppStyle.StoreTheme.iconCicle, AppStyle.StoreTheme.rightIcon]} onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={21} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[AppStyle.StoreTheme.iconCicle, AppStyle.StoreTheme.heartIcon]}>
                        <AntDesign name="heart" size={21} color="red" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[AppStyle.StoreTheme.iconCicle, AppStyle.StoreTheme.srearchIcon]}>
                        <FontAwesome5 name="search" size={21} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[AppStyle.StoreTheme.iconCicle, AppStyle.StoreTheme.sharechIcon]}>
                        <FontAwesome5 name="external-link-alt" size={21} color="#000" />
                    </TouchableOpacity>
                </ImageBackground>

                <View style={{ flexDirection: 'row', backgroundColor: '#FF3333', justifyContent: 'center', borderRadius: 30, padding: 3, marginTop: 20, marginLeft: 20, maxWidth: 160 }}>
                    <FontAwesome5 name="star" size={18} color="#fff" />
                    <Text style={{ color: '#fff', marginLeft: 15 }}>Đối tác loship</Text>
                </View>

                
                    <Text style={{ fontWeight: 'bold', fontSize:20 , marginLeft: 20 ,marginRight: 20, marginTop:10 }}>Bún Đậu Mắm Tôm Nhà Thỏ - Long
                        Bình</Text>
              
            </ScrollView>

        </SafeAreaView>
    );
}