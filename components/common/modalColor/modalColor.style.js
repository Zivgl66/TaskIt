import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    height: "30%",
    width: "80%",
    top: "35%",
    backgroundColor: COLORS.lightBlue,
    borderRadius: 25,
    position: "absolute",
    bottom: 0,
    marginLeft: "10%",
    borderWidth: 1,
    border: "black",
    // opacity: 0.5,
  },
  blurContainer: {
    flex: 1,

    borderRadius: 25,
  },
  textContainer: {
    height: "25%",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "black",
    fontSize: SIZES.large,
    marginLeft: 50,
  },
  contentContainer: {
    color: "#fff",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
});

export default styles;
