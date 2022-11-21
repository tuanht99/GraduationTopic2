import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" />
      <Drawer.Screen name="Article"  />
    </Drawer.Navigator>
  );
}