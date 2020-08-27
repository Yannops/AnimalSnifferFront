import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const TelaCadastroUsu = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cadastro de Usuário</Text>
      </View>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.viewContainer}>
          <Text style={styles.textInput}>CPF</Text>
          <TextInput keyboardType="numbers-and-punctuation" placeholder="Informe seu CPF..." style={styles.inputs} />
        </View>
        <View style={styles.viewContainer}>
          <Text style={styles.textInput}>Nome</Text>
          <TextInput keyboardType="default" placeholder="Informe seu Nome..." style={styles.inputs} />
        </View>
        <View style={styles.viewContainer}>
          <Text style={styles.textInput}>E-mail</Text>
          <TextInput keyboardType="email-address" placeholder="Informe seu E-mail..." style={styles.inputs} />
        </View>
        <View style={styles.viewContainer}>
          <Text style={styles.textInput}>Senha</Text>
          <TextInput secureTextEntry={true} placeholder="Informe sua Senha..." style={styles.inputs} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CADASTRAR</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'green',
    height: 100,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'blue', 
  },

  headerText: {
    fontSize: 20,
    fontWeight: '800',
    color: 'rgba(0, 0, 0, .6)',
    paddingTop: 30,
    textAlign: 'center',
    letterSpacing: 3
  },

  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .2)'
  },

  viewContainer: {
    width: '100%',
    marginLeft: 80,
    marginTop: 0
  },

  textInput: {
    fontSize: 20,
    fontWeight: '600',
  },

  inputs: {
    width: '80%',
    height: 50,
    fontSize: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 30,
    marginTop: 5,
    paddingLeft: 5
  },

  button: {
    backgroundColor: '#99b3ff',
    padding: 10,
    borderRadius: 20,
    margin: 10,
    width: 250,
    height: 50
  },

  buttonText: {
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 10
  },
});

export default TelaCadastroUsu;