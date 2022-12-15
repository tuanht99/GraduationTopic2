import React from 'react'
import {
  Button,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import avatarImage from '../assets/images/monAn1.png'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { Colors } from '../styles'
import { Card } from '../Components/molecules/Card'
import {
  AddHeart,
  ReadCommentsByStoreId,
  ReadHeartsByUserId,
  UpdateHeart
} from '../services'

const Comment = ({ data }) => {
  const dataTime = data.created_at.toDate()
  const tags = [
    '#Hài lòng',
    '#Không hài lòng',
    '#Tốt',
    '#Tệ',
    '#Đẹp',
    '#Xấu',
    '#Ngon',
    '#Giở',
    '#Chất lượng',
    '#Chưa chất lượng'
  ]
  const emotion = data.isEmotion ? 'Hài lòng' : 'Không hài lòng'
  const [isHeart, setIsHeart] = React.useState(false)
  const [heart, setHeart] = React.useState({})

  const Item = ({ uri }) => {
    return (
      <Image
        source={{ uri: uri }}
        style={{
          width: 80,
          height: 80,
          margin: 5,
          borderRadius: 10
        }}
      ></Image>
    )
  }
  const renderItem = ({ key, uri }) => <Item key={key} uri={uri} />

  function handleHeart() {
    if (!heart.hasOwnProperty('isHeart')) {
      AddHeart(data.id, { userId: 'mzVAqynSkWk0KV0LZg0j', isHeart: true })
        .then(id => {
          setHeart({ id, isHeart: true })
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      UpdateHeart(data.id, heart.id, { isHeart: !isHeart })
        .then(() => {
          console.log('cap nhat heart thanh cong')
        })
        .catch(err => {
          console.log(err)
        })
    }
    setIsHeart(!isHeart)
  }

  React.useEffect(() => {
    ReadHeartsByUserId('mzVAqynSkWk0KV0LZg0j')
      .then(res => {
        res.map(item => {
          if (item.commentId === data.id) {
            setHeart(item)
            return setIsHeart(item.isHeart)
          }
        })
        // setIsHeart(res.some(item => item.commentId === data.id));
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <Card styles={{ flexDirection: 'row', backgroundColor: Colors.white }}>
      <Image
        style={{ width: 35, height: 35, borderRadius: 25 }}
        source={avatarImage}
      />
      <View style={{ flex: 1, paddingStart: 6 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold' }}>Username</Text>
          <Text
            style={{
              paddingStart: 4,
              color: Colors.gray
            }}
          >{`${dataTime.getDay()} tháng ${dataTime.getMonth()}${
            dataTime.getFullYear() === new Date().getFullYear()
              ? ', '
              : ` năm ${dataTime.getFullYear()}`
          } ${dataTime.getHours()}:${dataTime.getMinutes()}`}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {data.isEmotion ? (
            <Ionicons name="happy-outline" size={24} color={Colors.green} />
          ) : (
            <Ionicons name="sad-outline" size={24} color={Colors.purple} />
          )}

          <Text
            style={{
              paddingStart: 4,
              paddingTop: 4,
              color: data.isEmotion ? Colors.green : Colors.purple
            }}
          >
            {emotion}
          </Text>
        </View>
        <Text style={{ paddingTop: 4 }}>{data.comment}</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {data.path_image.map((image, index) =>
            renderItem({ key: index, uri: image })
          )}
        </View>
        <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
          {tags.map((item, index) => {
            return (
              <Text
                key={index}
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 6,
                  marginTop: 8,
                  marginEnd: 8,
                  backgroundColor: Colors.gray,
                  color: Colors.black,
                  borderRadius: 8
                }}
              >
                {item}
              </Text>
            )
          })}
        </View>
        <TouchableOpacity
          onPress={handleHeart}
          style={{
            flexDirection: 'row',
            width: '30%',
            alignItems: 'center',
            paddingTop: 12
          }}
        >
          {isHeart ? (
            <Ionicons name="heart" size={24} color={Colors.red} />
          ) : (
            <Ionicons name="heart-outline" size={24} color={Colors.black} />
          )}
          <Text style={{ paddingStart: 4 }}>Hữu ích</Text>
        </TouchableOpacity>
      </View>
    </Card>
  )
}

export const CommentsView = ({ navigation, route }) => {
  const { storeId, storeName } = route.params
  const [dataComments, setDataComments] = React.useState([])
  const [rating, setRating] = React.useState(0)

  React.useEffect(() => {
    ReadCommentsByStoreId(storeId)
      .then(res => {
        setDataComments(res)
        setRating(
          +(
            (res
              .map(item => (item.isEmotion ? 1 : 0))
              .reduce((a, b) => a + b, 0) /
              res.length) *
            100
          ).toFixed(2)
        )
      })
      .catch(err => {
        console.log('err', err)
      })
  }, [])

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      ),
      title: 'Đánh giá về cửa hàng',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 15
      }
    })
  }, [navigation])
  return (
    <ScrollView style={{ flex: 1 }}>
      <Card styles={{ backgroundColor: Colors.white, alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', paddingBottom: 4 }}>
          {storeName}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="thumbs-up-outline" size={24} color={Colors.red} />
          <Text style={{ color: Colors.gray, marginStart: 4 }}>
            {rating}% ({dataComments.length} đánh giá)
          </Text>
        </View>
        <Button
          title="Viết đánh giá"
          onPress={() =>
            navigation.navigate('RatingView', { storeId, nameStore: storeName })
          }
        />
      </Card>
      {dataComments.map((item, index) => {
        return <Comment key={index} data={item} />
      })}
    </ScrollView>
  )
}
