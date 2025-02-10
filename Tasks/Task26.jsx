import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Task26(){
    const [text, setText] = useState();
    function noBlock(){
        fetch("https://api.ipify.org/?format=json")
        .then(response => response.json())
        .then(data => setText(data.ip));
    }
    async function withBlock(){
        await fetch("https://api.ipify.org/?format=json")
        .then(response => response.json())
        .then(data => setText(data.ip));
    }
    return(
        <View>
            <Button title="Request Without Blocking" onPress={noBlock} />
            <Button title="Request With Blocking" onPress={withBlock} />
            <Text style={{ fontSize: 40, color: "red" }}>{text}</Text>
        </View>
    );
}