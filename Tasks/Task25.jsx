import { useRef } from "react";
import { TextInput, View } from "react-native";
import MyClassPage25 from "../Components/MyClassPage25";

export default function Task25() {
    const component = useRef();

    const changeText = (newText) => {
        if (component.current) {
            component.current.updateText(newText);
        }
    };
    return (
        <View>
            <MyClassPage25 ref={component} />
            <TextInput
                onChangeText={changeText}
                placeholder="Type something..."

            />

        </View>
    );
}