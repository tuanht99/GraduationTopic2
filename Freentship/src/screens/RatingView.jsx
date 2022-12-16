import React from 'react';
import { Image, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign, Ionicons } from "@expo/vector-icons";
import MonAnImg from "../assets/images/monAn1.png";
import { Colors } from "../styles";
import { Card } from "../Components/molecules/Card";
import { ImagePicker } from 'expo-image-multiple-picker'
import { getDownloadURL, ref as refStorage, uploadBytesResumable } from "firebase/storage";

import imageCamera from "../assets/4001465.png";
import { BackgroundImage } from "react-native-elements/dist/config";
import { AddComment, storage } from "../services";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";


export const RatingView = ({ route }) => {
    const navigation = useNavigation();
    const PATH_IMAGE = 'comments/';
    const avataStore = MonAnImg;
    const { storeId, nameStore } = route.params;
    const user = useSelector(state => state.user)
    const [isEmotion, setIsEmotion] = React.useState(true);
    const [comment, setComment] = React.useState('');
    const [images, setImages] = React.useState([]);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="black"/>
                </TouchableOpacity>
            ),
            title: 'Đánh giá cho cửa hàng',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontSize: 15
            }
        })
    }, [navigation])

    async function handleSendComment() {
        const path_image = await test(images);

        AddComment({ storeId, comment, isEmotion, path_image, user }).then(() => {
            console.log('them comment thanh cong');
        }).catch(err => {
            console.log(err);
        })

        navigation.goBack();

    }

    async function test(item) {
        const path_image = [];

        const b = images.map(async (item) => {
            const c = await uploadImage(item.filename, item.uri)
            const d = await getDownloadURL(c);
            path_image.push(d);
        })

        await Promise.all(b)
        return path_image;
    }

    const uploadImage = async (fileName, uri) => {
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            xhr.onload = function () {
                resolve(xhr.response)
            }
            xhr.onerror = function () {
                reject(new TypeError('Network request failed'))
            }
            xhr.responseType = 'blob'
            xhr.open('GET', uri, true)

            xhr.send(null)
        })
        const ref = refStorage(storage, `${PATH_IMAGE}${fileName}`)
        const uploadTask = await uploadBytesResumable(ref, blob)
        return uploadTask.ref;
    }

    function PickerImage() {
        const [open, setOpen] = React.useState(false);
        const WhatsAppHeader = (props) => {
            return (
                <View
                    style={{
                        paddingHorizontal: 10,
                        paddingVertical: 12,
                        width: '100%',
                        backgroundColor: '#252f39',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    {props.view === 'album' && (
                        <>
                            <Text style={{ color: 'white', fontSize: 20 }}>Chọn một album</Text>
                            <TouchableOpacity onPress={() => {
                                setOpen(false)
                            }}>
                                <Text style={{ color: 'white', fontSize: 20 }}>Hủy</Text>
                            </TouchableOpacity>
                        </>
                    )}
                    {props.view === 'gallery' && (
                        <>
                            <TouchableOpacity onPress={props.goToAlbum}>
                                <Ionicons name='arrow-back' size={30} color='#EDF8F5'/>
                            </TouchableOpacity>
                            {props.imagesPicked > 0 ? (
                                <>
                                    <Text style={{ color: 'white', fontSize: 20 }}>
                                        {props.imagesPicked} selected
                                    </Text>
                                    <TouchableOpacity onPress={props.save}>
                                        <Text style={{ color: 'white', fontSize: 16 }}>OK</Text>
                                    </TouchableOpacity>
                                </>
                            ) : (
                                <TouchableOpacity onPress={() => {
                                    setOpen(false)
                                }}>
                                    <Text style={{ color: 'white', fontSize: 20 }}>Hủy</Text>
                                </TouchableOpacity>
                            )}
                        </>
                    )}
                </View>
            )
        }
        const WhatsAppAlbum = (props) => {
            return (
                <TouchableOpacity
                    onPress={() => props.goToGallery(props.album)}
                    style={{ flex: 1, height: 200 }}
                >
                    <Image
                        source={{ uri: props.thumb.uri }}
                        style={{ width: '100%', height: '100%' }}
                        blurRadius={10}
                    ></Image>
                    <View
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0,0,0,0.2)',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <View style={{ padding: 5, flexDirection: 'row' }}>
                            <Ionicons name='folder' color='white' size={16}/>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 16,
                                    marginLeft: 5,
                                }}
                            >
                                {props.album.title}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
        const WhatsAppCheck = () => {
            return (
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0,0,0,0.4)',
                    }}
                >
                    <Ionicons color='white' name='checkmark' size={52}/>
                </View>
            )
        }

        const Item = ({ uri }) => {
            function removeImage() {
                setImages(images.filter((image) => image.uri !== uri))
            }

            return (
                <TouchableOpacity onPress={removeImage}>
                    <Image
                        source={{ uri: uri }}
                        style={{
                            width: 100, height: 100, margin: 5, borderRadius: 10
                        }}
                    ></Image>
                </TouchableOpacity>
            )
        }
        const renderItem = ({ key, item }) => (
            <Item key={key} uri={item.uri}/>
        );

        if (open) {
            return (
                <Modal>
                    <ImagePicker
                        theme={{
                            header: WhatsAppHeader,
                            album: WhatsAppAlbum,
                            check: WhatsAppCheck
                        }}
                        onSave={(assets) => {
                            setImages(prevState => {
                                return [...prevState, ...assets]
                            })
                            setOpen(false)
                        }}
                        onCancel={() => console.log('no permissions or user go back')}
                        multiple
                        limit={6 - images.length}
                    />
                </Modal>
            )
        }
        return (
            <Card>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {images.map((image, index) => renderItem({ key: index, item: image }))}
                    {images.length < 6 && (
                        <TouchableOpacity onPress={() => {
                            setOpen(true)
                        }}>
                            <BackgroundImage source={imageCamera}
                                             style={{
                                                 width: 100,
                                                 height: 100,
                                                 margin: 5,
                                                 borderRadius: 10,
                                                 backgroundColor: Colors.red
                                             }}/>
                        </TouchableOpacity>
                    )}
                </View>
            </Card>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: .9 }}>
                <Card styles={{ flexDirection: 'row' }}>
                    <Image source={avataStore} style={{
                        width: 100,
                        height: 100,
                        borderRadius: 4
                    }}/>
                    <Text numberOfLines={4} style={{
                        flex: 1,
                        fontWeight: 'bold',
                        fontSize: 18,
                        marginStart: 8
                    }}>{nameStore}</Text>
                </Card>
                <Card styles={{
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                    <TouchableOpacity onPress={() => {
                        setIsEmotion(true)
                    }} style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Ionicons name="happy-outline" size={24} color={isEmotion ? Colors.green : Colors.black}/>
                        <Text style={{
                            marginStart: 4,
                            color: isEmotion ? Colors.green : Colors.black,
                            fontSize: 14
                        }}>Hài lòng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setIsEmotion(false)
                    }} style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Ionicons name="sad-outline" size={24} color={!isEmotion ? Colors.purple : Colors.black}/>
                        <Text style={{
                            marginStart: 4,
                            color: !isEmotion ? Colors.purple : Colors.black,
                            fontSize: 14
                        }}>Không hài lòng</Text>
                    </TouchableOpacity>
                </Card>
                <View>
                    <Card>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 8
                        }}>
                            <Text style={{ fontWeight: 'bold' }}>Viết một đánh giá</Text>
                            <Text style={{ color: Colors.gray }}>{comment.length}/300</Text>
                        </View>
                        <TextInput
                            onChangeText={setComment}
                            multiline={true}
                            numberOfLines={10}
                            placeholder="Bạn có thích món ăn ở đây không?"
                            maxLength={300}
                            style={{
                                height: 120,
                                textAlignVertical: 'top',
                                color: Colors.green
                            }}/>
                    </Card>
                </View>
                <PickerImage/>
            </ScrollView>
            <View style={{
                flex: .1,
                backgroundColor: Colors.white,
                padding: 12,
                paddingTop: 18,
                shadowOffset: {
                    width: 0,
                    height: -3
                },
                shadowColor: '#ccc',
                shadowOpacity: 0.58,
                shadowRadius: 16.00,
                elevation: 4
            }}>
                <TouchableOpacity onPress={handleSendComment}>
                    <Text style={{
                        backgroundColor: Colors.red,
                        color: Colors.white,
                        fontSize: 16,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        paddingVertical: 12,
                        borderRadius: 5
                    }}>Đánh giá</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}