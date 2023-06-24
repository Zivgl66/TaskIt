import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    ...SHADOWS.small,
    padding: SIZES.medium,
    width: 300,
    height: 100,
    marginTop: SIZES.small,
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
