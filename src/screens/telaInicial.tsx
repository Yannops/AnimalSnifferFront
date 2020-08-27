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
    backgroundColor: "#233245",
    flex: 1,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  titleContainer: {
    marginBottom: 350,
  },

  title: {
    fontSize: 50,
    color: 'green',
    textAlign: 'center',
    fontWeight: '500',
  },

  buttonContainer: {
    marginBottom: 100,
  },

  button: {
    padding: 10,
    borderRadius: 20,
    margin: 10,
    width: 150,
  },

  buttonText: {
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default TelaInicial;