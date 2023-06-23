import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  taskDetails: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  groupContainer: {
    flex: 1,
  },
  containerGroupBtns: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textGroup: {
    fontSize: SIZES.medium,
  },
  containerTopBtns: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  containerBottomBtns: {
    flex: 1,
    marginTop: SIZES.large,
    marginBottom: SIZES.small,
    height: "100%",
    padding: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default styles;
