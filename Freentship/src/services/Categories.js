import { collection, getDocs, query } from 'firebase/firestore'
import { db } from './firebase'

export const ReadCategories = async (q = []) => {
  const data = []
  const foodRef = collection(db, 'categories')
  const querySnapshot = await getDocs(query(foodRef, ...q))
  querySnapshot.forEach(doc => {
    data.push({ id: doc.id, ...doc.data() })
  })

  return data
}
