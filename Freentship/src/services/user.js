import { db } from './firebase'
import {
  collection,
  documentId,
  updateDoc,
  query,
  doc,
  getDoc,
  onSnapshot,
  where,
  arrayRemove
} from 'firebase/firestore'

export async function getFavoriteStore() {
  const washingtonRef = doc(db, 'users', 'kxzmOQS3sVUr2pm9AbLI')

  const unsub = onSnapshot(washingtonRef, doc => {
    if (doc.exists()) {
      console.log('Document data:', doc.data())
      return doc.data().loveStore
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!')
    }
    unsub()
  })
}

// const docSnap = await getDoc(washingtonRef)
// // Set the "capital" field of the city 'DC'
// if (docSnap.exists()) {
//   console.log('Document data:', docSnap.data())
//   return docSnap.data().loveStore
// } else {
//   // doc.data() will be undefined in this case
//   console.log('No such document!')
// }
// }

export async function UpdateFavoriteStore(storeId) {
  const washingtonRef = doc(db, 'users', 'kxzmOQS3sVUr2pm9AbLI')
  const docSnap = await getDoc(washingtonRef)
  // Set the "capital" field of the city 'DC'
  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data().loveStore)
    await updateDoc(washingtonRef, {
      loveStore: [...docSnap.data().loveStore, `${storeId}`]
    })
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!')
  }
}

export async function DeleteLoveStore(storeId) {
  const washingtonRef = doc(db, 'users', 'kxzmOQS3sVUr2pm9AbLI')
  // Set the "capital" field of the city 'DC'
  await updateDoc(washingtonRef, {
    loveStore: arrayRemove(`${storeId}`)
  })
}
