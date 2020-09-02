import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, KeyboardAvoidingView, Platform, Picker } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';

const TelaCadastroAni = () => {
    const navigation = useNavigation();
    const [ratioValue, setRatioValue] = useState('Masculino');

    function handleNavigateBack() {
        navigation.goBack();
    }

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerText}>Cadastro de Animal</Text>
            </View>
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <View style={styles.viewContainer}>
                    <Text style={styles.textInput}>Tipo de Animal</Text>
                    <Picker>
                        <Picker.Item label="Cão" value="Cachorro" />
                        <Picker.Item label="Gato" value="Gato" />
                    </Picker>
                </View>
                <View style={styles.viewContainer}>
                    <Text style={styles.textInput}>Raça</Text>
                    <Picker>

                    </Picker>
                </View>
                <View style={styles.viewContainer}>
                    <View style={styles.ratioView}>
                        <Text style={{ ...styles.textInput, marginBottom: 15 }}>Sexo</Text>
                        <Text style={styles.ratioGroupAnswer}>Selecionado: {ratioValue}</Text>
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
                    <TextInput secureTextEntry={true} placeholder="Descreva Características do Animal..." style={styles.inputTextArea} />
                </View>
                <TouchableOpacity style={{ ...styles.button, backgroundColor: '#7D7B7A', }}>
                    <Text style={styles.buttonText}>Escolher Imagem</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleNavigateBack}>
                    <Text style={styles.buttonText}>CADASTRAR</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
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
        fontWeight: '800',
        color: 'rgba(0, 0, 0, .6)',
        paddingTop: 30,
        textAlign: 'center',
        letterSpacing: 3
    },

    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, .2)'
    },

    viewContainer: {
        width: '100%',
        marginLeft: 80,
        marginTop: 0,
        marginBottom: 10
    },

    textInput: {
        fontSize: 20,
        fontWeight: '600',
    },

    inputs: {
        width: '80%',
        height: 50,
        fontSize: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 30,
        marginTop: 5,
        paddingLeft: 5
    },

    inputTextArea: {
        width: '80%',
        height: 100,
        fontSize: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 30,
        marginTop: 5,
        paddingLeft: 5
    },

    button: {
        backgroundColor: '#99b3ff',
        padding: 10,
        borderRadius: 20,
        margin: 10,
        width: 250,
        height: 50
    },

    buttonText: {
        fontWeight: '600',
        textAlign: 'center',
        paddingTop: 10
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
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Cinzel_700Bold',
        marginTop: 12
    },

    ratioView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    ratioGroupAnswer: {
        fontSize: 14,
    }
});

export default TelaCadastroAni;