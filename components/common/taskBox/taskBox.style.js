import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.small,
    borderRadius: SIZES.small,
    marginTop: SIZES.large,
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
    textDecorationLine: isCompleted === true ? "line-through" : "none",
    marginRight: SIZES.xxLarge,
  }),
});

export default styles;
