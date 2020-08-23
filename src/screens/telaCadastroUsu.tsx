import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const TelaCadastroUsu = () => {
  return(
    <View>  

      <View>
        <Text>CPF</Text>
        <TextInput />
      </View>

      <View>
        <Text>Nome</Text>
        <TextInput />
      </View>

      <View>
        <Text>E-mail</Text>
        <TextInput />
      </View>

      <View>
        <Text>Senha</Text>
        <TextInput />
      </View>

      <TouchableOpacity />

    </View>
  );
}

export default TelaCadastroUsu;