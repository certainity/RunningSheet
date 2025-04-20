import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OfficerProfile from './screens/OfficerProfile';
import AddOfficer from './screens/AddOfficer';
import Home from './screens/Home';
import OfficerDetail from './screens/OfficerDetail';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [officers, setOfficers] = useState([]);

  const StackNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen">
        {props => <Home {...props} officers={officers} />}
      </Stack.Screen>
      <Stack.Screen name="OfficerDetail">
        {props => <OfficerDetail {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" children={() => <StackNavigator />} />
        <Tab.Screen name="Add Officer">
          {() => <AddOfficer officers={officers} setOfficers={setOfficers} />}
        </Tab.Screen>
        <Tab.Screen name="Profile">
          {() => <OfficerProfile officer={officers[0]} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
