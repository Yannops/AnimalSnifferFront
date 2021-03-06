import React, { useState, useEffect } from 'react';
import { StyleSheet, Alert, StatusBar, Image, TouchableOpacity, AsyncStorage, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import * as Location from 'expo-location';
import api from '../services/api';

interface AnimalProps {
    id: number;
    tipo: string;
    latitude: string;
    longitude: string;
}

const TelaPrincipal = () => {
    const navigation = useNavigation();
    const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);
    const [animais, setAnimais] = useState<AnimalProps[]>([]);
    const route = useRoute();

    useEffect(() => {
        async function loadPosition() {
            const { status } = await Location.requestPermissionsAsync();

            if (status !== 'granted') {
                Alert.alert('Por favor, permita que nós usemos sua localização!');
                return;
            }

            const location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
            const { latitude, longitude } = location.coords;

            setInitialPosition([latitude, longitude]);
        }
        loadPosition();
    }, []);

    useFocusEffect(() => {
        api.get('animal').then(response => {
            setAnimais(response.data);
        });
    });

    function handleNavigateBack() {
        AsyncStorage.removeItem('idUsuario');
        navigation.goBack();
    }

    function handleNavigateToNewAnimal() {
        navigation.navigate('TelaCadastroAni');
    }

    function handleNavigateToAnimalSelec(id: number) {
        navigation.navigate('TelaAnimalSelec', { id });
    }

    function handleNavigateToStatisticData() {
        navigation.navigate('TelaDadosEstatisticos');
    }

    return (
        <>
            <StatusBar barStyle="light-content" />
            <TouchableOpacity onPress={handleNavigateBack} style={styles.backButton}>
                <Image source={require('../../assets/back.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNavigateToNewAnimal} style={styles.addAnimalButton}>
                <Image source={require('../../assets/add.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNavigateToStatisticData} style={styles.seeStatisticData}>
                <Image source={require('../../assets/info.png')} />
            </TouchableOpacity>
            {initialPosition[0] !== 0 && (
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    initialRegion={{
                        latitude: initialPosition[0],
                        longitude: initialPosition[1],
                        latitudeDelta: 0.014,
                        longitudeDelta: 0.014
                    }}
                    mapType="hybrid"
                >
                    {animais.map((animal: AnimalProps) => {
                        return (
                                <Marker key={animal.id}
                                    icon={animal.tipo === "Cachorro" ?
                                        require('../../assets/dog.png') :
                                        require('../../assets/cat.png')}
                                    coordinate={{
                                        latitude: Number(animal.latitude),
                                        longitude: Number(animal.longitude)
                                    }} onPress={() => handleNavigateToAnimalSelec(animal.id)} />
                        );
                    })}
                </MapView>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },

    goBackText: {
        fontFamily: 'Cinzel_700Bold',
        fontSize: 20,
        color: 'lightblue',
        paddingTop: 2
    },

    backButton: {
        position: 'absolute',
        zIndex: 1,
        top: '12%',
        left: '8%',
    },

    addAnimalButton: {
        position: 'absolute',
        zIndex: 1,
        top: '80%',
        left: '80%'
    },

    seeStatisticData: {
        position: 'absolute',
        zIndex: 1,
        top: '12%',
        left: '80%'
    },
});


export default TelaPrincipal;