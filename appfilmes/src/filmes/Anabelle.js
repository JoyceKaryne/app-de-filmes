import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function Anabelle() {
  return(
    <ScrollView>
    <View style={estilo.container}>

    <Text style={estilo.titulo}>Anabelle</Text>

    <Text style={estilo.rotulo}>Filme de Terror</Text>

    <View>

    <Image
    resizeMode={'stretch'}
    style={estilo.img}
    source={require('../../assets/annabele.jpg')}
    />

    <Image
    resizeMode={'stretch'}
    style={estilo.img}
    source={require('../../assets/annabelle1.jpg')}
    />

    <Image
    resizeMode={'stretch'}
    style={estilo.img}
    source={require('../../assets/annabelle2.jpg')}
    />

    <Text style={estilo.frase}>
    Ela não está possuída. A boneca está sendo usada como um conduíte.
    Há uma entidade maligna movendo-se através dela.
    </Text>

    </View>

    <View style={estilo.resumo}>
    <Text style={estilo.textoResumo}>
    Em Anabelle, John (Ward Horton) encontrou o presente perfeito para sua futura esposa, Mia (Annabelle Wallis): uma rara boneca antiga com um lindo vestido. Mia fica bastante contente com seu presente, porém, sua animação com a boneca não duraria muito tempo. Certa noite, sua casa é invadida por membros de uma seita satânica que, buscando completar um ritual, atacam violentamente o casal. Após derramarem sangue, os cultistas são detidos. O que o casal não contava é que, mesmo depois de um tempo, as consequências dessa invasão continuariam a aterrorizar suas vidas, principalmente quando ocorrências sobrenaturais, envolvendo a boneca, passam a permear a vida de Mia.
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
