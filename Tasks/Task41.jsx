import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import First from "../Components/Screens/First";
import Third from "../Components/Screens/Third";
import Second from "../Components/Screens/Second";
import Fourth from "../Components/Screens/Fourth";
import { StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";



const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 20,
    },
});
export default function Task41() {

    return (

        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="First"
            >

                <Tab.Screen name="First" component={First} options={styles.screen} />
                <Tab.Screen name="Second" component={Second} options={styles.screen} />
                <Tab.Screen name="Third" component={Third} options={styles.screen} />
                <Tab.Screen name="Fourth" component={Fourth} options={styles.screen} />

            </Tab.Navigator>
        </NavigationContainer>

    );
}