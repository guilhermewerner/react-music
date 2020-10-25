import React, { useContext, useEffect } from "react";

import { View, SafeAreaView, FlatList, ActivityIndicator } from "react-native";

import { useTheme } from "react-native-paper";

import AppBar from "../Components/AppBar";
import BottonPlayer from "../Components/BottonPlayer";
import MusicRow from "../Components/MusicRow";

import Context from "../Context";

// file:///storage/emulated/0/Music
// file:///storage/XXXX-XXXX/Music

function Musics({ navigation }) {
    const { colors } = useTheme();

    const {
        musics, SetMusics,
        loading, SetLoading,
        playing, SetPlaying,
        currentMusic, SetCurrentMusic,
        index, SetIndex,
        Player: TrackPlayer
    } = useContext(Context);

    useEffect(() => {
        TrackPlayer.getCurrentTrack().then((id) => {
            TrackPlayer.getTrack(id).then((music) => {
                SetCurrentMusic(music);
            });
        });
    }, [index]);

    const RenderItem = ({ item }) => (<MusicRow music={item} navigation={navigation} />);

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
                            keyExtractor={item => item.id}
                            removeClippedSubviews={true}
                            initialNumToRender={8}
                        />
                    </SafeAreaView>
                    <BottonPlayer navigation={navigation} music={currentMusic} />
                </View>
            </>
        );
    }
}

export default Musics;
