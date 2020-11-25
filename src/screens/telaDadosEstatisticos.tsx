import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/Header';
import api from '../services/api';

interface DadosEstatisticos {
    Salto: number;
    Itu: number;
    Sorocaba: number;
    Total: number;
    Macho: number;
    Femea: number;
    Indefinido: number;
    Cachorro: number;
    Gato: number;
    Labrador: number;
    Rottweiler: number;
    GoldenRetriever: number;
    ViraLataCachorro: number;
    Poodle: number;
    PastorAlemao: number;
    SpitzAlemao: number;
    Buldogue: number;
    ShihTzu: number;
    Maltes: number;
    IndefinidoCachorro: number;
    Persa: number;
    Siames: number;
    ViraLataGato: number;
    Siberiano: number;
    Sphynx: number;
    Angora: number;
    Abissinio: number;
    IndefinidoGato: number;
}

const TelaDadosEstatisticos = () => {
    const navigation = useNavigation();
    const [dados, setDados] = useState<DadosEstatisticos>();

    function handleNavigateBack() {
        navigation.goBack();
    }

    useFocusEffect(() => {
        api.get('estatistica').then(response => {
            setDados(response.data);
        });
    });

    return (
        <>
            <Header title="Dados Estatísticos" />
            <StatusBar barStyle="dark-content" />
            <TouchableOpacity onPress={handleNavigateBack}></TouchableOpacity>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.infoTitle}>Total de Animais: {dados?.Total}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.infoTitle}>Total por Cidades</Text>
                    <Text style={styles.infoText}>Itu:  {dados?.Itu}</Text>
                    <Text style={styles.infoText}>Salto:  {dados?.Salto}</Text>
                    <Text style={styles.infoText}>Sorocaba: {dados?.Sorocaba}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.infoTitle}>Total por Sexo</Text>
                    <Text style={styles.infoText}>Macho:  {dados?.Macho}</Text>
                    <Text style={styles.infoText}>Fêmea:  {dados?.Femea}</Text>
                    <Text style={styles.infoText}>Indefinido: {dados?.Indefinido}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.infoTitle}>Total de Cachorros: {dados?.Cachorro}</Text>
                    <Text style={styles.infoText}>Labrador: {dados?.Labrador}</Text>
                    <Text style={styles.infoText}>Rottweiler: {dados?.Rottweiler}</Text>
                    <Text style={styles.infoText}>Golden Retriever: {dados?.GoldenRetriever}</Text>
                    <Text style={styles.infoText}>Vira Lata: {dados?.ViraLataCachorro}</Text>
                    <Text style={styles.infoText}>Poodle: {dados?.Poodle}</Text>
                    <Text style={styles.infoText}>Pastor Alemão: {dados?.PastorAlemao}</Text>
                    <Text style={styles.infoText}>Spitz Alemão: {dados?.SpitzAlemao}</Text>
                    <Text style={styles.infoText}>Buldogue: {dados?.Buldogue}</Text>
                    <Text style={styles.infoText}>Shih Tzu: {dados?.ShihTzu}</Text>
                    <Text style={styles.infoText}>Maltês: {dados?.Maltes}</Text>
                    <Text style={styles.infoText}>Indefinido: {dados?.IndefinidoCachorro}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.infoTitle}>Total de Gatos: {dados?.Gato}</Text>
                    <Text style={styles.infoText}>Persa: {dados?.Persa}</Text>
                    <Text style={styles.infoText}>Siamês: {dados?.Siames}</Text>
                    <Text style={styles.infoText}>Vira Lata: {dados?.ViraLataGato}</Text>
                    <Text style={styles.infoText}>Siberiano: {dados?.Siberiano}</Text>
                    <Text style={styles.infoText}>Sphynx: {dados?.Sphynx}</Text>
                    <Text style={styles.infoText}>Angorá: {dados?.Angora}</Text>
                    <Text style={styles.infoText}>Abissínio: {dados?.Abissinio}</Text>
                    <Text style={styles.infoText}>Indefinido: {dados?.IndefinidoGato}</Text>
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