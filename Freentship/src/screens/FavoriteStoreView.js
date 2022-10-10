import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import Longxaodua from '../assets/longxaodua.jpg';
import { Dimensions } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AppStyle from '../themes/IndexTheme';

const windowWidth = Dimensions.get("window").width;
const DATA = [{
  id: 1,
  image: Longxaodua,
  name: 'Lòng xòa dưa',
  discription: 'Nhiều lòng ít dưa',
  location: '3 km',
  relationship: 'Đối tác lo ship',
  price: '30.000',
  status: 'Đang mở cửa',
},
{
  id: 2,
  image: Longxaodua,
  name: 'Lòng xòa dưa',
  discription: 'Nhiều lòng ít dưa',
  location: '3 km',
  relationship: 'Đối tác lo ship',
  price: '30.000',
  status: 'Đang mở cửa',
},
{
  id: 3,
  image: Longxaodua,
  name: 'Lòng xòa dưa',
  discription: 'Nhiều lòng ít dưa',
  location: '3 km',
  relationship: 'Đối tác lo ship',
  price: '30.000',
  status: 'Đang mở cửa',
},
{
  id: 4,
  image: Longxaodua,
  name: 'Lòng xòa dưa',
  discription: 'Nhiều lòng ít dưa',
  location: '3 km',
  relationship: 'Đối tác lo ship',
  price: '30.000',
  status: 'Đang mở cửa',
},
{
  id: 5,
  image: Longxaodua,
  name: 'Lòng xòa dưa',
  discription: 'Nhiều lòng ít dưa',
  location: '3 km',
  relationship: 'Đối tác lo ship',
  price: '30.000',
  status: 'Đang mở cửa',
},
{
  id: 6,
  image: Longxaodua,
  name: 'Lòng xòa dưa',
  discription: 'Nhiều lòng ít dưa',
  location: '3 km',
  relationship: 'Đối tác lo ship',
  price: '30.000',
  status: 'Đang mở cửa',
},
{
  id: 7,
  image: Longxaodua,
  name: 'Lòng xòa dưa',
  discription: 'Nhiều lòng ít dưa',
  location: '3 km',
  relationship: 'Đối tác lo ship',
  price: '30.000',
  status: 'Đang mở cửa',
},
{
  id: 8,
  image: Longxaodua,
  name: 'Lòng xòa dưa',
  discription: 'Nhiều lòng ít dưa',
  location: '3 km',
  relationship: 'Đối tác lo ship',
  price: '30.000',
  status: 'Đang mở cửa',
},
{
  id: 9,
  image: Longxaodua,
  name: 'Lòng xòa dưa',
  discription: 'Nhiều lòng ít dưa',
  location: '3 km',
  relationship: 'Đối tác lo ship',
  price: '30.000',
  status: 'Đang mở cửa',
}];

export default function FavoriteStore({ navigation }) {
  return (
    <View style={AppStyle.FavoriteStoreTheme.container}>


      <FlatList data={DATA} keyExtractor={item => item.id} renderItem={({ item }) => (
        <TouchableOpacity style={AppStyle.InforUserTheme.htrOrder} onPress={() => navigation.navigate('Store')}>
          <View style={{
            flex: 2, justifyContent: "center",
            alignItems: "center",
          }}>
            <Image style={{
              height: 90, width: 100,
              borderRadius: 15,
              overflow: 'hidden',
              resizeMode: 'contain',

            }} source={item.image} />
          </View>
          <View style={{ flexDirection: 'column', flex: 4 }}>
            <Text style={[AppStyle.InforUserTheme.bold, AppStyle.InforUserTheme.textSize17]}>
              {item.name}
            </Text>

            <View style={{ flexDirection: 'row' }}>
              <Octicons name="location" style={AppStyle.FavoriteStoreTheme.icon} />
              <Text>{item.location}</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="star-outline" style={AppStyle.FavoriteStoreTheme.icon} />
              <Text>{item.relationship}</Text>
            </View>

            <Text style={AppStyle.InforUserTheme.orderStatusTrue}>
              {item.status}
            </Text>

          </View>
          <TouchableOpacity>
            <AntDesign name="delete" size={24} color="black" style={{ marginRight: 10 }} />
          </TouchableOpacity>

        </TouchableOpacity>)}>
      </FlatList>

    </View>
  );
}
