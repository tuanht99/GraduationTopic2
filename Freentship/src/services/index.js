export { db, storage } from './firebase'
export {
  dataFood,
  WriteDataFoodInFoodStores,
  WriteDataFood_StoresByCategory,
  ReadDataFoodStores,
  getStoreinfo
} from './FoodStores'
export { ReadDataFoods, ReadDataFoodStoresByFood } from './Foods'
export { ReadCategories } from '../screens/Categories'
export {
  UpdateFavoriteStore,
  getFavoriteStore,
  DeleteLoveStore,
  getInfoUser,
  ShipperInFo,
  UpdateOrderHistory
} from './user'
export { GetVourcher, UpdateVourcher } from "./Vourchers"
export {
  AddComment, AddHeart, ReadComments, ReadCommentsByStoreId, ReadHearts, ReadHeartsByUserId, UpdateHeart
} from './Comments'

export { getUser } from './Users'