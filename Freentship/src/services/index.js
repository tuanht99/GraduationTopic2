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
  getInfoUser
} from './user'
