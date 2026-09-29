import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function Toystory() {
  return(
    <ScrollView>
    <View style={estilo.container}>

    <Text style={estilo.titulo}>Toy Story</Text>

    <Text style={estilo.rotulo}>Filme de Animação</Text>

    <View>

    <Image
    resizeMode={'stretch'}
    style={estilo.img}
    source={require('../../assets/toystory.jpg')}
    />

    <Image
    resizeMode={'stretch'}
    style={estilo.img}
    source={require('../../assets/toystory2.jpg')}
    />

    <Image
    resizeMode={'stretch'}
    style={estilo.img}
    source={require('../../assets/toystory3.jpg')}
    />

    <Text style={estilo.frase}>
    Amigo, estou aqui
    </Text>

    </View>

    <View style={estilo.resumo}>
    <Text style={estilo.textoResumo}>
    O aniversário de Andy está chegando e os brinquedos estão nervosos.
    Afinal de contas, eles temem que um novo brinquedo possa substituí-los.
    Liderados por Woody, um caubói que é também o brinquedo predileto de
    Andy, eles montam uma escuta que lhes permite saber dos presentes
    ganhos. Entre eles está Buzz Lightyear, o boneco de um patrulheiro
    espacial, que logo passa a receber mais atenção do garoto. Isto aos
    poucos gera ciúmes em Woody, que tenta fazer com que ele caia atrás
    da cama. Só que o plano dá errado e Buzz cai pela janela. É o início
    da aventura de Woody, que precisa resgatar Buzz também para limpar
    sua barra com os outros brinquedos.
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
