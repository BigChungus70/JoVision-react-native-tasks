import React from "react";
import { Text } from "react-native";
import { MyContext } from "../Components/MyContext38";
export default class ClassComponent38 extends React.Component {

    static contextType = MyContext;

    render() {
        return (
            <Text style={{ fontSize: 40, color: "green" }}> {this.context.text} </Text>
        );
    }
}