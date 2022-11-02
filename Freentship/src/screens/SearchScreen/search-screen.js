import React from 'react'
import { ScrollView } from 'react-native'
import styles from './search-screen.style'
import { ComeBack } from '../../components/Organisms/ComeBack'
import { LocationSearch } from '../../components/Organisms/LocationSearch'
import logo from '../../assets/images/logos/app-user-red.png'
import { CategoryFood } from '../../components/Organisms/CategoryFood'

export const SearchScreen = () => {
  const [title] = React.useState('Thử quán mới')
  const data = [
    { id: '1', title: 'test1', urlImg: logo, number: 25, advertisement: true },
    { id: '2', title: 'test2', urlImg: logo, number: 35, advertisement: false },
    { id: '3', title: 'test3', urlImg: logo, number: 45, advertisement: true },
    { id: '4', title: 'test4', urlImg: logo, number: 55, advertisement: true },
    { id: '5', title: 'test5', urlImg: logo, number: 65, advertisement: true },
    { id: '6', title: 'test6', urlImg: logo, number: 75, advertisement: true },
    { id: '7', title: 'test7', urlImg: logo, number: 85, advertisement: true },
    { id: '8', title: 'test8', urlImg: logo, number: 95, advertisement: false },
    {
      id: '9',
      title:
        'test9aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      urlImg: logo,
      number: 105,
      advertisement: true
    },
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
  return (
    <ScrollView style={styles.container}>
      <ComeBack />
      <LocationSearch />
      <CategoryFood horizontal={false} data={data} title={title} />
    </ScrollView>
  )
}
