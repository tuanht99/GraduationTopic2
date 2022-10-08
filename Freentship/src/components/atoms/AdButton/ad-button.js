import React, {Children} from "react";
import {TouchableOpacity, Text} from "react-native";

export const AdButton = ({children, containerStyle, textStyle, onPress}) => {
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  )
}