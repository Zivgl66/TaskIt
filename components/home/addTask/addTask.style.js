import { StyleSheet } from "react-native";
import { SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: (backgroundColor, shadowColor) => ({
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: backgroundColor,

    marginHorizontal: SIZES.medium,
  }),
  textInput: (color) => ({
    width: "85%",
    fontSize: SIZES.medium,
    padding: SIZES.medium,
    fontFamily: "MRegular",
    borderRadius: SIZES.small,
    color: color,
  }),
});

export default styles;
