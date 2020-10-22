import React, { useState, useEffect, SetStateAction } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, KeyboardAvoidingView, Platform, Picker, AsyncStorage, Image } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { RadioButton } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
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
    const [ratioValue, setRatioValue] = useState('Masculino');
    const [animalopcao, setAnimalOpcao] = useState(0);
    const [raçaAnimal, setRaçaAnimal] = useState(0);
    const [fotoAnimal, setFotoAnimal] = useState("");
    const [haspermission, setHaspermission] = useState<SetStateAction<boolean>>();
    const cachorro = Cachorro;
    const gato = Gato;

    useEffect(() => {
        (async () => {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            setHaspermission(status === 'granted');
        })();
    }, []);

    console.log(fotoAnimal);
    useFocusEffect(() => {
        (async () => {
            const foto = await AsyncStorage.getItem('fotoAnimal');
            if (foto) {
                setFotoAnimal(foto);
            }
        })();
    });

    if (haspermission === null) {
        return <View />
    }

    if (haspermission === false) {
        return <Text>Acesso Negado!</Text>
    }

    function handleNavigateBack() {
        AsyncStorage.clear();
        navigation.goBack();
    }

    function handleOpenCamera() {
        navigation.navigate('TelaCamera');
    }

    function handleClearImage() {
        AsyncStorage.clear();
        setFotoAnimal('');
        console.log(fotoAnimal);
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
            AsyncStorage.removeItem("fotoAnimal");
            setFotoAnimal(result.base64);
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? 'padding' : undefined}>
                    <View style={styles.viewContainer}>
                        <Text style={styles.textInput}>Tipo de Animal</Text>
                        <Picker style={styles.Picker} selectedValue={animalopcao} onValueChange={animalopcao => setAnimalOpcao(animalopcao)}>
                            <Picker.Item value="0" label="Cão" />
                            <Picker.Item value="1" label="Gato" />
                        </Picker>
                    </View>
                    <View style={styles.viewContainer}>
                        <Text style={styles.textInput}>Raça</Text>
                        <Picker style={styles.Picker} selectedValue={raçaAnimal} onValueChange={raçaAnimal => setRaçaAnimal(raçaAnimal)}>
                            {animalopcao == 0 ?
                                cachorro.map((cachorro: CachorroProps) => {
                                    return (
                                        <Picker.Item key={cachorro.id} value={cachorro.id} label={cachorro.name} />
                                    );
                                }) :
                                gato.map((gato: GatoProps) => {
                                    return (
                                        <Picker.Item key={gato.id} value={gato.id} label={gato.name} />
                                    );
                                })
                            }
                        </Picker>
                    </View>
                    <View style={styles.viewContainer}>
                        <View style={styles.ratioView}>
                            <Text style={{ ...styles.textInput, marginBottom: 15 }}>Sexo</Text>
                            <Text style={{ ...styles.ratioGroupAnswer, marginLeft: '30%' }}>Selecionado: {ratioValue}</Text>
                        </View>
                        <View style={styles.ratioGroup}>
                            <RadioButton.Group value={ratioValue} onValueChange={value => setRatioValue(value)}>
                                <Text style={styles.ratioGroupText}>Masculino</Text>
                                <RadioButton value="Masculino" />
                                <Text style={styles.ratioGroupText}>Feminino</Text>
                                <RadioButton value="Feminino" />
                                <Text style={styles.ratioGroupText}>Indefinido</Text>
                                <RadioButton value="Indefinido" />
                            </RadioButton.Group>
                        </View>
                    </View>
                    <View style={styles.viewContainer}>
                        <Text style={styles.textInput}>Descrição do Animal</Text>
                        <TextInput placeholder="Características do Animal..." style={styles.inputTextArea} />
                    </View>
                    {fotoAnimal !== "" ?
                        <>
                            <TouchableOpacity style={styles.buttonDeleteImage} onPress={handleClearImage}>
                                <Feather name="x" size={40} color="red" />
                            </TouchableOpacity>
                            <Image style={styles.imagemContainer} source={{ uri: "data:image/png;base64," + fotoAnimal }} />
                        </>
                        : null
                    }
                    <TouchableOpacity onPress={() => pickImage()} style={{ ...styles.button, backgroundColor: '#7D7B7A', }}>
                        <Text style={styles.buttonText}>Abrir Galeria</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleOpenCamera} style={{ ...styles.button, backgroundColor: '#7D7B7A', }}>
                        <Text style={styles.buttonText}>Abrir Câmera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleNavigateBack}>
                        <Text style={styles.buttonText}>CADASTRAR</Text>
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
        borderRadius: 8,
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
        fontSize: 10,
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
        zIndex: 10,
        position: "absolute",
        top: '55%',
        right: '12%',
        width: 44,
        height: 44,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderColor: '#D3E1E5',
        borderStyle: 'solid',
        borderWidth: 2
    }
});

export default TelaCadastroAni;