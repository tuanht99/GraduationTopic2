import React from 'react';
import { Text, View, Image, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, FlatList } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Logo from '../assets/favicon.png';
import Avatar from '../assets/longxaodua.jpg';
import Longxaodua from '../assets/longxaodua.jpg';
import Gif from '../assets/gif.jpg';
import AppStyle from '../themes/IndexTheme';




export default function BooksListApp({ navigation }) {

  const DATA = [{
    id: 1,
    image: Longxaodua,
    name: 'Lòng xòa dưa',
    discription: 'Nhiều lòng ít dưa',
    price: '30.000',
    status: 'Đang mở cửa',
  },
  {
    id: 2,
    image: Longxaodua,
    name: 'Lòng xòa dưa',
    discription: 'Nhiều lòng ít dưa',
    price: '30.000',
    status: 'Đang mở cửa',
  },
  {
    id: 3,
    image: Longxaodua,
    name: 'Lòng xòa dưa',
    discription: 'Nhiều lòng ít dưa',
    price: '30.000',
    status: 'Đang mở cửa',
  },
  {
    id: 4,
    image: Longxaodua,
    name: 'Lòng xòa dưa',
    discription: 'Nhiều lòng ít dưa',
    price: '30.000',
    status: 'Đang mở cửa',
  },
  {
    id: 5,
    image: Longxaodua,
    name: 'Lòng xòa dưa',
    discription: 'Nhiều lòng ít dưa',
    price: '30.000',
    status: 'Đang mở cửa',
  }];

  const supportList = [{
    icon1: 'smile',
    content: 'Cộng đồng lo ship',
    icon2: 'right',
    navigation: 'ComingSoon'
  },
  {
    icon1: 'heart',
    content: 'Cửa hàng yêu thích',
    icon2: 'right',
    navigation: 'FavoriteStore'
  },
  {
    icon1: 'credit-card',
    content: 'Quản lý thanh toán',
    icon2: 'right',
    navigation: 'ComingSoon'
  },
  {
    icon1: 'question',
    content: 'Câu hỏi thường gặp',
    icon2: 'right',
    navigation: 'ComingSoon'
  },
  {
    icon1: 'facebook-messenger',
    content: 'Đề xuất mong muốn',
    icon2: 'right',
    navigation: 'ComingSoon'
  },
  {
    icon1: 'telegram-plane',
    content: 'Đóng góp tính năng loship',
    icon2: 'right',
    navigation: 'ComingSoon'
  },
  {
    icon1: 'phone',
    content: 'Liên hệ với loship',
    icon2: 'right',
    navigation: 'ComingSoon'
  },

  ];

  const PROFICLE = [{
    key: 1,
    name: 'Nguyễn Văn 10',
    phone: '0966.533.699',
    image: Avatar,

  }]

  const headerComponent = () => (
    <View>

      {PROFICLE.map((user) => (
        <View style={AppStyle.InforUserTheme.fdRow}>
          <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={AppStyle.InforUserTheme.imgUser} source={user.image} />
          </View>

          <View style={{ flexDirection: 'column', flex: 4 }}>
            <Text style={{ fontSize: 16 }}>
              {user.name}
            </Text>
            <Text style={{ color: '#FF00FF', fontSize: 15 }}>
              {user.phone}
            </Text>
            <TouchableOpacity style={{}}>
              <Text style={{
                fontSize: 18, fontStyle: 'italic', textShadowColor: 'rgba(0, 0, 0, 0.75)',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 20,
              }}>Cập nhật hồ sơ</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}


      <View style={[AppStyle.InforUserTheme.mr10, AppStyle.InforUserTheme.horizonline]} />

      <View style={AppStyle.InforUserTheme.fdRow}>
        <Image style={AppStyle.InforUserTheme.imgGif} source={Gif} />

        <View style={{ flexDirection: 'column', flex: 4 }}>
          <Text style={[AppStyle.InforUserTheme.bold, AppStyle.InforUserTheme.italic]}>
            Giới thiệu freen't ship với bạn bè
          </Text>
          <Text style={[AppStyle.InforUserTheme.italic, AppStyle.InforUserTheme.textGif]}>
            Nhận ngay phần thưởng hấp dẫn
          </Text>
        </View>
        <AntDesign name="right" style={AppStyle.InforUserTheme.rightIcon} />
      </View>
      <View style={[AppStyle.InforUserTheme.mr10, AppStyle.InforUserTheme.horizonline]} />
      {supportList.map((support) => (
        <TouchableOpacity style={AppStyle.InforUserTheme.supportLoShip} onPress={() => navigation.navigate(support.navigation)}>
          <View>
            <FontAwesome5 name={support.icon1} style={AppStyle.InforUserTheme.icon} />
          </View>
          <View style={{ flexDirection: 'row', flex: 4, }} >
            <Text style={{ fontSize: 15 }}>
              {support.content}
            </Text>
          </View>
          <AntDesign name={support.icon2} style={AppStyle.InforUserTheme.rightIcon} />
        </TouchableOpacity>
      ))}

      <View style={[AppStyle.InforUserTheme.mr10, AppStyle.InforUserTheme.horizonline]} />

      <View style={AppStyle.InforUserTheme.supportLoShip}>
        <MaterialCommunityIcons name="tray-arrow-up" style={AppStyle.InforUserTheme.icon} />
        <View style={{ flexDirection: 'row', flex: 4, }} >
          <Text style={AppStyle.InforUserTheme.textVersion}>
            Phiên bản hiện tại 2.21.201
          </Text>
        </View>

      </View>

      <View style={[AppStyle.InforUserTheme.mr10, AppStyle.InforUserTheme.horizonline]} />


      <Text style={AppStyle.InforUserTheme.htrOrderText}>Lịch sử đơn hàng</Text>
    </View>
  )

  const footerComponent = () => (
    <FlatList
      data={DATA} keyExtractor={item => item.id}
      renderItem={({ item }) => (

        <TouchableOpacity style={AppStyle.InforUserTheme.htrOrder} onPress={() => navigation.navigate('Store')}>
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
            <Text style={[AppStyle.InforUserTheme.bold, AppStyle.InforUserTheme.textSize17]}>
              {item.name}
            </Text>
            <Text style={AppStyle.InforUserTheme.textGif}>
              {item.discription}
            </Text>
            <Text style={{ fontSize: 13 }}>
              {item.price}
            </Text>
            <Text style={AppStyle.InforUserTheme.orderStatusTrue}>
              {item.status}
            </Text>
          </View>
        </TouchableOpacity>)}>

    </FlatList>
  )

  return (
    <SafeAreaView style={AppStyle.InforUserTheme.container}>
      <StatusBar backgroundColor='#EEEEEE' />
      <View>
        <FlatList
          ListHeaderComponent={headerComponent}
          ListFooterComponent={footerComponent}
        />
      </View>
    </SafeAreaView>
  );
}
