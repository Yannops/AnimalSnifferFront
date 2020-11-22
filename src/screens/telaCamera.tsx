import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Image, AsyncStorage } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const TelaCamera = () => {
    const camRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [capturedPhoto, setCapturedPhoto] = useState('');
    const [haspermission, setHaspermission] = useState(null);
    const navigation = useNavigation();


    const toogleChangeCamera = () => {
        setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
    };

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHaspermission(status === 'granted');
        })();
    }, []);

    if (haspermission === null) {
        return <View />
    }

    if (haspermission === false) {
        return <Text>Acesso Negado!</Text>
    }

    async function takePicture() {
        if (camRef) {
            const result = await camRef.current.takePictureAsync({
                base64: true,
                quality: 1
            });
            setCapturedPhoto(`data:image/png;base64,${result.base64}`);
            setOpen(true);
        }
    }

    function handlePutPhotoOnRegister() {
        AsyncStorage.setItem('fotoAnimal', capturedPhoto);
        setOpen(false);
        navigation.goBack();
    }

    function deleteImage() {
        setCapturedPhoto('');
        setOpen(false);
    }

    function goBack() {
        navigation.goBack();
    }

    
    return (
        <>
            <Camera style={{ flex: 1 }} type={type} ref={camRef} >
                <Text style={{ marginTop: 70, textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#fff' }}>Tire uma foto clara do animal</Text>
                <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={goBack}></TouchableOpacity>
                    <TouchableOpacity style={{ position: "absolute", bottom: 20, left: 20 }} onPress={toogleChangeCamera}>
                        <MaterialCommunityIcons name="camera-switch" color="#fff" size={35} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={takePicture}>
                    <FontAwesome name="camera" size={40} color="white"></FontAwesome>
                </TouchableOpacity>
                {capturedPhoto !== '' ?
                    <Modal animationType="slide" transparent={false} visible={open}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <Image style={{ width: '100%', height: '100%', borderRadius: 20 }} source={{ uri: capturedPhoto }} />
                            <TouchableOpacity style={{ position: 'absolute', left: 70, top: 750 }} onPress={handlePutPhotoOnRegister}>
                                <FontAwesome name="check" size={50} color="green"></FontAwesome>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ position: 'absolute', left: 300, top: 750 }} onPress={deleteImage}>
                                <FontAwesome name="close" size={50} color="red"></FontAwesome>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                    : null
                }
            </Camera>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, .9)',
        justifyContent: 'center',
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 60,
    },
});

export default TelaCamera;