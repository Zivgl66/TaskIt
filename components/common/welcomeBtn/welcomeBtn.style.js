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
    marginBottom: SIZES.xLarge,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: SIZES.xBig,
  },
  contentText: {
    fontSize: SIZES.big,
    fontFamily: FONT.bold,
  },
});

export default styles;
