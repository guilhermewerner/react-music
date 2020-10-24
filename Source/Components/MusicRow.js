import React from "react";

import { List } from "react-native-paper";

function HandlePlay() {
    console.log("Play");
}

export default function MusicRow() {
    return (
        <List.Item
            title="Music"
            description="Artist"
            onPress={HandlePlay}
            left={props => <List.Icon {...props} icon="music" />}
        />
    );
}
