import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TelaAnimalSelec = () => {
    const navigation = useNavigation();
    const [avaliar, setAvaliar] = useState(0);

    function handleNavigateBack() {
        navigation.goBack();
    }

    function handleIncrementAvaliarAnimal() {
        setAvaliar(avaliar + 1);
    }

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <View style={styles.header}>
                <Text style={styles.headerText}>Animal 1</Text>
            </View>
            <View style={styles.InfoAvalContainer}>
                <Text style={styles.texts}>Total de Avaliações: </Text>
                <Text style={styles.texts}>{avaliar} pessoas avaliaram</Text>
            </View>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleNavigateBack}></TouchableOpacity>
                <TouchableOpacity style={{ ...styles.button, backgroundColor: "#9fff80" }}>
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
    header: {
        backgroundColor: 'green',
        height: 100,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'blue',
    },

    headerText: {
        fontSize: 20,
        fontFamily: 'Cinzel_700Bold',
        color: 'rgba(0, 0, 0, .6)',
        paddingTop: 30,
        textAlign: 'center',
        letterSpacing: 3
    },

    InfoAvalContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, .2)',
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },

    texts: {
        fontFamily: 'Cinzel_700Bold',
        fontSize: 20,
    },

    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, .2)',
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