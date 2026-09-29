import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function HarryPotter() {
  return(
    <ScrollView>
      <View style={estilo.container}>

        <Text style={estilo.titulo}>Harry Potter</Text>

        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/harrypotter1.jpg')}
              />

              <Text style={estilo.rotulo}>
                Filme de Fantasia
              </Text>
            </View>

           

          </ScrollView>
        </View>

        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
            Harry Potter conta a história de um jovem órfão que descobre,
            ao completar onze anos, que é um bruxo. Ele passa a estudar
            na Escola de Magia e Bruxaria de Hogwarts, onde faz amizade
            com Rony Weasley e Hermione Granger. Ao longo de sua jornada,
            Harry descobre mais sobre seu passado e precisa enfrentar
            diversos desafios e perigos, principalmente relacionados ao
            bruxo das trevas Lord Voldemort. Com seus amigos ao seu lado,
            ele enfrenta aventuras e aprende sobre amizade, coragem e
            responsabilidade.
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