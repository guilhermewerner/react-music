import React, { useState } from "react";

import { View } from "react-native";

import { Surface, List, IconButton } from "react-native-paper";

function BottonPlayer({ navigation }) {
    const [playing, SetPlaying] = useState(false);

    const TogglePause = () => {
        playing ? SetPlaying(false) : SetPlaying(true);
    };

    return (
        <Surface style={{
            elevation: 4,
        }}>
            <View>
                <List.Item
                    title="Music"
                    description="Artist"
                    onPress={() => navigation.navigate("Player")}
                    right={props => (
                        <IconButton
                            icon={playing ? "play" : "pause"}
                            color="#aaaaaa"
                            size={27}
                            onPress={() => TogglePause()}
                        />
                    )}
                />
            </View>
        </Surface>
    );
}

export default BottonPlayer;
