import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function Vingadores() {
  return(
    <ScrollView>
    <View style={estilo.container}>

    <Text style={estilo.titulo}>Vingadores: Ultimato</Text>

    <Text style={estilo.rotulo}>Filme de Ação</Text>

    <View>

    <Image
    resizeMode={'stretch'}
    style={estilo.img}
    source={require('../../assets/vingadoresult.jpg')}
    />

    <Image
    resizeMode={'stretch'}
    style={estilo.img}
    source={require('../../assets/vingadoresult2.jpg')}
    />

    <Image
    resizeMode={'stretch'}
    style={estilo.img}
    source={require('../../assets/vingadoresult3.jpg')}
    />

    <Text style={estilo.frase}>
    E eu... sou... o Homem de Ferro
    </Text>

    </View>

    <View style={estilo.resumo}>
    <Text style={estilo.textoResumo}>
    Em Vingadores: Ultimato, após Thanos eliminar metade das criaturas
    vivas em Vingadores: Guerra Infinita, os heróis precisam lidar com
    a dor da perda de amigos e seus entes queridos. Com Tony Stark
    (Robert Downey Jr.) vagando perdido no espaço sem água nem comida,
    o Capitão América/Steve Rogers (Chris Evans) e a Viúva Negra/Natasha
    Romanov (Scarlett Johansson) precisam liderar a resistência contra
    o titã louco.
    </Text>
    </View>

    </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create ({
container: {
  flex: 1,
  backgroundColor: '#a04bfa',
},

img: {
  width: '90%',
  height: 400,
  marginHorizontal: '5%',
  marginTop: 20,
  borderRadius: 10,
},

titulo: {
  fontSize: 30,
  textAlign: 'center',
  color: '#ffffff',
  fontWeight: 700,
  marginTop: 50,
  marginBottom: 10,
},

rotulo: {
  textAlign: 'center',
  fontSize: 20,
  color: '#ffffff',
  marginBottom: 10,
},

frase: {
  textAlign: 'center',
  marginTop: 20,
  marginHorizontal: 20,
  fontSize: 20,
},

resumo: {
  marginTop: 20,
  marginHorizontal: 15,
  backgroundColor: '#ffffff70',
  borderRadius: 7,
  padding: 8,
},

textoResumo: {
  fontSize: 19,
},

});
