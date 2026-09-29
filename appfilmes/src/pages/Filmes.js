import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function Filme(props) {
  return (
    <View style={estilo.container}>
    <Text style={estilo.titulo}> Os melhores Filmes</Text>

    <FlatList
    data={filmes}

    renderItem={({ item }) =>
    <View style={estilo.filmes}>
    <TouchableOpacity onPress={()=>{props.navigation.navigate(item.buttom)}}>
    <Text style={estilo.txtFilme}> {item.nome}</Text>
    </TouchableOpacity>
    <View style={estilo.rede}>
    <Text style={estilo.curtidas}>
    <MaterialCommunityIcons
    name="thumb-up"
    size={20}
    color={'#F00'}
    />
    {item.like} Curtidas
    </Text>
    <Text style={estilo.visualizacoes}>
    <MaterialCommunityIcons
    name="account-heart"
    size={20}
    color={'blue'}
    />
    {item.visualizacoes} Visualizacões
    </Text>
    </View>
    </View>
}
/>
</View>
  );
}

const filmes = [
{
  uid: 1,
  nome: 'Vingadores',
  like: 10000,
  visualizacoes: 15000,
  buttom: 'Vingadores'
},
{
  uid: 2,
  nome: 'Anabelle',
  like: 7000,
 visualizacoes: 10000,
  buttom: 'Anabelle'
},
{
  uid: 3,
  nome: 'Crepusculo',
  like: 15000,
  visualizacoes: 20000,
  buttom: 'Crepusculo'
},
{
  uid: 4,
  nome: 'Toy story',
  like: 8000,
  visualizacoes: 10000,
  buttom: 'Toystory'
},
];

const estilo = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#6018ad',
  },
  filmes: {
    backgroundColor: '#a04bfa',
    justifyContent: 'center',
    margin: 15,
    padding: 5,
    borderRadius: 10,
    alignContent: 'center',
    textAlign: 'center',
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 700,
    marginVertical: 30,
  },
  rede: {
    flexDirection:'row',
    justifyContent: 'space-around',
  },
  txtFilme: {
    fontSize:20,
  },
});




