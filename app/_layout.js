import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    MBold: require("../Assets/fonts/Montserrat-Bold.ttf"),
    MExtraBold: require("../Assets/fonts/Montserrat-ExtraBold.ttf"),
    MLight: require("../Assets/fonts/Montserrat-Light.ttf"),
    MMedium: require("../Assets/fonts/Montserrat-Medium.ttf"),
    MRegular: require("../Assets/fonts/Montserrat-Regular.ttf"),
    MSemiBold: require("../Assets/fonts/Montserrat-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;
  return (
    <Stack onLayout={onLayoutRootView} screenOptions={{ headerShown: false }} />
  );
};

export default Layout;
