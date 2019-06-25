import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Simples from './components/Simples';
import ParImpar from './components/ParImpar';
import { Inverter, MegaSena } from './components/Multi';

export default class App extends Component{
  render(){
    return(
      <View style={styles.Container}>
        <Simples texto1='Olá Mundo!'/>
        <ParImpar numero='32'/>
        <Inverter texto='React Nativo'/>
        <MegaSena numeros={3}/>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});