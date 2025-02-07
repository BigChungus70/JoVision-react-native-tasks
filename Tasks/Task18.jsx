import { useState } from "react";
import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";


export function Task18() {
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState("Loading...");
  
    setTimeout(stopLoading, 5000);

    return (
        <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontSize: 40, color: "white", padding: 10}}>{name}</Text>
            <ActivityIndicator size="large" color="red" animating={loading} />
        </SafeAreaView>
    );
    function stopLoading() {
        setLoading(false);
        setName("Ahmad");
    }
    
}
