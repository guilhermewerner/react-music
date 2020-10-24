import React from "react";

import { View, Text } from "react-native";

import { useTheme } from "react-native-paper";

function HandleMore() {
    console.log("About");
}

function Player({ navigation }) {
    const { colors } = useTheme();

    return (
        <>
            <View style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colors.background
            }}>
                <Text style={{ color: "#aaaaaa" }}>Player</Text>
            </View>
        </>
    );
}

export default Player;
