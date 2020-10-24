import React, { useEffect } from "react";

import { ScrollView } from "react-native";

import AppBar from "../Components/AppBar";

import MusicRow from "../Components/MusicRow";

import FileSystem from "react-native-fs";

// file:///storage/emulated/0/Music
// file:///storage/XXXX-XXXX/Music

let musics = [];

FileSystem.getAllExternalFilesDirs().then((storages) => {
    const INTERNAL_STORAGE = "file:///storage/emulated/0";
    const EXTERNAL_STORAGE = `file://${storages[1].substring(0, 18)}`;  // => file:///storage/XXXX-XXXX

    console.log([INTERNAL_STORAGE, EXTERNAL_STORAGE]);

    FileSystem.readDir(INTERNAL_STORAGE + "/Music").then((result) => {
        result.forEach(file => {
            if (file.isFile() && (file.name.endsWith(".mp3") || file.name.endsWith(".m4a"))) {
                musics.push({
                    name: file.name,
                    path: file.path,
                });
            }
        });

        FileSystem.readDir(EXTERNAL_STORAGE + "/Music").then((result) => {
            result.forEach(file => {
                if (file.isFile() && (file.name.endsWith(".mp3") || file.name.endsWith(".m4a"))) {
                    musics.push({
                        name: file.name,
                        path: file.path,
                    });
                }
            });

            console.log(musics);
        });
    });
}).catch((error) => {
    console.log(error.message, error.code);
});

export default function Index() {
    return (
        <>
            <AppBar />
            <ScrollView indicatorStyle="white">
                {
                    musics.map((music, index) => {
                        return (
                            <MusicRow name={music.name} key={index} />
                        );
                    })
                }
            </ScrollView>
        </>
    );
}
