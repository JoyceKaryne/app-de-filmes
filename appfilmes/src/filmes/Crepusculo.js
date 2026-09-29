import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function Crepusculo() {
  return(
    <ScrollView>
    <View style={estilo.container}>

    <Text style={estilo.titulo}>Crepúsculo</Text>

    <Text style={estilo.rotulo}>Filme de Romance</Text>

    <View>

    <Image
    resizeMode={'stretch'}
    style={estilo.img}
    source={require('../../assets/crepusculo1.jpg')}
    />

    <Image
    resizeMode={'stretch'}
    style={estilo.img}
    source={require('../../assets/crepusculo2.jpg')}
    />

    <Image
    resizeMode={'stretch'}
    style={estilo.img}
    source={require('../../assets/crepusculo3.jpg')}
    />

    <Text style={estilo.frase}>
    Nenhum espaço de tempo com você seria suficiente. Comecemos com o para sempre.
    </Text>

    </View>

    <View style={estilo.resumo}>
    <Text style={estilo.textoResumo}>
    Isabella Swan (Kristen Stewart) e seu pai, Charlie (Billy Burke),
    mudaram-se recentemente. No novo colégio ela logo conhece Edward
    Cullen (Robert Pattinson), um jovem admirado por todas as garotas
    locais e que mantém uma aura de mistério em torno de si. Eles aos
    poucos se apaixonam, mas Edward sabe que isto põe a vida de
    Isabella em risco.
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
