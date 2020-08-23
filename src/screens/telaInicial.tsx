import React from 'react';
import { Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
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


  return(
    <ImageBackground source={backgroundImage} style={styles.background}>  
      <TouchableOpacity onPress={loadAcessar}  style={{...styles.button, backgroundColor: "#99b3ff"}}>
        <Text>Acessar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={loadCadastrar} style={{...styles.button, backgroundColor: "#9fff80"}}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#233245",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    margin: 10,
    width: "40%",
  }
});

export default TelaInicial;