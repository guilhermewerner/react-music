import React, { useState, useEffect } from "react";

import { View, StatusBar, Button } from "react-native";
import { Provider as ThemeProvider } from "react-native-paper";

import Permissions from "./Utils/Permissions";
//import Storage from "./Utils/Storage";

import Index from "./Pages/Index";

import Theme from "./Styles/Theme";

export default function App() {
    useEffect(() => {
        Permissions.Request();
    }, []);

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
