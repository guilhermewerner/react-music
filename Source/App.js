import React, { useEffect } from "react";

import { View, StatusBar } from "react-native";
import { Provider as ThemeProvider } from "react-native-paper";

import Permissions from "./Utils/Permissions";

import Routes from "./Routes";

import Theme from "./Styles/Theme";

export default function App() {
    useEffect(() => {
        Permissions.Request();
    }, []);

    return (
        <ThemeProvider theme={Theme}>
            <StatusBar backgroundColor={Theme.colors.background} barStyle="light-content" />
            <View style={{ flex: 1, backgroundColor: Theme.colors.background }}>
                <Routes />
            </View>
        </ThemeProvider>
    );
}
