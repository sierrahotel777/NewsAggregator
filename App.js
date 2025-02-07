import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Title from './Screens/OnBoarding/title';
import Welcome from './Screens/OnBoarding/welcome';
import Login from './Screens/Authentication/login';
import Register from './Screens/Authentication/registration';
import Home from './Screens/Main/home';
import latestNews from './Screens/Main/latest';
import trendingNews from './Screens/Main/trending';
import Bookmarks from './Screens/Main/bookmarks';
import Profile from './Screens/UserProfile/profile';
import updateProfile from './Screens/UserProfile/updateProfile';
import OTP from './Screens/Authentication/otp';
import NewsDetail from './Screens/Main/NewsDetail'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Title" component={Title} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LatestNews" component={latestNews} />
        <Stack.Screen name="TrendingNews" component={trendingNews} />
        <Stack.Screen name="NewsDetail" component={NewsDetail} options={{ headerShown: false }} />
        <Stack.Screen name="Bookmarks" component={Bookmarks} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="UpdateProfile" component={updateProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

