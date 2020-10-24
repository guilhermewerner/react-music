import React, { PureComponent } from "react";

import { List } from "react-native-paper";

function HandlePlay(name) {
    console.log("Play", name);
}

export default class MusicRow extends PureComponent {
    render() {
        const { name } = this.props;

        return (
            <List.Item
                title={name}
                description="Artist"
                onPress={() => HandlePlay(name)}
                left={props => <List.Icon {...props} icon="music" />}
            />
        );
    }
}
