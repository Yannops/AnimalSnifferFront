import React from 'react';
import TelaInicial from "../screens/telaInicial";
import TelaCadastroUsu from "../screens/telaCadastroUsu";
import TelaAuth from "../screens/telaAuth";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="TelaInicial">
      <Stack.Screen name="TelaInicial" component={TelaInicial}  options={{ headerShown: false }}/>
      <Stack.Screen name="TelaCadastroUsu" component={TelaCadastroUsu}/>
      <Stack.Screen name="TelaAuth" component={TelaAuth}/>
    </Stack.Navigator>
  );
}

export default Routes;