import React from 'react';
import { View, Text } from 'react-native';
import Padrao from '../styles/Padrao';

export default props =>
    <View>
        {
            props.numero % 2 == 0
            ? <Text style={Padrao.ex}>Olá beiçola par</Text>
            : <Text style={Padrao.ex}>Olá beiçola impar</Text>
        }
    </View>