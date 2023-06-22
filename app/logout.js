import React, { useEffect } from "react";
import { ActivityIndicator, ToastAndroid } from "react-native";
import { COLORS } from "../constants";
import useAuth from "../hooks/useAuth";

const Logout = () => {
  const { logout } = useAuth();
  useEffect(() => {
    ToastAndroid.showWithGravity(
      "See you soon...",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM
    );
    logout();
  }, []);

  return (
    <ActivityIndicator
      size="large"
      color={COLORS.primary}
      style={{ marginTop: 100 }}
    />
  );
};

export default Logout;
