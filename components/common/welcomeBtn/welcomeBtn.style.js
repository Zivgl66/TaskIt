import { StyleSheet } from "react-native";
import { SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: (color) => ({
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color,
  }),
  userText: (color) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    marginBottom: SIZES.xLarge,
    color: color,
  }),
  userImage: {
    width: 50,
    height: 50,
    borderRadius: SIZES.xBig,
  },
  contentText: (color) => ({
    fontSize: SIZES.big,
    fontFamily: FONT.bold,
    color: color,
  }),
});

export default styles;
