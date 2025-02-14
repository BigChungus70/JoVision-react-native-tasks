import { useRef, useState } from "react";
import { Dimensions, FlatList, Image, Pressable, Alert, View, Button, Modal, Text, TextInput, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Task28() {

    const [modalVisible, setModalVisible] = useState(false);
    const flatListRef = useRef(null);
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

    function onPress() {
        setModalVisible(true);
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
    function indexInput(index) {
        setModalVisible(false);
        if (isValidIndex(index)) {
            scrollToIndex(index - 1);
        }
        else {
            Alert.alert("Invalid Index");
        }

    }
    function isValidIndex(index) {
        const parsedIndex = parseInt(index);
        return !isNaN(parsedIndex) && parsedIndex > 0 && parsedIndex <= images.length;
    }
    function scrollToIndex(index) {
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({ index: index - 1 , animated: true });
        }
    }


    return (
        <View>
            <Button
                title="Enter Index"
                onPress={onPress}
            />
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TextInput
                            style={{ fontSize: 12, color: "black" }}
                            placeholderTextColor={"gray"}
                            placeholder="Enter Index"
                            onEndEditing={event => indexInput(event.nativeEvent.text)}
                            inputMode="numeric"
                            autoFocus={true}
                        />
                    </View>
                </View>
            </Modal>
            <FlatList
                ref={flatListRef}
                data={imageObjects}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderImageItem}
                horizontal={true}
                getItemLayout={
                    (data, index) => ({
                        length: width,
                        offset: width * index,
                        index,
                    })
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center'
    }
});