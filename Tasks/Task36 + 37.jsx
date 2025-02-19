import { useEffect, useState } from "react";
import { Dimensions, RefreshControl, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function Task36() {
    const [refreshing, setRefreshing] = useState(false);
    const [arrayOfText, setArrayOfText] = useState([]);

    useEffect(() => {
        generateText();
    }, []);

    function onRefresh() {
        setRefreshing(true);
        generateText();

    }


    function generateText() {
        const newTextArray = [];
        for (let i = 1; i <= 100; i++) {
            newTextArray.push(<Text key={i}>{i + ". "}{generateRandomWord(i)}</Text>);
        }
        setArrayOfText(newTextArray);
        setRefreshing(false);
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
        <View
        style={{
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
                alignSelf: "auto",
                margin: 20,
            }}
        >
        <ScrollView
            contentContainerStyle={{ fontSize: 40, backgroundColor: "white" }}
            style={{
                alignSelf: 'center',
                width: Dimensions.get('window').width - 40,
                height: Dimensions.get('window').height - 40,
            }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
        >
            {arrayOfText}

        </ScrollView>
        </View>

    )

}