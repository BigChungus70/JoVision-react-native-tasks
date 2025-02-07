import { Component } from "react"
import { Text } from "react-native"

export class MyClassPage20 extends Component {
    render() {
        return (
            <Text style={{fontSize: 90,color: "blue"}}>MyClassPage</Text>
        )
        
    }
    componentDidMount() {
        console.log("MyClassPage20 Mounted");
    }
    componentWillUnmount() {
        console.log("MyClassPage20 Unmounted");
    }
}