import { Text, Pressable, View, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function RadioButton(props) {
  return (
    <Pressable onPress={props.handleCheck.bind(this, props.value)} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 2, borderBottomColor: '#cecece', paddingHorizontal: 12 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {props.index === 0 ? <Ionicons name={props.icon} size={40} color='#0e0e0e' /> : <Image source={{uri: props.icon}} style={{ width: 40, height: 40, borderRadius: 15 }} />}
        <Text style={{ fontSize: 16, marginStart: 8 }}>{props.label}</Text>
      </View>
      <Ionicons style={{ paddingVertical: 14 }} name={props.checked === props.value ? 'ios-radio-button-on' : 'ios-radio-button-off'} size={25} color={props.checked === props.value ? '#e94730' : '#0e0e0e'} />
    </Pressable>
  );
}
