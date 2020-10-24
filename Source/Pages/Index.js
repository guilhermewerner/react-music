import React from "react";

import { ScrollView } from "react-native";

import AppBar from "../Components/AppBar";

import MusicRow from "../Components/MusicRow";

import FileSystem from "react-native-fs";

// file:///storage/emulated/0/Music
// file:///storage/sdcard/Music
// file:///storage/sdcard1/Music

FileSystem.readDir("file:///storage/emulated/0/Music").then((result) => {
    let musics = [];

    result.forEach(file => {
        if (file.isFile() && (file.name.endsWith(".mp3") || file.name.endsWith(".m4a"))) {
            musics.push({
                name: file.name,
                path: file.path,
            });
        }
    });

    console.log(musics);
}).catch((error) => {
    console.log(error.message, error.code);
});

export default function Index() {
    return (
        <>
            <AppBar />
            <ScrollView indicatorStyle="white">
                <MusicRow />
                <MusicRow />
                <MusicRow />
                <MusicRow />
                <MusicRow />
                <MusicRow />
                <MusicRow />
                <MusicRow />
                <MusicRow />
                <MusicRow />
                <MusicRow />
                <MusicRow />
            </ScrollView>
        </>
    );
}
