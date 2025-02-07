import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native"


const MyFunctionPage = ({ update }) => {

    const [input, setInput] = useState("");

    useEffect(() => {
        console.log("MyFunctionPage has mounted");
        return () => {
            console.log("MyFunctionPage has unmounted");
        }
    })

    return (

        <View style={{ padding: 10, backgroundColor: "gray" }}>
            <TextInput
                placeholder="Type something..."
                value={input}
                onChangeText={(newText) => {
                    setInput(newText);
                    if (update)
                        update(newText);
                }}
                style={{ fontSize: 12, color: "white" }}

            />

        </View>

    );

}

export default MyFunctionPage