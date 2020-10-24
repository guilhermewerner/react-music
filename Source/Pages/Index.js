import React from "react";

import AppBar from "../Components/AppBar";

import MusicRow from "../Components/MusicRow";

export default function Index() {
    return (
        <React.Fragment>
            <AppBar />
            <React.Fragment>
                <MusicRow />
            </React.Fragment>
        </React.Fragment>
    );
}
