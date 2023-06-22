import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.small,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.white,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    marginTop: SIZES.large,
    // marginRight: SIZES.xxLarge,
  },

  border: (color) => ({
    height: SIZES.xxLarge,
    borderStyle: "solid",
    borderLeftWidth: 3.5,
    marginRight: SIZES.small,
    borderColor: color,
  }),
  groupTitle: (color) => ({
    fontFamily: "MSemiBold",
    fontSize: SIZES.medium,
    color: color,
    marginRight: SIZES.medium,
  }),
});

export default styles;
