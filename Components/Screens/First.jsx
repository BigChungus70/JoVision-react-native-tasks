import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function First(props) {
    return (

            <View style={props.style}>
                <Text style={{ fontSize: 40, color: "green" }}>1</Text>
            </View>

    );
}