import React, { useState, useEffect, SetStateAction } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, KeyboardAvoidingView, Platform, Picker, AsyncStorage, Image } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { MapEvent } from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { RadioButton } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import Header from '../components/Header';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import api from '../services/api';

const Cachorro = require('../raças/Cachorros.json');
const Gato = require('../raças/Gatos.json');

interface CachorroProps {
    id: number;
    name: string;
}

interface GatoProps {
    id: number;
    name: string;
}

const TelaCadastroAni = () => {
    const navigation = useNavigation();
    const [sexo, setSexo] = useState('Macho');
    const [tipo, setTipo] = useState('Cachorro');
    const [raca, setRaca] = useState('Labrador');
    const [imagem, setImagem] = useState('');
    const [descricao, setDescricao] = useState('');
    const [idUsuario, setIdUsuario] = useState(0);
    const [position, setPosition] = useState<[number, number]>([0, 0]);
    const [haspermission, setHaspermission] = useState<SetStateAction<boolean>>();
    const cachorro = Cachorro;
    const gato = Gato;

    useEffect(() => {
        (async () => {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            setHaspermission(status === 'granted');
        })();
    }, []);

    useFocusEffect(() => {
        (async () => {
            const foto = await AsyncStorage.getItem('fotoAnimal');
        
            if (foto) {
                setImagem(foto);
            }

            const id = await AsyncStorage.getItem("idUsuario");
            setIdUsuario(Number(id));
        })();
    });

    useEffect(() => {
        async function loadPosition() {
            const { status } = await Location.requestPermissionsAsync();

            if (status !== 'granted') {
                Alert.alert('Por favor, permita que nós usemos sua localização!');
                return;
            }

            const location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
            const { latitude, longitude } = location.coords;

            setPosition([latitude, longitude]);
        }
        loadPosition();
    }, []);

    if (haspermission === null) {
        return <View />
    }

    if (haspermission === false) {
        return <Text>Acesso Negado!</Text>
    }

    const data = {
        tipo,
        raca,
        sexo,
        descricao,
        latitude: position[0],
        longitude: position[1],
        ativo: 1,
        imagem,
        idUsuario
    }

    function handleCreateNewAnimal() {
        api.post('animal', data);
        alert('Animal Registrado com Sucesso!');
        AsyncStorage.removeItem('fotoAnimal');
        navigation.goBack();
    }

    function handleOpenCamera() {
        navigation.navigate('TelaCamera');
    }

    function handleClearImage() {
        AsyncStorage.removeItem('fotoAnimal');
        setImagem('');
    }

    async function pickImage() {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                base64: true,
                quality: 1,
            });

            if (result.cancelled) {
                return;
            }

            AsyncStorage.removeItem("fotoAnimal");
            setImagem(`data:image/png;base64,${result.base64}`);
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <>
            <Header title="Cadastro do Animal" />
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? 'padding' : undefined}>
                    <View style={styles.viewContainer}>
                        <Text style={styles.textInput}>Tipo de Animal</Text>
                        <Picker style={styles.Picker} selectedValue={tipo} onValueChange={animalopcao => setTipo(animalopcao)}>
                            <Picker.Item value="Cachorro" label="Cachorro" />
                            <Picker.Item value="Gato" label="Gato" />
                        </Picker>
                    </View>
                    <View style={styles.viewContainer}>
                        <Text style={styles.textInput}>Raça</Text>
                        <Picker style={styles.Picker} selectedValue={raca} onValueChange={raçaAnimal => setRaca(raçaAnimal)}>
                            {tipo.match('Cachorro') ?
                                cachorro.map((cachorro: CachorroProps) => {
                                    return (
                                        <Picker.Item key={cachorro.id} value={cachorro.name} label={cachorro.name} />
                                    );
                                }) :
                                gato.map((gato: GatoProps) => {
                                    return (
                                        <Picker.Item key={gato.id} value={gato.name} label={gato.name} />
                                    );
                                })
                            }
                        </Picker>
                    </View>
                    <View style={styles.viewContainer}>
                        <View style={styles.ratioView}>
                            <Text style={{ ...styles.textInput, marginBottom: 15 }}>Sexo</Text>
                            <Text style={{ ...styles.ratioGroupAnswer, marginLeft: '40%' }}>Selecionado: {sexo}</Text>
                        </View>
                        <View style={styles.ratioGroup}>
                            <RadioButton.Group value={sexo} onValueChange={value => setSexo(value)}>
                                <Text style={styles.ratioGroupText}>Macho</Text>
                                <RadioButton value="Macho" />
                                <Text style={styles.ratioGroupText}>Fêmea</Text>
                                <RadioButton value="Fêmea" />
                                <Text style={styles.ratioGroupText}>Indefinido</Text>
                                <RadioButton value="Indefinido" />
                            </RadioButton.Group>
                        </View>
                    </View>
                    <View style={styles.viewContainer}>
                        <Text style={styles.textInput}>Descrição do Animal</Text>
                        <TextInput value={descricao} onChangeText={setDescricao} placeholder="Características do Animal..." style={styles.inputTextArea} />
                    </View>
                    {imagem !== "" ?
                        <>
                            <TouchableOpacity style={styles.buttonDeleteImage} onPress={handleClearImage}>
                                <Feather name="x" size={40} color="red" />
                            </TouchableOpacity>
                            <Image style={styles.imagemContainer} source={{ uri: imagem }} />
                        </>
                        : null
                    }
                    <TouchableOpacity onPress={() => pickImage()} style={{ ...styles.button, backgroundColor: '#7D7B7A', }}>
                        <Text style={styles.buttonText}>Abrir Galeria</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleOpenCamera} style={{ ...styles.button, backgroundColor: '#7D7B7A', }}>
                        <Text style={styles.buttonText}>Abrir Câmera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleCreateNewAnimal}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: 1600,
        backgroundColor: 'rgba(0, 0, 0, .1)'
    },

    imagemContainer: {
        width: '80%',
        height: 400,
        resizeMode: 'cover',
        borderRadius: 50,
        marginBottom: 40,
    },

    viewContainer: {
        width: '100%',
        marginLeft: 80,
        marginTop: 0,
        marginBottom: 50
    },

    textInput: {
        fontSize: 20,
        fontFamily: 'Cinzel_700Bold',
        marginTop: 25
    },

    Picker: {
        width: '80%',
        height: 140,
        justifyContent: 'center',
    },

    inputTextArea: {
        width: '80%',
        height: 100,
        fontSize: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 30,
        marginTop: 5,
        paddingLeft: 5,
        paddingBottom: 55
    },

    button: {
        backgroundColor: '#99b3ff',
        padding: 10,
        borderRadius: 15,
        margin: 10,
        width: 250,
        height: 50
    },

    buttonText: {
        fontFamily: 'Cinzel_700Bold',
        textAlign: 'center',
        paddingTop: 8
    },

    ratioGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        height: 60,
        borderRadius: 8,
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingLeft: 10,

    },

    ratioGroupText: {
        fontSize: 12,
        fontFamily: 'Cinzel_700Bold',
        marginTop: 12
    },

    ratioView: {
        flexDirection: 'row',

    },

    ratioGroupAnswer: {
        fontSize: 14,
        paddingTop: 25
    },

    buttonDeleteImage: {
        zIndex: 1,
        position: "relative",
        top: '6%',
        left: '32%',
        width: 44,
        height: 44,
    }
});

export default TelaCadastroAni;