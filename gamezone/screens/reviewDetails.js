import React from "react";
import {  View, Text, Button } from "react-native";
import { globalStyle } from "../styles/global";

export default function ReviewDetails ({navigation, route}) {

    const {item} = route.params

    const pressHandler = () => {
        navigation.goBack()
    }

    return(
        <View style={globalStyle.container}>
            <Text>{item.title}</Text>
            <Text>{item.body}</Text>
            <Text>{item.rating}</Text>
            <Button title='go back' onPress={pressHandler}/>
        </View>
    )
}
