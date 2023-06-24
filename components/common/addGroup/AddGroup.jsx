import React, { useState, useContext, useEffect } from "react";
import { View, TextInput, ToastAndroid } from "react-native";
import styles from "./addGroup.style";
import { icons } from "../../../constants";
import ScreenHeaderBtn from "../../common/header/ScreenHeaderBtn";
import { setItemInStorageGroup } from "../../../utils/storage_group";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../../../constants/themeContext";

const AddGroup = () => {
  const [newGroup, setNewGroup] = useState("");
  const [backgroundColor, setBackgroundColor] = useState(null);
  const theme = useContext(themeContext);
  useEffect(() => {
    setBackgroundColor(theme.inputBlur);
  }, [theme]);
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
        placeholderTextColor={theme.text}
        placeholder="Add a Group"
        onFocus={() => setBackgroundColor(theme.inputFocus)}
        onBlur={() => setBackgroundColor(theme.inputBlur)}
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
