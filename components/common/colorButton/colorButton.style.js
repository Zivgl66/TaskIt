import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: (color) => ({
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    margin: 25,
    backgroundColor: color,
    border: "black",
    borderWidth: 1,
  }),
});

export default styles;
