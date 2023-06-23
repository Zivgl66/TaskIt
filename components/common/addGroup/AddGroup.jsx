import React, { useState, useContext } from "react";
import { View, TextInput, ToastAndroid } from "react-native";
import styles from "./addGroup.style";
import { icons } from "../../../constants";
import ScreenHeaderBtn from "../../common/header/ScreenHeaderBtn";
import { setItemInStorageGroup } from "../../../utils/storage_group";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../../../constants/themeContext";
import { COLORS } from "../../../constants";

const AddGroup = () => {
  const [newGroup, setNewGroup] = useState("");
  const [backgroundColor, setBackgroundColor] = useState(COLORS.lightBGC);
  const theme = useContext(themeContext);

  const handleAddGroup = async () => {
    if (newGroup != "") {
      await setItemInStorageGroup(newGroup);
      EventRegister.emit("groups changed");
      setNewGroup("");
    } else {
      ToastAndroid.showWithGravity(
        "Must be at least 1 character long",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM
      );
    }
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <TextInput
        value={newGroup}
        onChangeText={(value) => {
          setNewGroup(value);
        }}
        style={[
          styles.textInput,
          { backgroundColor: backgroundColor, color: theme.text },
        ]}
        placeholderTextColor="#c2c2c2"
        placeholder="Add a Group"
        onFocus={() => setBackgroundColor(COLORS.darkBGC)}
        onBlur={() => setBackgroundColor(COLORS.lightBGC)}
      ></TextInput>

      <ScreenHeaderBtn
        iconUrl={icons.plus}
        dimension="60%"
        handlePress={handleAddGroup}
      />
    </View>
  );
};

export default AddGroup;
