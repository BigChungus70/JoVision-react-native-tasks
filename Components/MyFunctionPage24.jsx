import { forwardRef, useImperativeHandle, useState } from "react";
import { Text, View } from "react-native";

const MyFunctionPage24 = forwardRef((props, ref) => {

    const [text, setText] = useState('');


    useImperativeHandle(ref, () => ({
        updateText(newText) {
            setText(newText);
        }
    }));


    return (
        <View>
            <Text style={{ fontSize: 40, color: "green" }}>{text}</Text>
        </View>
    );


});



export default MyFunctionPage24