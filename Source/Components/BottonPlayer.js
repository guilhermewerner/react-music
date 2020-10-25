import React, { useContext } from "react";

import { View } from "react-native";

import { Surface, List, IconButton } from "react-native-paper";

import Context from "../Context";

function BottonPlayer({ navigation, music }) {
    const {
        playing,
        SetPlaying,
        SetIndex,
        Player
    } = useContext(Context);

    const TogglePause = () => {
        if (playing) {
            Player.pause();
            SetPlaying(false);
        } else {
            Player.play();
            SetPlaying(true);
        }
    };

    const Back = () => {
        Player.skipToPrevious();

        Player.getCurrentTrack().then((id) => {
            SetIndex(id);
        });
    };

    const Next = () => {
        Player.skipToNext();

        Player.getCurrentTrack().then((id) => {
            SetIndex(id);
        });
    };

    // onPress={() => navigation.navigate("Player")}

    if (music) {
        return (
            <Surface style={{
                elevation: 4,
            }}>
                <View>
                    <List.Item
                        title={music.title}
                        description="Artist"
                        right={props => (
                            <>
                                <IconButton
                                    icon="skip-previous"
                                    color="#aaaaaa"
                                    size={27}
                                    onPress={() => Back()}
                                />
                                <IconButton
                                    icon={playing ? "pause" : "play"}
                                    color="#aaaaaa"
                                    size={27}
                                    onPress={() => TogglePause()}
                                />
                                <IconButton
                                    icon="skip-next"
                                    color="#aaaaaa"
                                    size={27}
                                    onPress={() => Next()}
                                />
                            </>
                        )}
                    />
                </View>
            </Surface>
        );
    } else {
        return (
            <Surface style={{
                elevation: 4,
            }}>
                <View>
                    <List.Item
                        title=""
                        description=""
                        right={props => (
                            <>
                                <IconButton
                                    icon="skip-previous"
                                    color="#aaaaaa"
                                    size={27}
                                />
                                <IconButton
                                    icon="play"
                                    color="#aaaaaa"
                                    size={27}
                                />
                                <IconButton
                                    icon="skip-next"
                                    color="#aaaaaa"
                                    size={27}
                                />
                            </>
                        )}
                    />
                </View>
            </Surface>
        );
    }
}

export default BottonPlayer;
