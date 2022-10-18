import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore'
import { db } from './firebase'

export const ReadDataFoods = async (q = []) => {
  const data = []
  const foodRef = collection(db, 'foods')
  const querySnapshot = await getDocs(query(foodRef, ...q))
  querySnapshot.forEach(doc => {
    data.push({ id: doc.id, ...doc.data() })
  })

  return data
}

export const ReadDataFoodStoresByFood = async (queryFood = []) => {
  const foods = await ReadDataFoods(queryFood)
  const data = []
  await Promise.all(
    foods.map(async food => {
      const foodStoreRef = doc(db, 'food_stores', food.food_store_id)
      const docSnap = await getDoc(foodStoreRef)
      if (docSnap.exists()) {
        if (
          data.length === 0 ||
          data.some(item => item.id !== food.food_store_id)
        )
          data.push({ id: docSnap.id, ...docSnap.data() })
      } else {
        console.log('No such document!')
      }
    })
  )
  return data
}
