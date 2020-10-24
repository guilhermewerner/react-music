import React, { useEffect, useState } from "react";

import { View, SafeAreaView, FlatList, ActivityIndicator } from "react-native";

import { useTheme } from "react-native-paper";

import AppBar from "../Components/AppBar";
import BottonPlayer from "../Components/BottonPlayer";
import MusicRow from "../Components/MusicRow";

import Storage from "../Utils/Storage";

// file:///storage/emulated/0/Music
// file:///storage/XXXX-XXXX/Music

function Musics({ navigation }) {
    const { colors } = useTheme();

    const [musics, SetMusics] = useState([]);
    const [loading, SetLoading] = useState(true);

    useEffect(() => {
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
                });
            });
        }).catch((error) => {
            console.warn(error);
        });
        /*
        Storage.GetMusics().then((musics) => {
            SetMusics(musics);
            SetLoading(false);
        }).catch((error) => {
            console.log(error);
        });
        */
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
                    <BottonPlayer navigation={navigation} />
                </View>
            </>
        );
    }
}

export default Musics;
