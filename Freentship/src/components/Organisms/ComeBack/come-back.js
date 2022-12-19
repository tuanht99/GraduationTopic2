import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './come-back.style'
import { AdIcon } from '../../atoms/AdIcon'
import { Colors, FontSize } from '../../../styles'
import logo from '../../../assets/images/logos/app-user-red.png'
import { Search } from '../../molecules/Search'
import SelectList from "../../SelectList";
import { limit, orderBy } from "firebase/firestore";
import { ReadCategories } from "../../../screens/Categories";

export const ComeBack = ({ onPress, onChange, navigation, advanced, setLimitData, setIsCheckAll, categories, setCategories }) => {
    const LIMIT = 10

    const q = [orderBy('name', 'asc'), limit(LIMIT)]
    const [data, setData] = React.useState(null)


  const icon = {
    name: 'arrow-back',
    size: FontSize['2xl'],
    color: Colors.black
  }

    const DataPromotion = data !== null ? {
        defaulValue: "all",
        data: [
            {
                id: "all",
                name: "Tất cả",
                image: "ios-locate",
            },
            ...data
        ],
    } : {
        defaulValue: "all",
        data: [
            {
                id: "all",
                name: "Tất cả",
                image: "ios-locate",
            }
        ],
    };

    const categoriesSelection = [...DataPromotion.data.map((item) => item.id)];
  const handlePress = () => navigation.goBack()

    React.useEffect(() => {
        ReadCategories(q)
            .then(data => {
                setData(data)
                console.log({ data })
            })
            .catch(err => {
                console.log('err', err)
            })
    }, [])

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <AdIcon
          style={styles.icon}
          onPress={handlePress}
          name={icon.name}
          color={icon.color}
          size={icon.size}
        />
        <Image source={logo} style={styles.img} />
      </View>
      <Search
        onChange={onChange}
        onPress={onPress}
        style={styles.searchContainer}
        size={icon.size}
        color={icon.color}
      />
        {advanced && <SelectList
            setIsCheckAll={setIsCheckAll}
            defaultCategorySelected={DataPromotion.defaulValue}
            dataCategoriesSelect={DataPromotion.data}
            categories={categories}
            setCategories={setCategories}
            categoriesSelection={categoriesSelection}
            setLimitData={setLimitData}
        />}
    </View>
  )
}
