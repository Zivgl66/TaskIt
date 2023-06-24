import React from "react";
import { View, ActivityIndicator } from "react-native";
import WelcomeBtn from "../components/common/welcomeBtn/WelcomeBtn";
import { COLORS } from "../constants";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { request, promptAsync, loading } = useAuth();

  return (
    <View style={{ flex: 1 }}>
      {loading && <ActivityIndicator size="large" color={COLORS.primary} />}
      <WelcomeBtn request={request} handlePress={() => promptAsync()} />
    </View>
  );
};

export default Login;
