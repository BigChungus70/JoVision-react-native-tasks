import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Second(props) {
    return (
        <View style={props.style}>
            <Text style={{ fontSize: 40, color: "green" }}>2</Text>
        </View>
    );
}