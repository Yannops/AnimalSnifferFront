import React from 'react';
import { Text, StyleSheet, ImageBackground, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const backgroundImage = require('../../assets/Background.jpg');

const TelaInicial = () => {

  const { navigate } = useNavigation();

  const loadCadastrar = () => {
    navigate("TelaCadastroUsu");
  }

  const loadAcessar = () => {
    navigate("TelaAuth");
  }


  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Bem Vindo</Text>
        <Text style={{ ...styles.title, color: "black" }}>ao</Text>
        <Text style={{ ...styles.title, color: '#99b3ff' }}>Animal Sniffer</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={loadAcessar} style={{ ...styles.button, backgroundColor: "#9fff80" }}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={loadCadastrar} style={{ ...styles.button, backgroundColor: "#99b3ff" }}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  titleContainer: {
    marginBottom: '50%',
  },

  title: {
    fontSize: 40,
    color: 'green',
    textAlign: 'center',
    fontFamily: 'Cinzel_700Bold',
  },

  buttonContainer: {
    marginBottom: 25,
  },

  button: {
    padding: 10,
    borderRadius: 15,
    margin: 10,
    width: 150,
  },

  buttonText: {
    textAlign: 'center',
    fontFamily: 'Cinzel_700Bold',
  },
});

export default TelaInicial;