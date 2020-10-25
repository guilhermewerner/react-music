import React, { useState, useEffect } from "react";

import { View, StatusBar } from "react-native";
import { Provider as ThemeProvider } from "react-native-paper";

import TrackPlayer from "react-native-track-player";

import Permissions from "./Utils/Permissions";
import Storage from "./Utils/Storage";

import Context from "./Context";

import Routes from "./Routes";

import Theme from "./Styles/Theme";

TrackPlayer.setupPlayer().then(() => {
    TrackPlayer.registerPlaybackService(() => require("./Services/Player"));
});

export default function App() {
    const [musics, SetMusics] = useState([]);
    const [loading, SetLoading] = useState(true);
    const [playing, SetPlaying] = useState(false);
    const [index, SetIndex] = useState(1);
    const [currentMusic, SetCurrentMusic] = useState({});

    useEffect(() => {
        Permissions.Request();

        Storage.GetSdCardPath().then((sdCardPath) => {
            const INTERNAL_STORAGE = "file:///storage/emulated/0";
            const EXTERNAL_STORAGE = sdCardPath;

            console.log([INTERNAL_STORAGE, EXTERNAL_STORAGE]);

            let temp = [];

            Storage.ReadDirectory(INTERNAL_STORAGE + "/Music").then((internalFiles) => {
                temp = Storage.FilterMusics(temp, internalFiles);

                Storage.ReadDirectory(EXTERNAL_STORAGE + "/Music").then((externalFiles) => {
                    temp = Storage.FilterMusics(temp, externalFiles);

                    SetMusics(temp);
                    SetLoading(false);

                    TrackPlayer.add(temp).then(() => {
                        SetCurrentMusic(temp[0]);
                    });
                });
            });
        }).catch((error) => {
            console.warn(error);
        });
    }, []);

    const value = {
        musics, SetMusics,
        loading, SetLoading,
        playing, SetPlaying,
        currentMusic, SetCurrentMusic,
        index, SetIndex,
        Player: TrackPlayer
    };

    return (
        <Context.Provider value={value}>
            <ThemeProvider theme={Theme}>
                <StatusBar backgroundColor={Theme.colors.background} barStyle="light-content" />
                <View style={{ flex: 1, backgroundColor: Theme.colors.background }}>
                    <Routes queue={{ loading, musics }} />
                </View>
            </ThemeProvider>
        </Context.Provider>
    );
}
