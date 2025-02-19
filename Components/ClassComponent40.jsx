import { Component } from "react";
import { Text, TextInput, View } from "react-native";
import { connect } from "react-redux";
import { setText } from "../Redux/store";

class ClassComponent40 extends Component {

    
    render() {
        return (
            <View>
                <Text style={{ fontSize: 40, color: "green" }}>{this.props.text }</Text>
                <TextInput
                    style={{ fontSize: 12, color: "white",backgroundColor: "gray"}}
                    placeholder="Type something..."
                    onChangeText={this.props.setText}
                    value={this.props.text}
                />
            </View>
        );
    }
}
const textToProps = (state) => ({ 
    text: state.text.value
 });
const dispatcher = (dispatch) => ({
    setText: (newText) => dispatch(setText(newText))
});
export default connect(textToProps, dispatcher)(ClassComponent40);