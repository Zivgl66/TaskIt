import { StyleSheet } from "react-native";

import { SIZES, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 50,
    height: 50,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    borderColor: "black",
    borderWidth: 3,
    borderRadius: SIZES.small / 0.2,
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;
