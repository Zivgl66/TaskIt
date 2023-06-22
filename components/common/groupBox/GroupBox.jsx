import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "./groupBox.style";

const GroupBox = ({ group }) => {
  const router = useRouter();
  const handleGroupPress = () => router.push(`/group/${group.id}`);

  return (
    <TouchableOpacity onPress={handleGroupPress}>
      <View style={styles.container}>
        <View style={styles.border(group.color)}></View>
        <Text style={styles.groupTitle(group.color)}>{group.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GroupBox;
