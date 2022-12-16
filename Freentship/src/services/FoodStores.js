import {
  collection,
  getDocs,
  addDoc,
  query as queryFn,
  where,
  collectionGroup,
  serverTimestamp,
  GeoPoint,
  getDoc,
  doc
} from 'firebase/firestore'
import { db } from './firebase'

const foodStoreRef = collection(db, 'food_stores')
const FOOD = 'foods'

export const ReadDataFoodCategories = async (
  id,
  setData,
  fieldPath = 'food_categories'
) => {
  let data = []
  const q = queryFn(
    collection(db, 'food_stores'),
    where(fieldPath, 'array-contains', '')
  )
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach(doc => {
    data.push({ id: doc.id, ...doc.data() })
  })

  return data
}
export const dataFood = [
  {
    name: 'Kem dưa hấu',
    description: 'Thơm ngon',
    discount: 1,
    image: 'https://minhcaumart.vn/media/com_eshop/products/8936011775724.jpg',
    price: 30000,
    food_store_id: '2a0HmLolzLzkazuwjBu3',
    category_id: ['dkFxBrCSOSoqFwoX1lKr'],
    status: 1
  },
  {
    name: 'Kem dưa hấu',
    description: 'Thơm ngon',
    discount: 0,
    image: 'https://minhcaumart.vn/media/com_eshop/products/8936011775724.jpg',
    price: 30000,
    food_store_id: 'FUwWf0oTm1pXkcMijMRM',
    category_id: ['dkFxBrCSOSoqFwoX1lKr'],
    status: 1
  },
  {
    name: 'Com suong',
    description: 'An ngon laa aaaaaaaaaaaaaaaaaaaaaaaaaaaddsdsadsadasd',
    discount: 1,
    image:
      'https://media.foody.vn/res/g93/924610/prof/s/foody-upload-api-foody-mobile-cowm-que-190530154102.jpg',
    price: 102300,
    food_store_id: 'FUwWf0oTm1pXkcMijMRM',
    category_id: ['dkFxBrCSOSoqFwoX1lKr'],
    status: 0
  }
]
export const WriteDataFood_StoresByCategory = async () => {
  const docRef = await addDoc(foodStoreRef, {
    address: '190 Bàu Cát, Phường 13, Quận Tân Bình, TP. Hồ Chí Minh',
    distance: 25,
    food_categories: ['dkFxBrCSOSoqFwoX1lKr'],
    image:
      'https://tea-3.lozi.vn/v1/images/resized/com-tron-188-quan-tan-binh-ho-chi-minh-1570123262061584062-eatery-avatar-1625915668',
    name: 'CƠM TRỘN HÀN QUỐC 188',
    slogan: 'Không ngon không lấy tiền',
    status: 0,
    created: serverTimestamp(),
    location: new GeoPoint(10.801, 106.666)
  })
  console.log('Document written with ID: ', docRef.id)
}
export const WriteDataFoodInFoodStores = async data => {
  await Promise.all([data.map(async item => await WriteDataFoodGroup(item))])
}
const WriteDataFoodGroup = async data => {
  const docRef = await addDoc(
    collection(foodStoreRef, data.food_store_id, FOOD),
    {
      ...data
    }
  )
  console.log('Document written with ID: ', docRef.id)
}
export const ReadDataFoodStores = async (query, group = false, name = FOOD) => {
  let data = []
  let q = query
    ? group
      ? queryFn(collectionGroup(db, name), ...query)
      : queryFn(foodStoreRef, ...query)
    : false

  const querySnapshot = query ? await getDocs(q) : await getDocs(foodStoreRef)
  querySnapshot.forEach(doc => {
    data.push({ id: doc.id, ...doc.data() })
  })
  return data
}

export async function getStoreinfo(idStore) {
  const ref = doc(db, 'food_stores', `${idStore}`)
  const docSnap = await getDoc(ref)
  if (docSnap.exists()) {
    return {data :docSnap.data() , id: docSnap.id}
  } else {
    console.log('No such document!')
  }
}
