import { Button, Text, View } from "react-native";
import UseCurrentTime from "../Components/UseCurrentTime";
import { useEffect, useRef, useState } from "react";

export default function Task34() {
    const timeRef = useRef(null);
    const [mountText, setMountText] = useState("unmount");
    function toggleMounted() {
        if (timeRef.current) {
            timeRef.current.toggleMounted();
            changeText();
        }

    }
    return (

        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <UseCurrentTime
                ref={timeRef}
            />
            <Button
                title={mountText}
                onPress={toggleMounted}
            />
        </View>

    );
    function changeText() {
        setMountText(mountText === "mount" ? "unmount" : "mount");
    }

}