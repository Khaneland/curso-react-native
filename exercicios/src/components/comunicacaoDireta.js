import React from 'react';
import { View, Text } from 'react-native';

const fonte = { style: { fontSize: 30 } }

function filhosComProps(props) {
    return React.Children.map(props.children,
        c => React.cloneElement(c, { ...props, ...c.props }))
}

export const Filho = props =>
    <View>
        <Text {...fonte}>Filho: {props.nome} {props.sobrenome} </Text>
    </View>

export const Pai = props =>
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome} </Text>
        {/*{props.children}*/}
        {/*React.cloneElement(props.children, {...props, ...props.children}) */}
        {/*React.Children.map(props.children,
            c => React.cloneElement(c, { ...props, ...c.props }))*/}
        {filhosComProps(props)}
    </View>

export const Avo = props =>
    <View style={{marginTop: 50,}}>
        <Text {...fonte}>Avo: {props.nome} {props.sobrenome} </Text>
        <Pai nome='André' sobrenome={props.sobrenome}>
            <Filho nome='Ana'/>
            <Filho nome='Gui'/>
            <Filho nome='Davi'/>
        </Pai>
        <Pai {...props}>
            <Filho nome='Rebeca'/>
            <Filho nome='Renato'/>
        </Pai>
    </View>