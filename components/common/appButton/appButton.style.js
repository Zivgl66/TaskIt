import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    margin: SIZES.xSmall,
    elevation: SIZES.xxSmall,
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.xSmall,
    paddingVertical: SIZES.xSmall,
    paddingHorizontal: SIZES.small,
  },
  image: {
    width: "10%",
    height: "90%",
    borderRadius: SIZES.small / 0.5,
  },
  text: (textColor) => ({
    fontSize: 18,
    color: textColor,
    fontFamily: "MBold",
    alignSelf: "center",
    textTransform: "uppercase",
  }),
});

export default styles;
