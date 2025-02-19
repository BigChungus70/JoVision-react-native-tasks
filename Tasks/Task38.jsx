import { View } from "react-native";
import FunctionComponent38 from "../Components/FunctionComponent38";
import React, { createContext, useState } from "react";
import { MyContext } from "../Components/MyContext38";


export default function Task38() {
    const [text, setText] = useState("");
    return (
        <MyContext.Provider value={{ text, setText }}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <FunctionComponent38 />
                <FunctionComponent38 />
                <FunctionComponent38 />
                <FunctionComponent38 />
            </View>
        </MyContext.Provider>
    )
}