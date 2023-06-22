import { StyleSheet } from "react-native";
import { SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  userText: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: SIZES.xBig,
  },
  contentText: {
    fontSize: SIZES.big,
    fontFamily: FONT.bold,
    marginBottom: SIZES.xLarge,
  },
});

export default styles;
