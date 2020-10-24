import React, { useState, useEffect } from "react";

import { View, StatusBar, PermissionsAndroid, Button } from "react-native";
import { Provider as ThemeProvider } from "react-native-paper";

import Index from "./Pages/Index";

import Theme from "./Styles/Theme";

async function RequestStoragePermission() {
    try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("READ_EXTERNAL_STORAGE GRANTED");
        } else {
            console.log("READ_EXTERNAL_STORAGE DENYED");
        }
    } catch (error) {
        console.warn(error);
    }
}

export default function App() {
    useEffect(() => {
        RequestStoragePermission();
    }), [];

    return (
        <ThemeProvider theme={Theme}>
            {/* 00b0ff */}
            <StatusBar backgroundColor={Theme.colors.background} barStyle="light-content" />
            <View style={{ flex: 1, backgroundColor: Theme.colors.background }}>
                <Index />
            </View>
        </ThemeProvider>
    );
}
