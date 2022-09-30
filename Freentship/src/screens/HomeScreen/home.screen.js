import react from 'react'
import { ScrollView, View } from 'react-native'
import styles from './home.style'
import { TopBanner } from '../../components/Organisms/TopBanner'
import { SearchHome } from '../../components/Organisms/SearchHome/search-home'

export const HomeScreen = () => {
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
      </ScrollView>
    </>
  )
}
