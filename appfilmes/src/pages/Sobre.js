import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Sobre() {
  return (
    <ScrollView style={estilo.container}>
      <Text style={estilo.titulo}>Sobre o Projeto</Text>

      <View style={estilo.card}>
        <MaterialCommunityIcons
          name="movie"
          size={45}
          color="#ffffff"
        />

        <Text style={estilo.subtitulo}>Nome do aplicativo</Text>
        <Text style={estilo.texto}>About the movie</Text>
      </View>

      <View style={estilo.card}>
       
          size={45}
          color="#ffffff"
        />

        <Text style={estilo.subtitulo}>Objetivo</Text>
        <Text style={estilo.texto}>
          Nosso aplicativo foi desenvolvido para apresentar filmes de forma
          simples e organizada.
        </Text>
      </View>

      <View style={estilo.card}>
       
         
          size={45}
          color="#ffffff"
        />

        <Text style={estilo.subtitulo}>Integrantes</Text>

        <Text style={estilo.texto}>
          Joyce Karyne Martins de Souza
        </Text>

        <Text style={estilo.texto}>
          Paulo Vinicius Barbosa Jatuba
        </Text>
      </View>

      <View style={estilo.card}>
       
          size={45}
          color="#ffffff"
        />

        <Text style={estilo.subtitulo}>Tecnologias utilizadas</Text>

        <Text style={estilo.texto}>
          React Native,
          Expo Snack,
          JavaScript,
          React Navigation,
          MaterialCommunityIcons
        </Text>
      </View>

      <View style={estilo.card}>
        <Text style={estilo.final}>
          Projeto desenvolvido como um aplicativo de filmes,
          com o objetivo de proporcionar uma experiência simples
          e atrativa aos usuários.
        </Text>
      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6018ad',
    padding: 15,
  },

  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    marginVertical: 30,
  },

  card: {
    backgroundColor: '#a04bfa',
    borderRadius: 15,
    padding: 20,
    marginBottom: 18,
    alignItems: 'center',
  },

  subtitulo: {
    fontSize: 22,
    color: '#ffffff',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 8,
    textAlign: 'center',
  },

  texto: {
    fontSize: 17,
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 26,
  },

  final: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 24,
  },
});
