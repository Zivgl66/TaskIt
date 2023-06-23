import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./welcomeBtn.style";
import { COLORS, icons } from "../../../constants";

const WelcomeBtn = ({ request, handlePress }) => {
  return (
    <View style={styles.container(COLORS.lightWhite)}>
      <Text style={styles.contentText(COLORS.black)}>Welcome</Text>
      <Text style={styles.userText(COLORS.black)}>Please Login</Text>
      <TouchableOpacity disabled={!request} onPress={handlePress}>
        <Image style={styles.userImage} source={icons.google} />
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeBtn;
