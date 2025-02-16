import { useEffect, useRef, useState } from "react";
import { Dimensions, Image, Pressable, View } from "react-native";
import Video from "react-native-video";

export default function Task33() {
    const [video, setVideo] =  useState(require("../Resources/Task32/big_guy.mp4"));
    const [poster, setPoster] = useState(require("../Resources/Task28/(18).jpg"));
    const videoRef = useRef(null);
    const [paused, setPaused] = useState(true);
    const [videoLayout, setVideoLayout] = useState({ width: 0, height: 0 });

    useEffect(() => {
        
        if (videoRef.current) {
            if(paused)
            videoRef.current.pause();
            else
            videoRef.current.resume();
        }
        console.log("state changed");
    },[paused]);
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            
            <Pressable
                    onPress={toggleVideo}
                    style={{
                        position: "absolute", width: videoLayout.width, height: videoLayout.height,
                        zIndex:10
                    }}
                />
            <Video
                ref={videoRef}
                source={{uri: video}}
                style={{ position: "absolute", width: "75%", height: "75%" }}
                poster={{
                    source: poster,
                    style:{ width: "100%", height: "100%",  resizeMode: "contain" }
                }}
                controls={false}
                onLayout={onLayoutVideo}
            />
                

            
        </View>
    );
    function onLayoutVideo(event) {
        const { width, height } = event.nativeEvent.layout;
        setVideoLayout({ width, height });
    }
    function toggleVideo() {
        setPaused(!paused);
    }
}