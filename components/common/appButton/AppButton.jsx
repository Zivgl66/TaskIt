import React from "react";
import styles from "./appButton.style";
import { TouchableOpacity, Text, Image } from "react-native";

const AppButton = ({ handlePress, title, iconUrl, textColor }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handlePress}
      style={styles.container}
    >
      <Image source={iconUrl} resizeMode="stretch" style={styles.image} />
      <Text style={styles.text(textColor)}> {title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
