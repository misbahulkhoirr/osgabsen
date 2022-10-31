import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';
import {
  Login,
  Home,
  Attendances,
  ScanScreen,
  Permissions,
  ProfileAccount,
  ProfilDetail,
  SplashScreen,
  ChangePassword,
  History,
} from '../screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomNavigator {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Beranda" component={Home} />
      <Tab.Screen name="Kehadiran" component={Attendances} />
      <Tab.Screen name="Akun" component={ProfileAccount} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Izin" component={Permissions} />
      <Stack.Screen name="ScanScreen" component={ScanScreen} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Profile" component={ProfileAccount} />
      <Stack.Screen name="ProfilDetail" component={ProfilDetail} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="MainApp" component={MainApp} />
    </Stack.Navigator>
  );
};

export default Router;
