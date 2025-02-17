import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Button, Text, View } from "react-native";

const UseCurrentTime = forwardRef ((props, ref) => {
    const [time, setTime] = useState(new Date().toLocaleString());
    const [mounted, setMounted] = useState(true);
    
    useEffect(() => {
        if (!mounted) {
            return;
        }
        const interval = setInterval(updateTime, 1000);

        console.log("useCurrentTime Mounted");
        return () => {
            clearInterval(interval)
            console.log("useCurrentTime Unmounted");
        };
    }, [mounted]);
    useImperativeHandle(ref, () => ({
        toggleMounted
    }))
    return (
        <View>
            <Text style={{ fontSize: 20, color: "white" ,bottom: 50}}>{time}</Text>
            
        </View>
    );
    function toggleMounted() {
        setMounted(!mounted);
        
    }
    
    function updateTime() {
        setTime(new Date().toLocaleString());
    }
});
export default UseCurrentTime