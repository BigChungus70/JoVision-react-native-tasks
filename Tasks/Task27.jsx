import { useState } from "react";
import { Alert, Button, Dimensions, Image, Text, View } from "react-native";

const { width, height } = Dimensions.get('window');
export default function Task27() {
    const images = [
        require('../Resources/2024-12-28@4-59-50.jpg'),
        require('../Resources/2025-1-27@21-29-8.jpg'),
        require('../Resources/2025-2-9@23-9-22.jpg')
    ];
    const [choice, setChoice] = useState(null);

    function onPress() {
        Alert.alert(
            "Choose an Image to display",
            "",
            [
                { text: "1", style: "cancel", onPress: () => setChoice(images[0]) },
                { text: "2", style: "cancel", onPress: () => setChoice(images[1]) },
                { text: "3", style: "cancel", onPress: () => setChoice(images[2]) }
            ]
        );
    }
    return (
        <View>
            <Button title="Choose an Image" onPress={onPress} />
            {choice && (
                <Image source={choice} style={{ width: width, height: height, resizeMode: 'contain' }} />
            )}
        </View>
    );
}