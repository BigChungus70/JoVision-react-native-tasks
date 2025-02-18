import { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";

export default function Task36() {

    const [arrayOfText, setArrayOfText] = useState([]);

    useEffect(() => {
        generateText();
    }, []);

    function generateText() {
        const newTextArray = [];
        for (let i = 1; i <= 100; i++) {
            newTextArray.push(<Text key={i}>{i}</Text>);
        }
        setArrayOfText(newTextArray);
    }
    function generateRandomWord(length) {
        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
    return (
        <ScrollView style={{ flex: 1, fontSize: 40, backgroundColor: "white", padding: 10 }}>
            {arrayOfText}
        </ScrollView>
    )

}