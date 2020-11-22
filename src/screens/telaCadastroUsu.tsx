import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Header from '../components/Header';
import api from '../services/api';

const TelaCadastroUsu = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  async function handleRegisterNewUser() {
    await api.post('usuario', {
      nome,
      cpf,
      senha,
      email
    });
    alert(`Parabéns ${nome}, agora você é um de nossos usuários`);
    navigation.goBack();
  }


  return (
    <>
      <Header title="Cadastro de Usuário" />
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}>
        <Image source={require('../../assets/adicionar.png')} />
        <View style={styles.viewContainer}>
          <Text style={styles.textInput}>Nome</Text>
          <View style={styles.inputView}>
            <Image source={require('../../assets/carteira-de-identidade.png')} style={styles.ImageStyle} />
            <TextInput value={nome} onChangeText={setNome} keyboardType="default" placeholder="Informe seu Nome..." style={{ flex: 1 }} />
          </View>
        </View>
        <View style={styles.viewContainer}>
          <Text style={styles.textInput}>CPF</Text>
          <View style={styles.inputView}>
            <Image source={require('../../assets/carteira-de-identidade.png')} style={styles.ImageStyle} />
            <TextInput value={cpf} onChangeText={setCpf} keyboardType="number-pad" placeholder="Informe seu CPF..." style={{ flex: 1 }} />
          </View>
        </View>
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
        <TouchableOpacity style={styles.button} onPress={handleRegisterNewUser}>
          <Text style={styles.buttonText}>CADASTRAR</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '98%',
    backgroundColor: 'rgba(0, 0, 0, .1)'
  },

  viewContainer: {
    width: '100%',
    marginLeft: 80,
    marginTop: 0
  },

  textInput: {
    fontSize: 20,
    fontFamily: 'Cinzel_700Bold'
  },

  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center'
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
    marginTop: '2%',
    marginBottom: '4%',
  },

  button: {
    backgroundColor: '#99b3ff',
    padding: 10,
    borderRadius: 15,
    margin: 10,
    width: 250,
    height: 50
  },

  buttonText: {
    fontFamily: 'Cinzel_700Bold',
    textAlign: 'center',
    paddingTop: 10
  },
});

export default TelaCadastroUsu;