import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const TelaAuth = () => {
  return(
    <View>  

      <View>
        <Text>CPF</Text>
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

export default TelaAuth;