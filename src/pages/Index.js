import React from 'react';

import AppBar from '../components/AppBar';

import { Text } from 'react-native-paper';

export default function Index() {
    return (
        <React.Fragment>
            <AppBar />
            <React.Fragment>
                <Text>Hello world!</Text>
            </React.Fragment>
        </React.Fragment>
    );
}
