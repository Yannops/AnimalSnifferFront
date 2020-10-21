import React from 'react';
import TelaInicial from "../screens/telaInicial";
import TelaCadastroUsu from "../screens/telaCadastroUsu";
import TelaAuth from "../screens/telaAuth";
import TelaPrincipal from "../screens/telaPrincipal";
import TelaCadastroAni from '../screens/telaCadastroAni';
import TelaAnimalSelec from '../screens/telaAnimalSelec';
import TelaDadosEstatisticos from '../screens/telaDadosEstatisticos';
import TelaCamera from '../screens/telaCamera';
import TelaDetalhesAnimal from '../screens/telaDetalhesAnimal';
import Header from '../components/Header';
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="TelaInicial">
      <Stack.Screen options={{ headerShown: false }} name="TelaInicial" component={TelaInicial} />
      <Stack.Screen options={{ headerShown: false }} name="TelaPrincipal" component={TelaPrincipal} />
      <Stack.Screen options={{ headerShown: true, header: () => <Header title="Cadastro de Usuário" /> }} name="TelaCadastroUsu" component={TelaCadastroUsu} />
      <Stack.Screen options={{ headerShown: true, header: () => <Header title="Acessar Aplicativo" /> }} name="TelaAuth" component={TelaAuth} />
      <Stack.Screen options={{ headerShown: true, header: () => <Header title="Cadastro do Animal" /> }} name="TelaCadastroAni" component={TelaCadastroAni} />
      <Stack.Screen options={{ headerShown: true, header: () => <Header title="Opções" /> }} name="TelaAnimalSelec" component={TelaAnimalSelec} />
      <Stack.Screen options={{ headerShown: true, header: () => <Header title="Dados Estatísticos" /> }} name="TelaDadosEstatisticos" component={TelaDadosEstatisticos} />
      <Stack.Screen options={{ headerShown: false }} name="TelaCamera" component={TelaCamera} />
      <Stack.Screen options={{ headerShown: true, header: () => <Header title="Detalhes do Animal" /> }} name="TelaDetalhesAnimal" component={TelaDetalhesAnimal} />
    </Stack.Navigator>
  );
}

export default Routes;