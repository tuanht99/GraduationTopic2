import React from 'react'
import { ScrollView } from 'react-native'
import styles from './search-screen.style'
import { ComeBack } from '../../Components/Organisms/ComeBack'
import { LocationSearch } from '../../Components/Organisms/LocationSearch'
import { CategoryFood } from '../../Components/Organisms/CategoryFood'
import { limit, orderBy, where, startAt, endAt } from 'firebase/firestore'
import {
    ReadCategories,
    ReadDataFoodStores,
    ReadDataFoodStoresByFood
} from '../../services'
import { useNavigation } from "@react-navigation/native";

export const SearchScreen = ({ route }) => {
    const { id, name, index, location, advanced } = route.params
    const navigation = useNavigation();
    const [data, setData] = React.useState([])
    const [limitNumber, setLimitNumber] = React.useState(3)
    const [keyWord, setKeyWord] = React.useState('')
    const [isCheckAll, setIsCheckAll] = React.useState(false)
    const [categories, setCategories] = React.useState({
        selection: "all",
        status: 1,
    });

    const q = [
        [orderBy('name', 'asc'), limit(limitNumber)],
        [
            orderBy('name', 'asc'),
            startAt(keyWord),
            endAt(keyWord + '~'),
            limit(limitNumber)
        ],
        [
            where('discount', '>', 0),
            orderBy('discount', 'desc'),
            limit(limitNumber)
        ],
        [
            where('status', '==', categories.status),
            where('food_categories', 'array-contains', categories.selection !== "all" ? categories.selection : id),
            orderBy('name', 'asc'),
            startAt(keyWord),
            endAt(keyWord + '~'),
            limit(limitNumber)
        ],
        [
            where('status', '==', categories.status),
            orderBy('name', 'asc'), limit(10), startAt(keyWord),
            endAt(keyWord + '~'), limit(limitNumber + 7)]
    ]
    const firestore = [
        ReadCategories,
        ReadDataFoodStores,
        ReadDataFoodStores,
        ReadDataFoodStoresByFood
    ]

    React.useEffect(() => {
        ;(async () => {
            console.log('a')
            if (advanced) {
                if (categories.selection === "all" || isCheckAll) {
                    setData(await firestore[1](q[4]))
                    setIsCheckAll(false)
                } else {
                    setData(await firestore[1](q[3]))
                }
            } else {
                const data = id
                    ? await firestore[1](q[3])
                    : await firestore[index](q[index])
                setData([...data])
            }
        })()
    }, [keyWord, categories, isCheckAll])

    return (
        <ScrollView style={styles.container}>
            <ComeBack setIsCheckAll={setIsCheckAll} categories={categories} setCategories={setCategories}
                      advanced={advanced}
                      setLimitData={setLimitNumber} navigation={navigation} onChange={setKeyWord}/>
            <LocationSearch address={location.address}/>
            <CategoryFood
                horizontal={false}
                data={data}
                title={name}
                location={location}
                navigation={navigation}
            />
        </ScrollView>
    )
}
