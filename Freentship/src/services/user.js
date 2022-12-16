import { db } from './firebase'
import {
  updateDoc,
  doc,
  getDoc,
  arrayRemove
} from 'firebase/firestore'

export async function getInfoUser(idUser) {
  const ref = doc(db, 'users', `${idUser}`)
  const docSnap = await getDoc(ref)
  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    console.log('No such document!')
  }
}

export async function ShipperInFo(idShipper) {
  const ref = doc(db, 'users', `${idShipper}`)
  const docSnap = await getDoc(ref)
  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    console.log('No such document!')
  }
}

export async function UpdateOrderHistory(orderId , userId) {
  const washingtonRef = doc(db, 'users', `${userId}`)
  const docSnap = await getDoc(washingtonRef)
  // Set the "capital" field of the city 'DC'
  if (docSnap.exists()) {
    await updateDoc(washingtonRef, {
      orders_history: [...docSnap.data().orders_history, `${orderId}`]
    })
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!')
  }
}

export async function UpdateFavoriteStore(user_id , store_id) {
  const washingtonRef = doc(db, 'users', `${user_id}`)
  const docSnap = await getDoc(washingtonRef)
  // Set the "capital" field of the city 'DC'
  if (docSnap.exists()) {
    await updateDoc(washingtonRef, {
      loveStore: [...docSnap.data().loveStore, `${store_id}`]
    })
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!')
  }
}

export async function DeleteLoveStore(user_id , store_id) {
  const washingtonRef = doc(db, 'users', `${user_id}`)
  // Set the "capital" field of the city 'DC'
  await updateDoc(washingtonRef, {
    loveStore: arrayRemove(`${store_id}`)
  })
}
