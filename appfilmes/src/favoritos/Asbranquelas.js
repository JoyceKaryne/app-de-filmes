import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function AsBranquelas() {
  return(
    <ScrollView>
      <View style={estilo.container}>

        <Text style={estilo.titulo}>As Branquelas</Text>

        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/asbranquelas.jpg')}
              />

              <Text style={estilo.rotulo}>
                Filme de Comédia
              </Text>
            </View>

            

          </ScrollView>
        </View>

        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
            Em As Branquelas, os irmãos Marcus e Kevin Copeland são
            agentes do FBI que recebem a missão de proteger as irmãs
            Brittany e Tiffany Wilson, duas socialites que estão sendo
            ameaçadas. Após um acidente que impede as verdadeiras irmãs
            de comparecerem a um evento, os agentes decidem se disfarçar
            como elas. A partir daí, os dois precisam assumir a identidade
            das irmãs e lidar com diversas situações engraçadas enquanto
            tentam cumprir sua missão.
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a04bfa',
  },

  img: {
    width: 330,
    height: 400,
    marginHorizontal: 25,
    borderRadius: 10,
  },

  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 700,
    marginTop: 50,
    marginBottom: 30,
  },

  rotulo: {
    textAlign: 'center',
    marginTop: 20,
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