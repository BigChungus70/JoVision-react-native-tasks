import React from "react";
import { Text, View } from "react-native";

export default class MyClassPage25 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
    }
    updateText(newText) {
        this.setState({text: newText});
        
    }
    render() {
        return (
            <View>
                <Text style={{ fontSize: 40, color: "green" }}>{this.state.text}</Text>
            </View>
        );
    }
}