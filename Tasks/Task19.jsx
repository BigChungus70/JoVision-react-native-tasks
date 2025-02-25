import { Button, View } from "react-native";
import { MyClassPage19 } from "../Components/MyClassPage19";
import { useState } from "react";

export function Task19() {
    const [showComponent, setShowComponent] = useState(false);
    return (
        <View>
            <Button
                title="Show"
                onPress={onPress}
            />
            {showComponent && <MyClassPage19 />}
        </View>
    );
    function onPress() {
        setShowComponent(!showComponent);
    }
}