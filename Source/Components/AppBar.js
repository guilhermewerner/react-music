import React from "react";

import { Appbar as PaperBar } from "react-native-paper";

function HandleMore() {
    console.log("About");
}

export default function AppBar() {
    return (
        <React.Fragment>
            <PaperBar>
                <PaperBar.Content title="Music" />
                <PaperBar.Action icon="dots-vertical" onPress={HandleMore} />
            </PaperBar>
        </React.Fragment>
    );
}
