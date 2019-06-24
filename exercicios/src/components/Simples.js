import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Padrao from '../styles/Padrao';

//export default function(props){
//    return <Text style={styles.f20}>{props.texto}</Text>
//}

//export default (props) => {
//    return <Text style={styles.f20}>Arrow: {props.texto}</Text>
//}

export default props => [
    <Text key={1} style={Padrao.ex}>Arrow1: {props.texto1}</Text>,
    //<Text key={2} style={Padrao.ex}>Arrow2: {props.texto2}</Text>,
    //<Text key={3} style={Padrao.ex}>Arrow3: {props.texto3}</Text>
]

const styles = StyleSheet.create({
    f20: {
        fontSize: 20,
    }
});