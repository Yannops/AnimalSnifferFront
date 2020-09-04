import React, { useState, useEffect } from 'react';
import { StyleSheet, Alert, StatusBar, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Location from 'expo-location';
import Icon from '@expo/vector-icons/build/FontAwesome';

const TelaPrincipal = () => {
    const navigation = useNavigation();
    const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);
    const route = useRoute();

    useEffect(() => {
        async function loadPosition() {
            const { status } = await Location.requestPermissionsAsync();

            if (status !== 'granted') {
                Alert.alert('Por favor, permita que nós usemos sua localização!');
                return;
            }

            const location = await Location.getCurrentPositionAsync();
            const { latitude, longitude } = location.coords;

            setInitialPosition([latitude, longitude]);
        }
        loadPosition();
    }, []);

    function handleNavigateBack() {
        navigation.goBack();
    }

    function handleNavigateToNewAnimal() {
        navigation.navigate('TelaCadastroAni');
    }

    return (
        <>
            <StatusBar barStyle="light-content" />
            {initialPosition[0] !== 0 && (
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: initialPosition[0],
                        longitude: initialPosition[1],
                        latitudeDelta: 0.014,
                        longitudeDelta: 0.014
                    }}
                    mapType="hybrid"
                >
                    <TouchableOpacity onPress={handleNavigateBack} />
                    <Marker coordinate={{ latitude: initialPosition[0], longitude: initialPosition[1] }}>
                        <Image source={require('../../assets/dog.png')} />
                    </Marker>
                    <Marker coordinate={{ latitude: initialPosition[0] + 0.01, longitude: initialPosition[1] }}>
                        <Image source={require('../../assets/cat.png')} />
                    </Marker>
                    <Marker coordinate={{ latitude: initialPosition[0] + 0.11, longitude: initialPosition[1] }}>
                        <Image source={require('../../assets/dog.png')} />
                    </Marker>
                    <TouchableOpacity onPress={handleNavigateBack} style={styles.backButton}>
                        <Icon name="arrow-left" size={50} color="#4583ff" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleNavigateToNewAnimal} style={styles.addAnimalButton}>
                        <Icon name="plus-circle" size={50} color="#4583ff" />
                    </TouchableOpacity>
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

    arrowGoBack: {
        marginTop: 80,
        marginLeft: 20,
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
        top: 70,
        left: 20
    },

    addAnimalButton: {
        position: 'absolute',
        zIndex: 1,
        top: 740,
        left: 340
    },
});


export default TelaPrincipal;