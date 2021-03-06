import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, KeyboardAvoidingView, Platform, Image, AsyncStorage } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import api from '../services/api';

const TelaAuth = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  async function handleNavigateToMap() {
    try {
      const response = await api.post('usuario/Login', { email, senha });  
      AsyncStorage.setItem("idUsuario", JSON.stringify(response.data.id));    
      navigation.navigate('TelaPrincipal');
    } catch (error) {
      setEmail('');
      setSenha('');
      alert('Senha ou E-mail invalidos!');
    }
    
  }

  return (
    <>
      <Header title="Acessar Aplicativo" />
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}>
        <Image source={require('../../assets/login.png')} style={{ marginBottom: '10%' }} />
        <View style={styles.viewContainer}>
          <Text style={styles.textInput}>E-mail</Text>
          <View style={styles.inputView}>
            <Image source={require('../../assets/email.png')} style={styles.ImageStyle} />
            <TextInput value={email} onChangeText={setEmail} keyboardType="email-address" placeholder="Informe seu E-mail..." style={{ flex: 1 }} />
          </View>
        </View>
        <View style={styles.viewContainer}>
          <Text style={styles.textInput}>Senha</Text>
          <View style={styles.inputView}>
            <Image source={require('../../assets/lock.png')} style={styles.ImageStyle} />
            <TextInput value={senha} onChangeText={setSenha} underlineColorAndroid="transparent" secureTextEntry={true} placeholder="Informe sua Senha..." style={{ flex: 1 }} />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleNavigateToMap}>
          <Text style={styles.buttonText}>ACESSAR</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center'
  },

  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .1)'
  },

  viewContainer: {
    width: '80%',
    marginLeft: 80,
    marginTop: 0
  },

  inputView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: .5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    marginRight: '20%',
    marginTop: '5%',
    marginBottom: '10%',
  },

  textInput: {
    fontSize: 20,
    fontFamily: 'Cinzel_700Bold'
  },

  button: {
    backgroundColor: '#99b3ff',
    padding: 10,
    borderRadius: 15,
    margin: 10,
    width: 250,
    height: 50,
  },

  buttonText: {
    fontFamily: 'Cinzel_700Bold',
    textAlign: 'center',
    paddingTop: 10
  },
});

export default TelaAuth;