import * as react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Asbranquelas from './favoritos/Asbranquelas';
import Frozen from './favoritos/Frozen';
import Harrypotter from './favoritos/Harrypotter';
import Homemaranha from './favoritos/Homemaranha';
import Favoritos from './pages/Favoritos';

const Stack = createStackNavigator();

export default function RotasButtomFilmes() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Favoritos" component={Favoritos} options = {{headerShown:false}} />
    <Stack.Screen name ="Asbranquelas"  component={Asbranquelas} options = {{title:"Asbranquelas"}} />
    <Stack.Screen name ="Frozen"  component={Frozen} options = {{title:"Frozen"}} />
    <Stack.Screen name ="Harrypotter"  component={Harrypotter} options = {{title:"Harrypotter"}} />
    <Stack.Screen name ="Homemaranha"  component={Homemaranha} options = {{title:"Homemaranha"}} />
    </Stack.Navigator>
  );
}
