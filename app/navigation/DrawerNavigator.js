import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./TabNavigator";
import MainStackNavigator from "./StackNavigator";
import ScreenHeaderProfileBtn from "../../components/common/header/screenheaderProfile";
import Settings from "../settings";
import Logout from "../logout";
import Login from "../login";
import useAuth from "../../hooks/useAuth";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const { user } = useAuth();

  return (
    <Drawer.Navigator
      initialRouteName="Todos"
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
        headerLeftContainerStyle: { paddingLeft: 15 },
      })}
    >
      {user ? (
        <>
          <Drawer.Screen name="Todos" component={BottomTabNavigator} />
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
