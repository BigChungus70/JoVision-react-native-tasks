import { Component } from "react"
import { TextInput, View } from "react-native";


export class MyClassPage23 extends Component {
    
    constructor(params) {
        super(params);
        this.state = {
          input: ""
        };
    }
    render() {
        
        const { update } = this.props;
        return (

            <View style={{ padding: 10, backgroundColor: "gray" }}>
                <TextInput
                    placeholder="Type something..."
                    value={this.state.input}
                    onChangeText={(newText) => {
                        this.setState({ input: newText});
                        if(update)
                            update(newText);
                    }}
                    style={{ fontSize: 12, color: "white" }}

                />
            </View>

        )

    }
    componentDidMount() {
        console.log("MyClassPage20 Mounted");
    }
    componentWillUnmount() {
        console.log("MyClassPage20 Unmounted");
    }
}