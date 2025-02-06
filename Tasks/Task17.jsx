import { useState } from "react";
import { Button, Text, View } from "react-native";

export function Task17() {
    const [name, setName] = useState(null);
    const [title, setTitle] = useState("Show");
    return (
        <View>
            {name && (
             <View>
                <Text style={{fontSize: 90}}>{name}</Text>
             </View>   
            )}
            <Button
                title={title}
                onPress={onPress}

            />
        </View>);
    function onPress() {
       setName(name === null ? "Ahmad" : null);
       setTitle(title === "Show" ? "Hide" : "Show");
    }
}
