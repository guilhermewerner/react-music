import React from "react";

import { ScrollView } from "react-native";

import AppBar from "../Components/AppBar";

import MusicRow from "../Components/MusicRow";

export default function Index() {
    return (
        <>
            <AppBar />
            <ScrollView indicatorStyle="white">
                <MusicRow />
                <MusicRow />
                <MusicRow />
                <MusicRow />
                <MusicRow />
                <MusicRow />
                <MusicRow />
                <MusicRow />
                <MusicRow />
                <MusicRow />
                <MusicRow />
                <MusicRow />
            </ScrollView>
        </>
    );
}
