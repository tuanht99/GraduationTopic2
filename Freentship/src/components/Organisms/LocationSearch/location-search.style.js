import {StyleSheet} from "react-native";
import {Colors, FontSize, Spacing} from "../../../styles";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Spacing["4"],
    backgroundColor: Colors.white,
    marginTop: Spacing["1"]
  },
  text: {
    fontSize: FontSize.lg,
    color: Colors.gray,
    paddingVertical: Spacing["2"]
  }
})