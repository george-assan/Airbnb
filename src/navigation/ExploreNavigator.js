import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearchResultsTabNavigator from './SearchResultsTabNavigator';

const Stack = createStackNavigator();

const HomeTabNavigator = (props) => {
    return (
        <Stack.Navigator
        // screenOptions={{
        //     "tabBarActiveTintColor": "#f15454",
        //     "tabBarStyle": [
        //         {
        //             "display": "flex"
        //         },
        //         null
        //     ],
        //     headerShown: false,

        // }}
        >
            <Stack.Screen
                name={'Welcome'}
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={'SearchResults'}
                component={SearchResultsTabNavigator}
                options={{
                    title: 'Search your destination'
                }}
            />

        </Stack.Navigator>
    );
};

export default HomeTabNavigator;