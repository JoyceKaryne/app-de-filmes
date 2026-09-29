import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Frozen() {
  return(
    <ScrollView>
      <View style={estilo.container}>

        <Text style={estilo.titulo}>Frozen</Text>

        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/frozen.jpg')}
              />

              <Text style={estilo.rotulo}>
                Filme de Animação
              </Text>
            </View>

          

          </ScrollView>
        </View>

        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
            Frozen conta a história de Elsa e Anna, duas irmãs que vivem
            no reino de Arendelle. Elsa possui poderes mágicos capazes
            de criar gelo e neve, mas acaba perdendo o controle de seus
            poderes e transforma o reino em um inverno eterno. Após fugir
            para as montanhas, Anna parte em uma aventura para encontrar
            sua irmã e trazer Elsa de volta para casa. Durante a jornada,
            elas descobrem que o amor e a união entre as duas são
            fundamentais para salvar Arendelle.
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