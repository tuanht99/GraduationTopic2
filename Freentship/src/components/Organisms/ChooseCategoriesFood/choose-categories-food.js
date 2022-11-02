import React from 'react'
import { View } from 'react-native'
import styles from './choose-categories-food.style'
import { Greeting } from '../../molecules/Greeting'
import { CategoryHeader } from '../../molecules/CategoryHeader'
import { Products } from '../../molecules/Products'
import logo from '../../../assets/images/logos/app-user-red.png'

export const ChooseCategoriesFood = () => {
  const titleCategories = ['chọn theo thể loại']
  const [logoUser] = React.useState(
    'https://firebasestorage.googleapis.com/v0/b/freentship.appspot.com/o/logo-user.jpeg?alt=media&token=ec570cd2-9f21-4028-b662-6ab2630c8321'
  )
  const [nameUser] = React.useState('Nguyễn Văn A')
  const textTime = ['Chào buổi sáng, ', 'Chào buổi chiều, ', 'Chào buổi tối, ']
  const [logoTitle, setLogoTitle] = React.useState(null)
  let [hours, setHours] = React.useState(0)

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
    const time = setInterval(() => {
      setHours(new Date().getHours())
    }, 1000)

    return () => {
      clearInterval(time)
    }
  }, [])

  function handleSeeAll() {
    console.log('see all')
  }
  const data = [
    { id: '1', title: 'test1', urlImg: logo },
    { id: '2', title: 'test2', urlImg: logo },
    { id: '3', title: 'test3', urlImg: logo },
    { id: '4', title: 'test4', urlImg: logo },
    { id: '5', title: 'test5', urlImg: logo },
    { id: '6', title: 'test6', urlImg: logo },
    { id: '7', title: 'test7', urlImg: logo },
    { id: '8', title: 'test8', urlImg: logo },
    { id: '9', title: 'test9', urlImg: logo },
    { id: '10', title: 'test10', urlImg: logo },
    { id: '11', title: 'test11', urlImg: logo },
    { id: '12', title: 'test12', urlImg: logo },
    { id: '13', title: 'test13', urlImg: logo },
    { id: '14', title: 'test14', urlImg: logo },
    { id: '15', title: 'test15', urlImg: logo },
    { id: '16', title: 'test16', urlImg: logo },
    { id: '17', title: 'test17', urlImg: logo }
  ]

  return (
    <View style={styles.container}>
      <Greeting source={logoUser} label={logoTitle} />
      <CategoryHeader onPress={handleSeeAll}>
        {titleCategories[0]}
      </CategoryHeader>
      <Products data={data} horizontal={true} />
    </View>
  )
}
