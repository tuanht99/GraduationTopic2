import react from 'react'
import { ScrollView, View } from 'react-native'
import styles from './home.style'
import { TopBanner } from '../../components/Organisms/TopBanner'
import { SearchHome } from '../../components/Organisms/SearchHome/search-home'
import { ChooseCategoriesFood } from '../../components/Organisms/ChooseCategoriesFood/'
import { CategoryFood } from '../../components/Organisms/CategoryFood'
import logo from '../../assets/images/logos/app-user-red.png'

export const HomeScreen = () => {
  const titleCategories = [
    'Thử quán mới',
    'đang khuyến mãi',
    'thương hiệu quen thuộc'
  ]
  const data = [
    { id: '1', title: 'test1', urlImg: logo, number: 25, advertisement: true },
    { id: '2', title: 'test2', urlImg: logo, number: 35, advertisement: false },
    { id: '3', title: 'test3', urlImg: logo, number: 45, advertisement: true },
    { id: '4', title: 'test4', urlImg: logo, number: 55, advertisement: true },
    { id: '5', title: 'test5', urlImg: logo, number: 65, advertisement: true },
    { id: '6', title: 'test6', urlImg: logo, number: 75, advertisement: true },
    { id: '7', title: 'test7', urlImg: logo, number: 85, advertisement: true },
    { id: '8', title: 'test8', urlImg: logo, number: 95, advertisement: false },
    { id: '9', title: 'test9', urlImg: logo, number: 105, advertisement: true },
    {
      id: '10',
      title: 'test10',
      urlImg: logo,
      number: 1151,
      advertisement: true
    },
    {
      id: '11',
      title: 'test11',
      urlImg: logo,
      number: 125,
      advertisement: true
    },
    {
      id: '12',
      title: 'test12',
      urlImg: logo,
      number: 135,
      advertisement: false
    }
  ]
  const [isScrolling, setIsScrolling] = react.useState(false)
  const handleSroll = event => {
    const scrollY = event.nativeEvent.contentOffset.y
    if (scrollY > 180) {
      if (!isScrolling) {
        setIsScrolling(true)
      }
    } else {
      setIsScrolling(false)
    }
  }
  return (
    <>
      {isScrolling && (
        <SearchHome
          style={styles.searchHomeAbs}
          styleImg={styles.searchHomeImgAbs}
          flexDirection={true}
        />
      )}
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={handleSroll}
      >
        <TopBanner />
        <SearchHome style={styles.searchHome} />
        <ChooseCategoriesFood />
        <CategoryFood data={data} title={titleCategories[0]} />
        <CategoryFood data={data} title={titleCategories[1]} />
        <CategoryFood data={data} title={titleCategories[2]} />
      </ScrollView>
    </>
  )
}
