import { TextInput, View } from "react-native";
import ClassComponent38 from "./ClassComponent38";
import { useContext } from "react";
import { MyContext } from "../Components/MyContext38";



export default function FunctionComponent38() {
    const { text, setText } = useContext(MyContext);
    return (

        <View>
            <ClassComponent38 />
            <TextInput
                style={{ fontSize: 12, color: "white" }}
                placeholder="Type something..."
                
                onChangeText={setText}
            />
        </View>
    )
}