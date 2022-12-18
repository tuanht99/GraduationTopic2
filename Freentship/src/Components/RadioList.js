import { ScrollView } from 'react-native';
import RadioButton from './RadioButton';


export default function RadioList(props) {
  function handleCheck(value) {
    props.setChecked(value);
  }

  return (
    <ScrollView >
      {props.data.map((item, index) => (
        <RadioButton
          key={item.id}
          value={item.id}
          label={item.name}
          checked={props.checked}
          handleCheck={handleCheck}
          icon={item.image}
            index={index}
        />
      ))}
    </ScrollView >
  );
}
