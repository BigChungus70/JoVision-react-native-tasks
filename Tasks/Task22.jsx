import { Text, View } from "react-native";
import { useState } from "react";
import MyFunctionPage from "../Components/MyFunctionPage21";

export default function Task22() {
    const [showComponent, setShowComponent] = useState(true);
    const [text, setText] = useState("Enter Text Here");
    return (
        <View>
            <Text style={{ fontSize: 40, color: "green" }}>{text}</Text>
            <MyFunctionPage update={(newText) => update(newText)} />
        </View>
    );
    function update(newText) {
        { newText != '' && setText(newText) };
        { newText == '' && setText("Enter Text Here") };
    }

}