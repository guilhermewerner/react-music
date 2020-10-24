import React, { useEffect, useState } from "react";

import { View, SafeAreaView, FlatList, Text, ActivityIndicator } from "react-native";

import { v4 as Uuiv4 } from "uuid";

import AppBar from "../Components/AppBar";

import MusicRow from "../Components/MusicRow";

import FileSystem from "react-native-fs";

// file:///storage/emulated/0/Music
// file:///storage/XXXX-XXXX/Music

function Index() {
    const [musics, SetMusics] = useState([]);
    const [loading, SetLoading] = useState(true);

    useEffect(() => {
        FileSystem.getAllExternalFilesDirs().then((storages) => {
            const INTERNAL_STORAGE = "file:///storage/emulated/0";
            const EXTERNAL_STORAGE = `file://${storages[1].substring(0, 18)}`;  // => file:///storage/XXXX-XXXX

            console.log([INTERNAL_STORAGE, EXTERNAL_STORAGE]);

            let temp = [];

            FileSystem.readDir(INTERNAL_STORAGE + "/Music").then((result) => {
                result.forEach(file => {
                    if (file.isFile() && (file.name.endsWith(".mp3") || file.name.endsWith(".m4a"))) {
                        temp.push({
                            key: (temp.length + 1).toString(),
                            name: file.name,
                            path: file.path,
                        });
                    }
                });

                FileSystem.readDir(EXTERNAL_STORAGE + "/Music").then((result) => {
                    result.forEach(file => {
                        if (file.isFile() && (file.name.endsWith(".mp3") || file.name.endsWith(".m4a"))) {
                            temp.push({
                                key: (temp.length + 1).toString(),
                                name: file.name,
                                path: file.path,
                            });
                        }
                    });

                    SetMusics(temp);
                    SetLoading(false);
                });
            });
        }).catch((error) => {
            console.log(error.message, error.code);
        });
    }, []);

    const RenderItem = ({ item }) => (<MusicRow name={item.name} />);

    if (loading) {
        return (
            <>
                <AppBar />
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator color="ffffff" size="large" loading={loading} />
                </View>
            </>
        );
    } else {
        return (
            <>
                <AppBar />
                <SafeAreaView>
                    <FlatList
                        data={musics}
                        renderItem={RenderItem}
                        keyExtractor={item => item.key}
                        removeClippedSubviews={true}
                        initialNumToRender={8}
                    />
                </SafeAreaView>
            </>
        );
    }
}

export default Index;
