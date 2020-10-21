import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TelaAnimalSelec = () => {
    const navigation = useNavigation();
    const [avaliar, setAvaliar] = useState(0);

    function handleNavigateBack() {
        navigation.goBack();
    }

    function handleNavigateToDetail() {
        navigation.navigate('TelaDetalhesAnimal');
    }

    function handleIncrementAvaliarAnimal() {
        setAvaliar(avaliar + 1);
    }

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <View style={styles.InfoAvalContainer}>
                <Text style={styles.texts}>Total de Avaliações: </Text>
                <Text style={styles.texts}>{avaliar} pessoas avaliaram</Text>
            </View>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleNavigateBack}></TouchableOpacity>
                <TouchableOpacity style={{ ...styles.button, backgroundColor: "#27B07D" }} onPress={handleNavigateToDetail}>
                    <Text style={styles.buttonText}>Visualizar Detalhes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.button, backgroundColor: "#99b3ff" }} >
                    <Text style={styles.buttonText}>Recolher Animal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.button, backgroundColor: '#fa5760' }} onPress={handleIncrementAvaliarAnimal}>
                    <Text style={styles.buttonText}>Avaliar Animal</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    InfoAvalContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, .1)',
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },

    texts: {
        fontFamily: 'Cinzel_700Bold',
        fontSize: 16,
    },

    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, .1)',
        paddingBottom: 200
    },

    button: {
        padding: 10,
        borderRadius: 15,
        margin: 10,
        width: '70%',
        height: 50
    },

    buttonText: {
        textAlign: 'center',
        lineHeight: 35,
        fontFamily: 'Cinzel_700Bold',
    },
});


export default TelaAnimalSelec;