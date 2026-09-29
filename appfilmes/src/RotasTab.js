import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Filme from './RotasButtom';
import Home from './pages/Home';
import Favoritos from './RotasButtomFilmes';
import Sobre from './pages/Sobre';

const Tab = createBottomTabNavigator();

export default function RotasTab(){
 return(
   <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
    <Tab.Screen 
    name="Filme"
    component={Filme}
    options = {{
      tabBarIcon:({color, size})=><MaterialCommunityIcons name="movie" color= {color} size={size}/>}}
      />
      <Tab.Screen
      name="Home"
      component={Home}
    options = {{ 
      tabBarLabel:"Home",
      tabBarIcon:({color, size})=><MaterialCommunityIcons name="home" color= {color} size={size}/>}}
      />
    <Tab.Screen
      name="Favoritos"
      component={Favoritos}
    options = {{
      tabBarLabel:"Favoritos",
      tabBarIcon:({color, size})=><MaterialCommunityIcons name="heart" color= {color} size={size}/>}}
      />
      <Tab.Screen
      name="Sobre"
      component={Sobre}
    options = {{
      tabBarLabel:"Sobre",
      tabBarIcon:({color, size})=><MaterialCommunityIcons name="information" color= {color} size={size}/>}}
      />
      </Tab.Navigator>
 );
 }
