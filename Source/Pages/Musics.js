import React, { useEffect, useState } from "react";

import { View, SafeAreaView, FlatList, ActivityIndicator, StyleSheet } from "react-native";

import FileSystem from "react-native-fs";

import { Surface, Text, List, useTheme } from "react-native-paper";

import AppBar from "../Components/AppBar";
import BottonPlayer from "../Components/BottonPlayer";
import MusicRow from "../Components/MusicRow";

// file:///storage/emulated/0/Music
// file:///storage/XXXX-XXXX/Music

function Musics({ navigation }) {
    const { colors } = useTheme();

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

    const RenderItem = ({ item }) => (<MusicRow name={item.name} navigation={navigation} />);

    if (loading) {
        return (
            <>
                <AppBar navigation={navigation} />
                <View style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: colors.background
                }}>
                    <ActivityIndicator color="ffffff" size="large" loading={loading} />
                </View>
            </>
        );
    } else {
        return (
            <>
                <AppBar navigation={navigation} />
                <View style={{
                    flex: 1,
                    overflow: "hidden",
                }}>
                    <SafeAreaView style={{
                        flex: 1, backgroundColor: colors.background
                    }}>
                        <FlatList
                            data={musics}
                            renderItem={RenderItem}
                            keyExtractor={item => item.key}
                            removeClippedSubviews={true}
                            initialNumToRender={8}
                        />
                    </SafeAreaView>
                    <BottonPlayer navigation={navigation}/>
                </View>
            </>
        );
    }
}

export default Musics;
