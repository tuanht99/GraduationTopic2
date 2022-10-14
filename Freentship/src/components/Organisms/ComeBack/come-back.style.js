import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../../styles";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Spacing[2],
    backgroundColor: Colors.white
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  icon: {
    padding: Spacing["2"],
  },
  img: {
    flex: .9,
    height: Spacing["6"],
    resizeMode: "contain",
    alignSelf: "center",
  },
  searchContainer: {
    marginVertical: Spacing["4"],
    marginHorizontal: Spacing["2"],
  }
})