import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Simples from './components/Simples';

export default class App extends Component{
  render(){
    return(
      <View style={styles.Container}>
        <Simples texto1='Olá Mundo!' texto2='eae mundo' texto3='salve salve quebrada'/>
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