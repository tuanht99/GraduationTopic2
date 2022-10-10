
import { StyleSheet, View } from 'react-native';
import Router from './src/routes';
import {food} from './src/screens/Store/FoodFirebase'
export default function App() {
  return (
    <View style={styles.container}>
     <Router/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
