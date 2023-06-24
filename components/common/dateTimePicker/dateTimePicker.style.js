import { StyleSheet } from "react-native";
import { SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginRight: SIZES.small,
  },
  image: {
    width: SIZES.big,
    height: SIZES.big,
  },
  textContainer: {
    alignItems: "center",
  },
  text: {
    fontSize: SIZES.large,
    fontWeight: "bold",
  },
});

export default styles;
