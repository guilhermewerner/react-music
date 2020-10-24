import React from "react";

import { List } from "react-native-paper";

export default function MusicRow() {
    return (
        <List.Item
            title="Music Name"
            description="Item description"
            left={props => <List.Icon {...props} icon="music" />}
        />
    );
}
