import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: SIZES.medium,
  },
  textInput: {
    width: "85%",
    fontSize: SIZES.medium,
    padding: SIZES.medium,
    fontFamily: "MRegular",
    borderRadius: SIZES.small,
  },
});

export default styles;
