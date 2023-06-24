import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./TabNavigator";
import ScreenHeaderProfileBtn from "../../components/common/header/screenheaderProfile";
import { FONT, SIZES } from "../../constants";
import Settings from "../settings";
import Logout from "../logout";
import Login from "../login";
import useAuth from "../../hooks/useAuth";
import themeContext from "../../constants/themeContext";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const { user } = useAuth();
  const theme = useContext(themeContext);

  return (
    <Drawer.Navigator
      initialRouteName="TaskIt"
      title="TaskIt"
      headerMode="screen"
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <ScreenHeaderProfileBtn
            url={user?.photoURL}
            dimension="75%"
            handlePress={() => {
              navigation.toggleDrawer();
            }}
          />
        ),
        headerTitleStyle: {
          color: theme.header,
          fontFamily: FONT.extrabold,
          fontSize: SIZES.xLarge,
        },
        headerLeftContainerStyle: { paddingLeft: 15, marginRight: -10 },
      })}
    >
      {user ? (
        <>
          <Drawer.Screen name="TaskIt" component={BottomTabNavigator} />
          <Drawer.Screen name="Settings" component={Settings} />
          <Drawer.Screen name="Logout" component={Logout} />
        </>
      ) : (
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      )}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
