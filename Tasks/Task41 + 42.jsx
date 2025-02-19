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

export default function Task41() {

    return (

        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="First"
            >

                <Tab.Screen name="First" component={First} />
                <Tab.Screen name="Second" component={Second} />
                <Tab.Screen name="Third" component={Third} />
                <Tab.Screen name="Fourth" component={Fourth} />

            </Tab.Navigator>
        </NavigationContainer>

    );
}