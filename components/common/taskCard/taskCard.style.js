import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    ...SHADOWS.medium,
  },
  containerTaskDetails: {
    marginTop: SIZES.xLarge,
  },
  taskDetails: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnTitle: {
    alignSelf: "center",
    marginRight: SIZES.small,
  },
  title: {
    margin: SIZES.medium,
    fontSize: SIZES.large,
    fontFamily: "MBold",
    color: COLORS.black,
    textAlign: "left",
    width: "75%",
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
  containerBtns: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    fontFamily: "MSemiBold",
  },
  taskTitle: {
    fontFamily: "MSemiBold",
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
  button: {
    margin: SIZES.small,
  },
});

export default styles;
