import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from './firebase'

export const WriteDataFood_StoresByCategory = async (
  id,
  fieldPath = 'categoriesAdmin'
) => {
  let data = []
  const q = query(
    collection(db, 'food_stores'),
    where(fieldPath, 'array-contains', id)
  )
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach(doc => {
    data.push({ id: doc.id, ...doc.data() })
  })
  return data
}
