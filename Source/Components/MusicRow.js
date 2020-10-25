import React, { PureComponent } from "react";

import { List } from "react-native-paper";

import Context from "../Context";

export default class MusicRow extends PureComponent {
    render() {
        const { music, navigation } = this.props;

        return (
            <Context.Consumer>
                {({ index, SetIndex, Player }) => (
                    <List.Item
                        title={music.title}
                        description="Artist"
                        onPress={() => {
                            Player.skip(music.id);

                            Player.getCurrentTrack().then((id) => {
                                SetIndex(id);
                            });
                        }}
                        left={props => <List.Icon {...props} icon="music" />}
                    />
                )}
            </Context.Consumer>
        );
    }
}
