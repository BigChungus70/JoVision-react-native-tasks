import { Dimensions, FlatList, Image, Pressable, Alert } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Task28() {


    const images = [
        require("../Resources/Task28/(1).jpg"),
        require("../Resources/Task28/(2).jpg"),
        require("../Resources/Task28/(3).jpg"),
        require("../Resources/Task28/(4).jpg"),
        require("../Resources/Task28/(5).jpg"),
        require("../Resources/Task28/(6).jpg"),
        require("../Resources/Task28/(7).jpg"),
        require("../Resources/Task28/(8).jpg"),
        require("../Resources/Task28/(9).jpg"),
        require("../Resources/Task28/(10).jpg"),
        require("../Resources/Task28/(11).jpg"),
        require("../Resources/Task28/(12).jpg"),
        require("../Resources/Task28/(13).jpg"),
        require("../Resources/Task28/(14).jpg"),
        require("../Resources/Task28/(15).jpg"),
        require("../Resources/Task28/(16).jpg"),
        require("../Resources/Task28/(17).jpg"),
        require("../Resources/Task28/(18).jpg"),
        require("../Resources/Task28/(19).jpg"),
        require("../Resources/Task28/(20).jpg"),
        require("../Resources/Task28/(21).jpg"),
        require("../Resources/Task28/(22).jpg"),
    ];

    const imageObjects = images.map((source, index) => ({
        id: index + 1,
        source,
    }));



    function handleImagePress(id) {
        Alert.alert("Image Index:" + id);
    }


    function renderImageItem({ item }) {
        return (
            <Pressable onPress={() => handleImagePress(item.id)}>
                <Image
                    source={item.source}
                    style={{ width: width, height: height, resizeMode: "contain" }}
                />
            </Pressable>
        );
    }


    return (
        <FlatList
            data={imageObjects}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderImageItem}
            horizontal={true}
        />
    );
}

