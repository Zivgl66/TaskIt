import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./welcomeBtn.style";
import { icons } from "../../../constants";

const WelcomeBtn = ({ request, handlePress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.contentText}>Welcome</Text>
      <Text style={styles.userText}>Please Login</Text>
      <TouchableOpacity disabled={!request} onPress={handlePress}>
        <Image style={styles.userImage} source={icons.google} />
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeBtn;
