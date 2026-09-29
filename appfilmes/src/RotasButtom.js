import * as react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Anabelle from './filmes/Anabelle';
import Crepusculo from './filmes/Crepusculo';
import Toystory from './filmes/Toystory';
import Vingadores from './filmes/Vingadores';
import Filme from './pages/Filmes';

const Stack = createStackNavigator();

export default function RotasButtom() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Filme" component={Filme} options = {{headerShown:false}} />
    <Stack.Screen name ="Anabelle"  component={Anabelle} options = {{title:"Anabelle"}} />
    <Stack.Screen name ="Crepusculo"  component={Crepusculo} options = {{title:"Crepusculo"}} />
    <Stack.Screen name ="Toystory"  component={Toystory} options = {{title:"Toystory"}} />
    <Stack.Screen name ="Vingadores"  component={Vingadores} options = {{title:"Vingadores"}} />
    </Stack.Navigator>
  );
}