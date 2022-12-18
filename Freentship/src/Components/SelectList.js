import React, { useEffect, useState } from "react";
import { View, Text, Modal, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'
import RadioList from "./RadioList";

const selected1 = {
    fontSize: 16,
    color: "#e94730",
    paddingEnd: 6,
    padding: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#e94730",
};
const unselected1 = {
    fontSize: 16,
    color: "#0e0e0e",
    paddingEnd: 6,
    padding: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#0e0e0e",
};
const selectIcon = { position: "absolute", top: -10, right: -10 };
const unselected = { flexDirection: "row", alignItems: "center" };

export default function SelectList({
                                       categories,
                                       setCategories,
                                       dataCategoriesSelect,
                                       defaultCategorySelected,
                                       setLimitData,
                                       setIsCheckAll
                                   }) {
    const txtTitle = "Sắp xếp kết quả";
    const txtButton = "Hoàn tất";
    const [modalVisible, setModalVisible] = useState(false);
    const [isStatus, setIsStatus] = useState(true);
    const [checked, setChecked] = useState(defaultCategorySelected);
    const [selectedValue, setSelectedValue] = useState(checked);
    const textSelected = dataCategoriesSelect.find(
        (item) => item.id === selectedValue
    );

    function handleModal() {
        setChecked(selectedValue);
        setModalVisible(!modalVisible);
    }

    function handleSubmit() {
        setModalVisible(!modalVisible);
        setSelectedValue(checked);
    }

    function handleSelectStatus() {
        console.log({ isStatus })
        setLimitData(3);
        setCategories({ ...categories, status: categories.status === 1 ? 0 : 1 });
        setIsStatus(!isStatus);
    }

    useEffect(() => {
      setLimitData(3);
        textSelected.id !== 'all' ? setCategories({ ...categories, selection: textSelected.id }) : setIsCheckAll(true);
    }, [textSelected]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    marginBottom: 14,
                    position: "relative",
                }}
            >
                <Pressable
                    style={{
                        padding: 8,
                        borderWidth: 1,
                        borderColor: "#e94730",
                        borderRadius: 5,
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                    onPress={handleModal}
                >
                    <Text style={{ fontSize: 16, color: "#e94730", marginEnd: 4 }}>
                        {textSelected.name}
                    </Text>
                    <Ionicons name="chevron-down" size={20} color="#e94730"/>
                </Pressable>
                <Pressable style={unselected} onPress={handleSelectStatus}>
                    <Text style={isStatus ? selected1 : unselected1}>Đóng mở cửa</Text>
                    {isStatus && (
                        <Ionicons
                            style={selectIcon}
                            name="close-circle"
                            size={20}
                            color="#0e0e0e"
                        />
                    )}
                </Pressable>
            </View>
            <Modal visible={modalVisible} animationType="fade" transparent={true}>
                <View
                    style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
                >
                    <Pressable
                        onPress={() => setModalVisible(!modalVisible)}
                        style={{
                            flex: 0.4,
                            justifyContent: "flex-end",
                            backgroundColor: "black",
                            opacity: 0.6,
                            width: "100%",
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: "black",
                                width: "100%",
                                height: 10,
                                transform: [{ translateY: 10 }],
                            }}
                        ></View>
                    </Pressable>
                    <View
                        style={{
                            flex: 0.6,
                            backgroundColor: "#cecece",
                            width: "100%",
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                        }}
                    >
                        <View
                            style={{
                                flex: 0.1,
                                flexDirection: "row",
                                alignItems: "center",
                                backgroundColor: "#fefefe",
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                            }}
                        >
                            <Pressable
                                style={{
                                    flex: 0.1,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "100%",
                                }}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Ionicons name="ios-close" size={25} color="#000"/>
                            </Pressable>
                            <View
                                style={{
                                    flex: 0.9,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontWeight: "bold",
                                        transform: [{ translateX: -20 }],
                                    }}
                                >
                                    {txtTitle}
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                flex: 0.7,
                                marginVertical: 8,
                                backgroundColor: "#fefefe",
                            }}
                        >
                            <View>
                                <RadioList
                                    data={dataCategoriesSelect}
                                    checked={checked}
                                    setChecked={setChecked}
                                />
                            </View>
                        </View>
                        <View style={{ flex: 0.2, backgroundColor: "#fefefe" }}>
                            <View
                                style={{
                                    flex: 0.2,
                                    width: "100%",
                                    borderBottomWidth: 2,
                                    borderColor: "#cecece",
                                }}
                            ></View>
                            <Pressable
                                onPress={handleSubmit}
                                style={{
                                    flex: 0.8,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "red",
                                    marginHorizontal: 28,
                                    marginVertical: 14,
                                    borderRadius: 8,
                                }}
                            >
                                <Text style={{ color: "#fef", fontSize: 16 }}>{txtButton}</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
