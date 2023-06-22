import { StyleSheet } from "react-native";

import { COLORS, SIZES, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 50,
    height: 50,
    backgroundColor: "transparent",
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
    // ...SHADOWS.small,
    borderRadius: SIZES.small / 0.5,
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 0.5,
  }),
});

export default styles;
