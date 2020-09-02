import React, { useState, useEffect } from 'react';
import { StyleSheet, Alert, StatusBar, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Location from 'expo-location';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/build/AntDesign';

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

    async function handleNavigateToNewAnimal() {
        navigation.navigate('TelaCadastroAni');
    }

    return (
        <>
            <StatusBar barStyle="light-content" />
            {initialPosition[0] !== 0 && (
                <MapView
                    onPress={() => handleNavigateToNewAnimal()}
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
                        <Icon name="gitlab" size={30} color="#FFF" />
                    </Marker>
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

    goBackContainer: {
        flexDirection: "row",
    },
});


export default TelaPrincipal;