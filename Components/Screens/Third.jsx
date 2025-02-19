import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Third(props) {
    return (
        <View style={props.style}>
            <Text style={{ fontSize: 40, color: "green" }}>3</Text>
        </View>
    );
}