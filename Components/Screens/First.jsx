import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
export default function First(props) {
    const navigator = useNavigation();
    function handlePress(where) {
        switch (where) {
            case 2: return navigator.navigate('Second'); 
            case 3: return navigator.navigate('Third'); 
            case 4: return navigator.navigate('Fourth'); 
        }
    }
    return (

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 40, color: "green" }}>1</Text>
            <View style={{ flexDirection: 'row', gap: 10, top: 40 }}>
                <Button
                    title="to Second"

                    onPress={() => handlePress(2)}
                />
                <Button
                    title="to Third"

                    onPress={() => handlePress(3)}
                />
                <Button
                    title="to Fourth"

                    onPress={() => handlePress(4)}
                />
            </View>
        </View>

    );
}