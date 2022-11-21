import React from 'react'
import { View, ScrollView } from 'react-native'
import styles from './choose-categories-food.style'
import { Greeting } from '../../molecules/Greeting'
import { CategoryHeader } from '../../molecules/CategoryHeader'
import { Products } from '../../molecules/Products'
import { limit, orderBy } from 'firebase/firestore'
import { ReadCategories } from '../../../services'

export const ChooseCategoriesFood = ({ navigation, location }) => {
  const LIMIT = 10
  const titleCategories = ['chọn theo thể loại', 'các thể loại']
  const q = [orderBy('name', 'asc'), limit(LIMIT)]
  const [logoUser, setLogoUser] = React.useState(
    'https://firebasestorage.googleapis.com/v0/b/freentship.appspot.com/o/categories%2F1.png?alt=media&token=ab7e1422-03bf-469c-80da-aa181b4a486c'
  )
  const [nameUser, setNameUser] = React.useState('Nguyễn Văn A')
  const textTime = ['Chào buổi sáng, ', 'Chào buổi chiều, ', 'Chào buổi tối, ']
  const [logoTitle, setLogoTitle] = React.useState(null)
  const [hours, setHours] = React.useState(new Date().getHours())
  const [minutes, setMinutes] = React.useState(60 - new Date().getMinutes())
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    const time = setInterval(() => {
      setMinutes(60 - new Date().getMinutes())
      setHours(new Date().getHours())
    }, minutes * 60 * 1000)

    return () => {
      clearInterval(time)
    }
  }, [])
  React.useEffect(() => {
    if (hours >= 5 && hours < 12) {
      setLogoTitle(textTime[0] + nameUser)
    } else if (hours >= 12 && hours < 18) {
      setLogoTitle(textTime[1] + nameUser)
    } else {
      setLogoTitle(textTime[2] + nameUser)
    }
  }, [hours])

  React.useEffect(() => {
    ReadCategories(q)
      .then(data => {
        setData(data)
      })
      .catch(err => {
        console.log('err', err)
      })
  }, [])

  function handleSeeAll() {
    console.log('see all')
    // navigation.navigate('SearchScreen', {
    //   name: titleCategories[1],
    //   index: 0,
    //   location: location
    // })
  }
  const ItemLoader = (item, index) => {
    return (
      <View key={index} style={styles.itemLoader}>
        <View style={styles.itemLoaderImg} />
        <View style={styles.itemLoaderName} />
      </View>
    )
  }
  const Loader = () => {
    const data = [1, 2, 3, 4, 5]
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        {data.map(ItemLoader)}
      </ScrollView>
    )
  }

  return (
    <View style={styles.container}>
      <Greeting source={logoUser} label={logoTitle} />
      <CategoryHeader
        isCheck={true}
        // seeAll={data !== null && true}
        onPress={handleSeeAll}
      >
        {titleCategories[0]}
      </CategoryHeader>
      {data !== null ? (
        <Products
          location={location}
          isCategories={true}
          navigation={navigation}
          indexFirestore={0}
          data={data}
          horizontal={true}
          distance={false}
        />
      ) : (
        <Loader />
      )}
    </View>
  )
}
