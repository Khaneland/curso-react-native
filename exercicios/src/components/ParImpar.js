import React from 'react';
import { View, Text } from 'react-native';
import Padrao from '../styles/Padrao';
import If from './if';

function ParOuImpar(num){
    /*if(num % 2 == 0){
        return <Text style={Padrao.ex}>Olá beiçola par</Text>
    }
    else{
        return <Text style={Padrao.ex}>Olá beiçola impar</Text>
    }*/
    const v = num % 2 == 0 ? 'par' : 'impar';
    return <Text style={Padrao.ex}>{v}</Text>
}

export default props =>
    <View>
        {/*
            ParOuImpar(props.numero)
        */}
        {/*
            props.numero % 2 == 0
            ? <Text style={Padrao.ex}>Olá beiçola par</Text>
            : <Text style={Padrao.ex}>Olá beiçola impar</Text>
        */}
        <If test={props.numero % 2 == 0}>
            <Text style={Padrao.ex}>Par</Text>
        </If>
        <If test={props.numero % 2 == 1}>
            <Text style={Padrao.ex}>Impar</Text>
        </If>
    </View>