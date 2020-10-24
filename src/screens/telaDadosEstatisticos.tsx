import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/Header';

const TelaDadosEstatisticos = () => {
    const navigation = useNavigation();

    function handleNavigateBack() {
        navigation.goBack();
    }

    return (
        <>
            <Header title="Dados Estatísticos" />
            <StatusBar barStyle="dark-content" />
            <TouchableOpacity onPress={handleNavigateBack}></TouchableOpacity>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.infoTitle}>Total de Animais: 30</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.infoTitle}>Total de Cachorros: 20</Text>
                    <Text style={styles.infoText}>Rottweiler: 5</Text>
                    <Text style={styles.infoText}>Malteses: 7</Text>
                    <Text style={styles.infoText}>Machos: 5</Text>
                    <Text style={styles.infoText}>Fêmeas: 5</Text>
                    <Text style={styles.infoText}>Indefinidos: 1</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.infoTitle}>Total de Gatos: 12</Text>
                    <Text style={styles.infoText}>Fêmeas: 5</Text>
                    <Text style={styles.infoText}>Machos: 1</Text>
                    <Text style={styles.infoText}>Persas: 4</Text>
                    <Text style={styles.infoText}>Siameses: 16</Text>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'rgba(0, 0, 0, .3)',
        borderWidth: 1,
        width: '80%',
        alignSelf: 'center',
        margin: 20,
        borderRadius: 8,
        shadowOffset: { width: 1, height: 1, },
        shadowColor: 'black',
        shadowOpacity: 1,
    },

    infoText: {
        fontFamily: 'Cinzel_400Regular',
        lineHeight: 50,
        fontSize: 18,
        textAlign: 'center',
    },

    infoTitle: {
        fontFamily: 'Cinzel_700Bold',
        lineHeight: 120,
        fontSize: 24,
        textAlign: 'center',
    },
});

export default TelaDadosEstatisticos;