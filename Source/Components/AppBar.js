import React from "react";

import { Appbar as PaperBar } from "react-native-paper";

function GoBack() {
    console.log("Went back");
}

function HandleSearch() {
    console.log("Search");
}

function HandleMore() {
    console.log("Menu");
}

export default function AppBar() {
    return (
        <React.Fragment>
            <PaperBar>
                <PaperBar.Content title="Music" />
                <PaperBar.Action icon="magnify" onPress={HandleSearch} />
                <PaperBar.Action icon="account-circle" onPress={HandleMore} />
            </PaperBar>
        </React.Fragment>
    );
}
