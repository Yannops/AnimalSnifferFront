import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, StatusBar, ScrollView, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '../components/Header';
import api from '../services/api';

interface DetalheAnimal {
    id: number;
}

interface AnimalProps {
    id: number;
    tipo: string;
    raca: string;
    sexo: string;
    descricao: string;
    imagem: string;
}

const TelaAnimalSelec = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [avaliar, setAvaliar] = useState(0);
    const [animal, setAnimal] = useState<AnimalProps>();

    const params = route.params as DetalheAnimal;

    function handleNavigateBack() {
        navigation.goBack();
    }

    function handleDeleteAnimal() {
        api.delete(`animal/${params.id}`);
        alert('Você acaba de ajudar á um animal, Parabéns!');
        navigation.goBack();
    }

    function handleIncrementAvaliarAnimal() {
        setAvaliar(avaliar + 1);
    }

    useEffect(() => {
        api.get(`animal/${params.id}`).then(response => {
            setAnimal(response.data);
        });
    }, [params.id]);

    if (!animal) {
        return null;
    }

    return (
        <>
            <Header title="Detalhes do Animal" />
            <StatusBar barStyle="dark-content" />
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.InfoAvalContainer}>
                    <Text style={styles.texts}>Total de Avaliações: </Text>
                    <Text style={styles.texts}>{avaliar} pessoas avaliaram</Text>
                </View>
                <View style={styles.viewContainer}>
                    <Text style={styles.textInput}>Tipo de Animal:</Text>
                    <Text style={styles.textDetail}>{animal.tipo}</Text>
                </View>
                <View style={styles.viewContainer}>
                    <Text style={styles.textInput}>Raça:</Text>
                    <Text style={styles.textDetail}>{animal.raca}</Text>
                </View>
                <View style={styles.viewContainer}>
                    <Text style={styles.textInput}>Sexo:</Text>
                    <Text style={styles.textDetail}>{animal.sexo === "F" ? 
                    'Fêmea' : 
                    animal.sexo === "M" ?
                    "Macho" : 
                    "Indefinido"}</Text>
                </View>
                <View style={styles.viewContainer}>
                    <Text style={styles.textInput}>Descrição do Animal:</Text>
                    <Text style={{ ...styles.textDetail, height: 200 }}>{animal.descricao}</Text>
                </View>
                <Text style={styles.textInput}>Imagem do Animal</Text>
                <Image style={styles.imagemContainer} source={{ uri: animal.imagem }} />
                <TouchableOpacity onPress={handleNavigateBack}></TouchableOpacity>
                <TouchableOpacity onPress={handleDeleteAnimal} style={{ ...styles.button, backgroundColor: "#99b3ff" }} >
                    <Text style={styles.buttonText}>Recolher Animal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.button, backgroundColor: '#fa5760' }} onPress={handleIncrementAvaliarAnimal}>
                    <Text style={styles.buttonText}>Avaliar Animal</Text>
                </TouchableOpacity>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    InfoAvalContainer: {
        flexDirection: 'row',
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },

    texts: {
        fontFamily: 'Cinzel_700Bold',
        fontSize: 16,
    },

    button: {
        padding: 10,
        borderRadius: 15,
        margin: 10,
        width: '80%',
        height: 50
    },

    buttonText: {
        textAlign: 'center',
        lineHeight: 35,
        fontFamily: 'Cinzel_700Bold',
    },

    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: 1680,
        backgroundColor: 'rgba(0, 0, 0, .1)'
    },

    imagemContainer: {
        width: '80%',
        height: 400,
        borderRadius: 8,
        marginTop: 30,
        borderWidth: 1,
    },

    viewContainer: {
        width: '80%',
        marginHorizontal: 60,
        marginTop: 0,
        marginBottom: 50,
        backgroundColor: '#fff',
        borderWidth: 12,
        borderColor: '#fff',
        borderRadius: 12,
        shadowOffset: { width: 1, height: 1, },
        shadowColor: 'black',
        shadowOpacity: 1,
    },

    textInput: {
        fontSize: 20,
        fontFamily: 'Cinzel_700Bold',
        marginTop: 25
    },

    inputTextArea: {
        width: '80%',
        height: 100,
        fontSize: 20,
        backgroundColor: '#fff',
        marginBottom: 30,
        marginTop: 10,
        paddingLeft: 5,
        paddingBottom: 55
    },

    textDetail: {
        height: 50,
        width: '80%',
        fontSize: 18,
        padding: 5,
        marginTop: 10,
    }
});


export default TelaAnimalSelec;