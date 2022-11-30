import React from "react";
import { View, Text, Button, Alert } from "react-native";
import styles from "./LocationScreen.style";
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LocationScreen = ({ navigation }) => {
  const [location, setLocation] = React.useState(null);
  console.log('location', location)
  const [errorMsg, setErrorMsg] = React.useState(null);
  const [isCheckedLocation, setIsCheckedLocation] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      } else {
        try {
          let locationTemp = await Location.getCurrentPositionAsync({});
          const locationAddress = await Location.reverseGeocodeAsync({
            latitude: locationTemp.coords.latitude,
            longitude: locationTemp.coords.longitude
          })
          await setLocation({
            latitude: locationTemp.coords.latitude,
            longitude: locationTemp.coords.longitude,
            address: `${locationAddress[0].streetNumber}, ${locationAddress[0].street}, ${locationAddress[0].subregion}, ${locationAddress[0].region}, ${locationAddress[0].country}`
          })
        } catch (e) {
          if (!location) {
            Alert.alert('Thông báo', 'Bạn vui lòng cho phép truy cập vị trí của bạn để sài ứng dụng', [
              {
                text: 'Đồng ý',
                style: 'cancel',
              },
            ]);
          }
        }
      }
    })();
  }, [isCheckedLocation]);

  React.useEffect(() => {
    if (location != null) {
      const storeData = async (location) => {
        try {
          const jsonValue = JSON.stringify(location)
          console.log("recentnenenenen", location);
          await AsyncStorage.setItem('@recent_location', jsonValue)
        } catch (e) {
          // saving error
        }
      }
      storeData()
      navigation.navigate('HomeNavigator', { location: location });
    }
  }, [location])

  let text = "Vui lòng cho phép truy cập vị trí";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button title={'Lấy vị trí'} onPress={() => setIsCheckedLocation(!isCheckedLocation)} />
    </View>
  );
}