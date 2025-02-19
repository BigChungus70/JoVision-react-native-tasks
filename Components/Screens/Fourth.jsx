import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Fourth(props) {
    return (
        <View style={props.style}>
            <Text style={{ fontSize: 40, color: "green" }}>4</Text>
        </View>
    );
}