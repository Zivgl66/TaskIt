import { StyleSheet } from "react-native";
import { SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    margin: SIZES.large,
  },
  image: {
    width: SIZES.big,
    height: SIZES.big,
    // width: SIZES.xxLarge,
    // height: SIZES.xxLarge,
    // marginRight: SIZES.xxSmall,
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
