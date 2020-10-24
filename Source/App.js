import React from "react";

import { View, StatusBar } from "react-native";
import { Provider as ThemeProvider } from "react-native-paper";

import Index from "./Pages/Index";

import Theme from "./Styles/Theme";

export default function App() {
    return (
        <ThemeProvider theme={Theme}>
            <StatusBar backgroundColor="#c66900" barStyle="light-content" />
            <View style={{ flex: 1, backgroundColor: Theme.colors.background }}>
                <Index />
            </View>
        </ThemeProvider>
    );
}