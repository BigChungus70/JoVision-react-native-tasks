import { useState } from "react";
import { Button, Text, View } from "react-native";

export function Task16() {
    const [name, setName] = useState(null);
    return (
        <View>
            {name && (
             <View>
                <Text style={{fontSize: 90}}>{name}</Text>
             </View>   
            )}
            <Button
                title="Show"
                onPress={onPress}
            />
        </View>);
    function onPress() {
       setName(name === null ? "Ahmad" : null);
    }
}
