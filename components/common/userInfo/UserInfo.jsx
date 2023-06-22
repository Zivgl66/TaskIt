import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./userInfo.style";

const UserInfo = ({ user }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.contentText}>Welcome</Text>
      <Image style={styles.userImage} source={{ uri: user.picture }} />
      <Text style={styles.userText}>{user.name}</Text>
    </View>
  );
};

export default UserInfo;
