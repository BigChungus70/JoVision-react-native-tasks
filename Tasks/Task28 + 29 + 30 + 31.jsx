import { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, Image, Pressable, Alert, View, Button, Modal, Text, TextInput, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Task28() {

    const [modalVisible, setModalVisible] = useState(false);
    const flatListRef = useRef(null);
    const [images, setImages] = useState([
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
    ]);
    const xIcon = require("../Resources/Task28/x.png");
    const rIcon = require("../Resources/Task28/r.png");

    const imageObjects = images.map((source, index) => ({
        id: index + 1,
        source,
    }));
    function handleRemoveImage(id) {
        setImages(prevImages => prevImages.filter((_, index) => index !== id - 1));
    }

    function handleDuplicateImage(id) {
        setImages(prevImages => insertAfter(prevImages,id));
    }
    function insertAfter(prevImages, id) {

        const newImages = [...prevImages];
        newImages.splice(id, 0, newImages[id - 1]);
        return newImages;

    }

    function handleImagePress(id) {
        Alert.alert("Image Index:" + id);
    }

    function onPress() {
        setModalVisible(true);
    }
    function renderImageItem({ item }) {
        return (
            <View style={{ alignItems: "center" }}>
                <View style={{ position: "relative" }}>
                    <Pressable
                        style={{
                            position: "absolute",
                            top: 5,
                            right: 5,
                            zIndex: 10,
                        }}
                        onPress={() => handleRemoveImage(item.id)}
                    >
                        <Image
                            source={xIcon}
                            style={{ width: 50, height: 50 }}
                        />
                    </Pressable>
                    <Pressable
                        style={{
                            position: "absolute",
                            top: 5,
                            left: 5,
                            zIndex: 10,
                        }}
                        onPress={() => handleDuplicateImage(item.id)}
                    >
                        <Image
                            source={rIcon}
                            style={{ width: 50, height: 50 }}
                        />
                    </Pressable>
                    <Pressable onPress={() => handleImagePress(item.id)}>

                        <Image
                            source={item.source}
                            style={{ width: width, height: height * 0.5, resizeMode: "contain" }}
                        />
                    </Pressable>

                </View>
            </View>
        );
    }
    function indexInput(index) {
        setModalVisible(false);
        if (isValidIndex(index)) {
            scrollToIndex(index);
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
            flatListRef.current.scrollToIndex({ index: index - 1, animated: true });
        }
    }


    return (
        <View>
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
                zIndex={1000}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TextInput
                            style={{ fontSize: 12, color: "black" }}
                            placeholderTextColor={"gray"}
                            placeholder={`Enter Index between 1 and ${images.length}`}
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
            <Button
                title="Enter Index"
                onPress={onPress}
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