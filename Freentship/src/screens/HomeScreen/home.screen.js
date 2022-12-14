import React, { useState } from 'react'
import { ScrollView, View, TouchableOpacity, Text } from 'react-native'
import styles from './home.style'
import { TopBanner } from '../../Components/Organisms/TopBanner'
import { SearchHome } from '../../Components/Organisms/SearchHome/search-home'
import { ChooseCategoriesFood } from '../../Components/Organisms/ChooseCategoriesFood/'
import { CategoryFood } from '../../Components/Organisms/CategoryFood'
import { ReadDataFoodStores, ReadDataFoodStoresByFood } from '../../services'
import { orderBy, where, limit } from 'firebase/firestore'
import { CategoryHeader } from '../../Components/molecules/CategoryHeader'
import { useSelector } from "react-redux";


export const HomeScreen = ({ navigation }) => {
  const location = useSelector(state => state.locUser)
  
  const LIMIT = 3
  const categories = [
    'Thử quán mới',
    'Đang khuyến mãi',
    'Thương hiệu quen thuộc'
  ]
  const [isScrolling, setIsScrolling] = React.useState(false)
  const [data, setData] = React.useState(null)
  const q = [
    [orderBy('created', 'desc'), limit(LIMIT)],
    [where('discount', '>', 0), orderBy('discount', 'desc'), limit(LIMIT)]
  ]
  const firestore = [ReadDataFoodStores, ReadDataFoodStores]



  React.useEffect(() => {
    ; (async () => {
      let data
      data = []
      await Promise.all(
        firestore.map(async (item, index) => {
          const dataTemp = await item(q[index])
          data.push([...dataTemp])
        })
      )
      setData(data)
    })()
  }, [])
  console.log('data', data)

  const handleScroll = event => {
    const scrollY = event.nativeEvent.contentOffset.y
    if (scrollY > 180) {
      if (!isScrolling) {
        setIsScrolling(true)
      }
    } else {
      setIsScrolling(false)
    }
  }
  const ItemLoader = (item, index) => {
    return (
      <View key={index} style={styles.itemLoader}>
        <View style={styles.itemLoaderImg} />
        <View style={styles.itemLoaderName} />
        <View style={styles.itemLoaderDistance}>
          <View style={styles.itemLoaderDistanceIcon} />
          <View style={styles.itemLoaderDistanceText} />
        </View>
      </View>
    )
  }
  const Loader = (item, index) => {
    const dataTemp = [1, 2, 3, 4, 5]
    return (
      <View key={index} style={styles.container}>
        <View style={styles.container}>
          <CategoryHeader isCheck={true}>{categories[index]}</CategoryHeader>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {dataTemp.map(ItemLoader)}
        </ScrollView>
      </View>
    )
  }

  return (
    <>
      {isScrolling && (
        <SearchHome
            location={location}
            style={styles.searchHomeAbs}
          styleImg={styles.searchHomeImgAbs}
          flexDirection={true}
        />
      )}
      {location !== undefined && <ScrollView
        onScrollToTop={() => console.log('onScrollToTop')}
        style={styles.container}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={handleScroll}
      >
        <TopBanner location={location} />
        <SearchHome location={location} style={styles.searchHome} />
        <ChooseCategoriesFood location={location} navigation={navigation} />
        {data !== null
          ? data.map((item, index) => {
            return (
              <View key={index}>
                <CategoryFood
                  indexFirestore={index + 1}
                  firestore={firestore[index]}
                  location={location}
                  title={categories[index]}
                  data={item}
                  navigation={navigation}
                />
              </View>
            )
          })
          : firestore.map(Loader)}


      </ScrollView>}

    </>
  )
}