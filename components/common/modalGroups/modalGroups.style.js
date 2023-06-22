import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../../../constants";

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
    fontFamily: FONT.bold,
    marginLeft: 50,
  },
  contentContainer: {
    color: "#fff",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  contentText: (color) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.semibold,
    color: color,
  }),
  contentBorder: {
    borderBottomWidth: 2,
    borderColor: "black",
    marginBottom: SIZES.small,
    
  },
});

export default styles;
