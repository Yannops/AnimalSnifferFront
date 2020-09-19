import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const TelaDetalhesAnimal = () => {
    const navigation = useNavigation();
    const [fotoAnimal, setFotoAnimal] = useState(null);

    function handleNavigateBack() {
        navigation.goBack();
    }

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerText}>Detalhes do Animal</Text>
            </View>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.viewContainer}>
                    <Text style={styles.textInput}>Tipo de Animal</Text>
                    <Text style={styles.textDetail}>Cachorro</Text>
                </View>
                <View style={styles.viewContainer}>
                    <Text style={styles.textInput}>Raça</Text>
                    <Text style={styles.textDetail}>Pitbull</Text>
                </View>
                <View style={styles.viewContainer}>
                    <Text style={styles.textInput}>Sexo</Text>
                    <Text style={styles.textDetail}>Macho</Text>
                </View>
                <View style={styles.viewContainer}>
                    <Text style={styles.textInput}>Descrição do Animal</Text>
                    <Text style={{...styles.textDetail, height: 100}}>Animal encontrado perto da praça, grande porte, no entando inofensivo!</Text>
                </View>
                <View style={styles.viewContainer}>
                    <Text style={styles.textInput}>Imagem do Animal</Text>
                    <Image style={styles.imagemContainer} source={require('../../assets/teste.png')} />
                </View>
                <TouchableOpacity onPress={handleNavigateBack}></TouchableOpacity>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#27B07D',
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

    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: 1350,
        backgroundColor: 'rgba(0, 0, 0, .1)'
    },

    imagemContainer: {
        width: '80%',
        height: 400,
        borderRadius: 8,
        marginTop: 10
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
        padding: 5,        
        marginTop: 10,
        backgroundColor: '#fff'
    }
});

export default TelaDetalhesAnimal;