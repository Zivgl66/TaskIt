import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.small,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.lightWhite,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    marginTop: SIZES.xxSmall,
    marginRight: SIZES.xxLarge,
  },
  checkbox: {
    marginRight: SIZES.small,
  },
  border: (color) => ({
    height: SIZES.xxLarge,
    borderStyle: "solid",
    borderLeftWidth: 3.5,
    marginRight: SIZES.small,
    borderColor: color,
  }),
  taskTitle: (isCompleted, taskTextSize) => ({
    fontFamily: "MSemiBold",
    fontSize: taskTextSize ? taskTextSize : SIZES.medium,
    color: "black",
    textDecorationLine: isCompleted === true ? "line-through" : "none",
    marginRight: SIZES.medium,
  }),
});

export default styles;