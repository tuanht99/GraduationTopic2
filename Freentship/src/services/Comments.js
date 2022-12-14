import {
    addDoc,
    collection,
    collectionGroup,
    doc,
    getDocs,
    query,
    serverTimestamp,
    updateDoc,
    where
} from "firebase/firestore";
import { db } from "./firebase";

export const AddComment = async (data = {}) => {
    data.created_at = serverTimestamp();
    await addDoc(collection(db, "comments"), data);
}
export const AddHeart = async (id, data = {}) => {
    const data1 = await addDoc(collection(collection(db, 'comments'), id, "hearts"), data);
    return data1.id;
}

export const ReadComments = async (q = [], group = false) => {
    const data = []
    const foodRef = group ? collectionGroup(db, 'comments') : collection(db, 'comments')
    const querySnapshot = await getDocs(query(foodRef, ...q))
    querySnapshot.forEach(doc => {
        data.push({ id: doc.id, ...doc.data() })
    })

    return data
}

export const ReadCommentsByStoreId = async (storeId) => {
    const data = []
    const q = [where("storeId", "==", storeId)]
    await ReadComments(q).then((res) => {
        data.push(...res)
    }).catch((err) => {
        console.log(err)
    })
    return data
}

export const ReadHearts = async (q = [], group = false, path = 'hearts') => {
    const data = []
    const foodRef = group ? collectionGroup(db, path) : collection(db, path)
    const querySnapshot = await getDocs(query(foodRef, ...q))
    querySnapshot.forEach(doc => {
        if (group) {
            const docRef = doc.ref;
            const parentCollectionRef = docRef.parent;
            const immediateParentDocumentRef = parentCollectionRef.parent;
            // const grandParentDocumentRef = immediateParentDocumentRef.parent.parent;
            data.push({ id: doc.id, ...doc.data(), commentId: immediateParentDocumentRef.id })
        } else {
            data.push({ id: doc.id, ...doc.data() })
        }
    })

    return data
}

export const ReadHeartsByUserId = async (userId) => {
    let data = []
    const q = [where("userId", "==", userId)]
    await ReadHearts(q, true).then((res) => {
        data.push(...res)
    }).catch((err) => {
        console.log(err)
    })
    return data
}

export const UpdateHeart = async (commentID, id, data = {}) => {
    await updateDoc(doc(db, 'comments', commentID, 'hearts', id), data);
}
