import React from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SIZES, icons } from "../../../constants";
import styles from "./dateTimePicker.style";

const DateTimePicker = ({ date, setDate }) => {
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const pickADate = () => {
    showMode("time");
    showMode("date");
  };
  const options = {
    weekday: undefined,
    year: undefined,
    day: "numeric",
    month: "long",
  };

  return (
    <View style={{ marginLeft: SIZES.big }}>
      <TouchableOpacity onPress={pickADate} style={styles.container}>
        <Image source={icons.alarm} style={styles.image} />
     
        <Text style={styles.text}>
          {date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
           ,
        </Text>
        <Text style={styles.text}>
          {date.toLocaleDateString("en-US", options)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DateTimePicker;
