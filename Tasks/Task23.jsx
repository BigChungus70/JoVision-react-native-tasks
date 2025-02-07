import { Text, View } from "react-native";
import { useState } from "react";
import { MyClassPage23 } from "../Components/MyClassPage23";


export default function Task23() {
    const [showComponent, setShowComponent] = useState(true);
    const [text, setText] = useState("Enter Text Here");
    return (
        <View>
            <Text style={{ fontSize: 40, color: "green" }}>{text}</Text>
            <MyClassPage23 update={update} />
        </View>
    );
    function update(newText) {
        if (newText !== "")
            setText(newText);

        else
            setText("Enter Text Here");

    }

}