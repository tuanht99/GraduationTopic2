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

export async function UpdateOrderHistory(orderId) {
  const washingtonRef = doc(db, 'users', 'kxzmOQS3sVUr2pm9AbLI')
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

export async function UpdateFavoriteStore(storeId) {
  const washingtonRef = doc(db, 'users', 'kxzmOQS3sVUr2pm9AbLI')
  const docSnap = await getDoc(washingtonRef)
  // Set the "capital" field of the city 'DC'
  if (docSnap.exists()) {
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

export async function GetVourcherUser(idUser) {
  const ref = doc(db, 'users', `${idUser}`)
  const docSnap = await getDoc(ref)
  if (docSnap.exists()) {
    return docSnap.data().vouchers
  } else {
    console.log('No such document!')
  }
}