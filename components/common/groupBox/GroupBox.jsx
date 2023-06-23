import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "./groupBox.style";
import themeContext from "../../../constants/themeContext";

const GroupBox = ({ group }) => {
  const router = useRouter();
  const handleGroupPress = () => router.push(`/group/${group.id}`);
  const theme = useContext(themeContext);

  return (
    <TouchableOpacity onPress={handleGroupPress}>
      <View
        style={[
          styles.container,
          { backgroundColor: theme?.semiBackgroundColor },
        ]}
      >
        <View style={styles.border(group.color)}></View>
        <Text style={styles.groupTitle(group.color)}>{group.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GroupBox;
