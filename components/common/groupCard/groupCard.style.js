import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // flexDirection: "c",
    padding: SIZES.small,
    // borderRadius: SIZES.small,
    backgroundColor: COLORS.lightWhite,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    marginTop: SIZES.big,
    // marginRight: SIZES.xxLarge,
  },
  containerTop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: "black",
    width: "80%",
  },
  groupColor: (color) => ({
    width: SIZES.medium,
    height: SIZES.medium,
    backgroundColor: color,
    borderWidth: 1,
    borderColor: "black",
  }),
  groupTitle: (color) => ({
    textAlign: "center",
    fontFamily: "MExtraBold",
    fontSize: SIZES.big,
    color: color,
  }),
  containerCenter: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: SIZES.small,
  },
  containerBottom: {
    flex: 1,
    justifyContent: "center",
    borderTopWidth: 2,
    borderColor: "black",
    width: "80%",
  },
  addTasksToGroup: {
    alignSelf: "center",
  },
  containerTasks: {
    flex: 1,
    width: "60%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default styles;
