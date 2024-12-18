import React from "react";
import {  View, Text } from "react-native";
import { globalStyle } from "../styles/global";

export default function Home () {
    return(
        <View style={globalStyle.container}>
            <Text style={globalStyle.titleText}>Home Screen</Text>
        </View>
    )
}