import { Button, View } from "react-native";
import { MyClassPage20 } from "../Components/MyClassPage20";
import { useState } from "react";

export function Task20() {
    const [showComponent, setShowComponent] = useState(false);

    return (
        <View>
            <Button
                title="Show"
                onPress={onPress}
            />
            {showComponent && <MyClassPage20/>}
        </View>
    );
    function onPress() {
        setShowComponent(!showComponent);
    }


}