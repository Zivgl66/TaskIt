import React from "react";
import { TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderProfileBtn = ({ url, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={{ uri: url }}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderProfileBtn;
