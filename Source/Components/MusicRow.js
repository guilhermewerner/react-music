import React from "react";

import { List } from "react-native-paper";

function HandlePlay(name) {
    console.log("Play", name);
}

export default function MusicRow(props) {
    return (
        <List.Item
            title={props.name}
            description="Artist"
            onPress={HandlePlay}
            left={props => <List.Icon {...props} icon="music" />}
        />
    );
}
