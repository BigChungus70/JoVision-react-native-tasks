import { useRef } from "react";
import { Text, TextInput, View } from "react-native";
import MyFunctionPage24 from "../Components/MyFunctionPage24";

export default function Task24() {
    const component = useRef();

    const changeText = (newText) => {
        if (component.current) {
            component.current.updateText(newText);
        }
    };
    return (
        <View>
            <MyFunctionPage24 ref={component} />
            <TextInput
                placeholder="Type something..."
                style={{ fontSize: 12, color: "white" }}
                onChangeText={changeText}
            />
        </View>
    );
}