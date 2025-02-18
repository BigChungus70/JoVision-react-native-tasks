import { useEffect, useRef, useState } from "react";
import { Alert, Button, TextInput, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Task35() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [country, setCountry] = useState("");

    useEffect(() => {
        read();
    }, []);
    const save = async () => {
        try {
            const data = {
                name,
                age,
                country,
                time: new Date().toISOString()
            };
            await AsyncStorage.setItem("userData", JSON.stringify(data));
            Alert.alert("Saved");
        }
        catch (e) {
            Alert.alert("Did not save: ", e.message);
        }
    }
    const read = async () => {
        try {
            const storedData = await AsyncStorage.getItem("userData");
            if (storedData) {
                useData(JSON.parse(storedData));
            }
        }
        catch (e) {
            Alert.alert(e);
        }
    }
    function useData(data) {
        const diff = (new Date().getTime() - new Date(data.time).getTime()) / (1000 * 60);

        if (diff <= 1) {
            setName(data.name);
            setAge(data.age);
            setCountry(data.country);
        }

    }

    function Submit() {
        save();
    }


    return (
        <View style={{ backgroundColor: "gray", padding: 10 }}>
            <TextInput
                placeholder="Enter name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                placeholder="Enter age"
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
            />
            <TextInput
                placeholder="Enter country"
                value={country}
                onChangeText={setCountry}
            />
            <Button
                title="Submit"
                onPress={Submit}
            />
           

        </View>
    );
    


}