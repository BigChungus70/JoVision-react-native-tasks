import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "../Redux/store";
export default function FunctionalComponent39(props, ref) {
    const text = useSelector((state) => state.text.value);
    const dispatch = useDispatch();

    function update(newText) {
        dispatch(setText(newText));
    }
    return (
        <View>
            <Text style={{ fontSize: 40, color: "green" }}>{text}</Text>
            <TextInput
                style={{ fontSize: 12, color: "white",backgroundColor: "gray"}}
                placeholder="Type something..."
                onChangeText={update}
                value={text}
            />
        </View>
    );
}