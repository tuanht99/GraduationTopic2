import React from "react";
import {View, Image} from "react-native";
import styles from "./come-back.style";
import {AdIcon} from "../../atoms/AdIcon";
import {Colors, FontSize} from "../../../styles";
import logo from "../../../assets/images/logos/app-user-red.png";
import {Search} from "../../molecules/Search";

export const ComeBack = () => {
  const icon = { name: 'arrow-back', size: FontSize["2xl"], color: Colors.black }
  const handlePress = () => console.log('ComeBack')
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <AdIcon style={styles.icon} onPress={handlePress} name={icon.name} color={icon.color} size={icon.size} />
        <Image source={logo} style={styles.img} />
      </View>
      <Search style={styles.searchContainer} size={icon.size} color={icon.color} />
    </View>
  );
}
