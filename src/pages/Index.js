import React from 'react';

import AppBar from '../components/AppBar';

import { Text } from 'react-native-paper';
import MusicRow from '../components/MusicRow';

export default function Index() {
    return (
        <React.Fragment>
            <AppBar />
            <React.Fragment>
                <MusicRow />
            </React.Fragment>
        </React.Fragment>
    );
}
