import { useEffect } from "react";
import { Text, View } from "react-native"

const MyFunctionPage = () => {
    useEffect(() => {
        console.log("MyFunctionPage has mounted");
        return () => {
            console.log("MyFunctionPage has unmounted");
        }
    })
    return (

        <View>
            <Text style={{fontSize: 90}}>MyFunctionPage</Text>
        </View>

    );
}

export default MyFunctionPage