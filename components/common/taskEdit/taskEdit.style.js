import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    ...SHADOWS.small,
    padding: SIZES.medium,
    height: 100,
  },
  containerBtn: {
    flex: 1,
    flexDirection: "row",
    marginTop: SIZES.medium,
    justifyContent: "space-around",
    alignItems: "center",
  },
  textInput: {
    fontFamily: "MSemiBold",
    marginLeft: SIZES.small,
    fontSize: SIZES.medium,
  },
});

export default styles;
