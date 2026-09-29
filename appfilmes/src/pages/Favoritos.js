import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function Favoritos(props) {
  return (
    <View style={estilo.container}>
    <Text style={estilo.titulo}> Favorito do momento</Text>

    <FlatList
    data={favorito}

    renderItem={({ item }) => (
  <TouchableOpacity
    style={estilo.favorito}
    onPress={() => props.navigation.navigate(item.tela)}

  >
    <Text style={estilo.txtFavorito}>
      {item.nome}
    </Text>

    <View style={estilo.rede}>
      <Text style={estilo.curtidas}>
        <MaterialCommunityIcons
          name="thumb-up"
          size={20}
          color="red"
        />
        {' '}{item.like} Curtidas
      </Text>

      <Text style={estilo.visualizacoes}>
        <MaterialCommunityIcons
          name="account-heart"
          size={20}
          color="blue"
        />
        {' '}{item.visualizacoes} Visualizacões
      </Text>
    </View>
  </TouchableOpacity>
)}


/>
</View>
  );
}

const favorito = [
  {
    uid: 1,
    nome: 'Frozen',
    like: 5000,
   visualizacoes: 10000,
    tela: 'Frozen',
  },
  {
    uid: 2,
    nome: 'As Branquelas',
    like: 20000,
    visualizacoes: 50000,
    tela: 'Asbranquelas',
  },
  {
    uid: 3,
    nome: 'Homem Aranha: Um novo dia',
    like: 10000,
    visualizacoes: 15000,
    tela: 'Homemaranha',
  },
  {
    uid: 4,
    nome: 'Harry Potter',
    like: 30000,
    visualizacoes: 40000,
    tela: 'Harrypotter',
  },
];


const estilo = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#6018ad',
  },
  favorito: {
    backgroundColor: '#a04bfa',
    justifyContent: 'center',
    margin: 15,
    padding: 5,
    borderRadius: 10,
    alingContent: 'center',
    textAling: 'center',
  },
  titulo: {
    fontSize: 30,
    textAling: 'center',
    color: '#ffffff',
    fontWeight: 700,
    marginVertical: 30,
  },
  rede: {
    flexDirection:'row',
    justifyContent: 'space-around',
  },
  txtFavorito: {
    fontSize:20,
  },
});




