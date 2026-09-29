import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function HomemAranha() {
  return(
    <ScrollView>
      <View style={estilo.container}>

        <Text style={estilo.titulo}>Homem Aranha: Um novo dia</Text>

        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/homemaranha1.jpg')}
              />

              <Text style={estilo.rotulo}>
                Filme de Ação
              </Text>
            </View>

          
          </ScrollView>
        </View>

        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
            Homem-Aranha: Um Novo Dia apresenta uma nova aventura
            envolvendo Peter Parker, o herói conhecido por proteger
            Nova York. Após enfrentar diversos desafios, o Homem-Aranha
            precisa lidar com novas ameaças enquanto tenta equilibrar
            sua vida pessoal com suas responsabilidades como super-herói.
            Ao longo da história, ele enfrenta situações perigosas,
            colocando sua coragem e seus poderes à prova.
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
