import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const lanternaOff = require('./assets/lanterna-off.png');
const lanternaOn = require('./assets/lanterna-on.png');

export default function App() {

  const [isAtiva, setIsAtiva] = useState(false); // <-- Aqui usamos useState

  function trocaEstado(){
    setIsAtiva(!isAtiva); // <-- Aqui usamos a função para atualizar
    console.log(!isAtiva); // só para ver no console
  }

  return (
    <View style={isAtiva ? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={trocaEstado}>
        <Image 
          source={isAtiva ? lanternaOn : lanternaOff} 
          style={styles2.imagem} 
        /> 
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles2 = StyleSheet.create({
  texto: {
    color: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
  },
  fonteVermelha: {
    color: 'red',
  },
  imagem: {
    width: 100,
    height: 100,
  }
});

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
