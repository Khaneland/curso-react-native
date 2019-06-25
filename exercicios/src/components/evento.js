import React, { Component } from 'react';
import {View, Text, TextInput, StyleSheet } from 'react-native';
import Padrao from '../styles/Padrao';

export default class Evento extends Component {
    state = {
        texto: 'Goiaba'
    }

    alterarTexto = texto => {
        this.setState({ texto })
    }

    render(){
        return (
            <View style={styles.container}>
                <Text styles={Padrao.fonte40}>{this.state.texto}</Text>
                <TextInput value={this.state.texto} style={Padrao.input} onChangeText={this.alterarTexto}></TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 400,
    }
})