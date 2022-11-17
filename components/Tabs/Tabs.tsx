import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Fontisto, MaterialCommunityIcons, Octicons} from '@expo/vector-icons';

import WorldClockScreen from '../../screens/WorldClockScreen';
import TimerScreen from '../../screens/TimerScreen';
import StopwatchScreen from '../../screens/StopwatchScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="World" component={WorldClockScreen} options={{
          tabBarIcon: () => <Fontisto name="world-o" size={24} color="black" />
        }}/>
        <Tab.Screen name="Stopwatch" component={StopwatchScreen} options={{
          tabBarIcon: () => <Octicons name="stopwatch" size={24} color="black" />
        }}/>
        <Tab.Screen name="Timer" component={TimerScreen}  options={{
          tabBarIcon: () => <MaterialCommunityIcons name="camera-timer" size={24} color="black" />
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
