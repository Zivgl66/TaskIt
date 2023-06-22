import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  containerTasks: {
    flex: 1,
  },
  containerAllTasks: {
    flex: 1,
  },
  containerAddTask: {
    flex: 1,
  },
  containerNoTask: {
    marginTop: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noTaskText: {
    fontSize: SIZES.large,
    fontFamily: "MBold",
  },
});

export default styles;
