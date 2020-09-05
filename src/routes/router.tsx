import React from 'react';
import TelaInicial from "../screens/telaInicial";
import TelaCadastroUsu from "../screens/telaCadastroUsu";
import TelaAuth from "../screens/telaAuth";
import TelaPrincipal from "../screens/telaPrincipal";
import TelaCadastroAni from '../screens/telaCadastroAni';
import TelaAnimalSelec from '../screens/telaAnimalSelec';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="TelaInicial" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TelaInicial" component={TelaInicial} />
      <Stack.Screen name="TelaCadastroUsu" component={TelaCadastroUsu} />
      <Stack.Screen name="TelaAuth" component={TelaAuth} />
      <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
      <Stack.Screen name="TelaCadastroAni" component={TelaCadastroAni} />
      <Stack.Screen name="TelaAnimalSelec" component={TelaAnimalSelec} />
    </Stack.Navigator>
  );
}

export default Routes;