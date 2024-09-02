import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from "./Homescreen";
import Donationscreen from "./Donation";
import Profilescreen from "./Profile";
import Welcomescreen from "./Welcome";
import Passwordscreen from "./PasswordScreen";


import HomeImage from './assets/homeicon.png';
import DonateImage from './assets/donate.png';
import ProfileImage from './assets/profile.png';

const Tab = createBottomTabNavigator();
const Stack=createStackNavigator();

function stack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcomescreen}/>
      <Stack.Screen name="Password" component={Passwordscreen}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            height: 80, 
            paddingBottom: 10, 
            backgroundColor: 'white',
          },
          tabBarIcon: ({ color, size }) => {
            let imageSource;
            if (route.name === 'Home') {
              imageSource = HomeImage;
            } else if (route.name === 'Donation') {
              imageSource = DonateImage;
            } else if (route.name === 'Profile') {
              imageSource = ProfileImage;
            }
            return (
              <Image
                source={imageSource}
                style={{
                  width: 40,
                  height: 40,
                  tintColor: "black", 
                }}
              />
            );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Homescreen} options={{ headerShown: false }} />
        <Tab.Screen name="Donation" component={Donationscreen} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={Profilescreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}



const styles = StyleSheet.create({
  style: {
    backgroundColor: 'red',
  },
});
