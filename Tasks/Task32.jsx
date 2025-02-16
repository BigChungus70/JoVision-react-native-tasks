import { useRef } from "react";
import { Image, View } from "react-native";
import Video from "react-native-video";

export default function Task32() {
    const video =  require("../Resources/Task32/big_guy.mp4");
    const poster = require("../Resources/Task28/(18).jpg");
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Video
                source={{uri: video}}
                style={{ position: "absolute", width: "75%", height: "75%" }}
                poster={{
                    source: poster,
                    style:{ width: "100%", height: "100%",  resizeMode: "contain" }
                }}
                paused={true}
                controls={true}
            >
            </Video>
        </View>
    );
}