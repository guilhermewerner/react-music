import React from "react";

import { Appbar as PaperBar } from "react-native-paper";

function HandleMore() {
    console.log("About");
}

function AppBar({ navigation }) {
    return (
        <React.Fragment>
            <PaperBar>
                <PaperBar.Content title="Music" />
                <PaperBar.Action icon="dots-vertical" onPress={HandleMore} />
            </PaperBar>
        </React.Fragment>
    );
}

export default AppBar;
