import React from 'react';
import { View, StatusBar } from 'react-native';

import { Provider as ThemeProvider } from 'react-native-paper';

import Index from './pages/Index';

import Light from './styles/light';
import Dark from './styles/dark';

var Theme = Light;

var userTheme = "Light";

switch (userTheme) {
    case "Light":
        Theme = Light;
        break;
    case "Dark":
        Theme = Dark;
        break;
}

export default function App() {
    return (
        <ThemeProvider theme={Theme}>
            <StatusBar backgroundColor="#2c387e" barStyle="light-content" />
            <View style={{ flex: 1, backgroundColor: Theme.colors.background }}>
                <Index />
            </View>
        </ThemeProvider>
    );
}
