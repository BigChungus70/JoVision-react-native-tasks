import { Button, View } from "react-native";
import { MyClassPage } from "../Components/MyClassPage";
import { useState } from "react";

export function Task19() {
    const [showComponent, setShowComponent] = useState(false);
    return (
        <View>
        <Button
            title="Show"
            onPress={onPress}
        />
        {showComponent && <MyClassPage />}
        </View>
    );
    function onPress() {
        setShowComponent(!showComponent);
    }
}