import { Button, View } from "react-native";
import { useState } from "react";
import MyFunctionPage from "../Components/MyFunctionPage21";

export function Task21() {
    const [showComponent, setShowComponent] = useState(false);

    return (
        <View>
            <Button
                title="Show"
                onPress={onPress}
            />
            {showComponent && <MyFunctionPage/>}
        </View>
    );
    function onPress() {
        setShowComponent(!showComponent);
    }


}