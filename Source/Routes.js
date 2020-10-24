import React from "react";

import { Button, View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Musics from "./Pages/Musics";
import Player from "./Pages/Player";

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Musics" >
                <Stack.Screen name="Musics" component={Musics} options={{ headerShown: false }} />
                <Stack.Screen name="Player" component={Player} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
