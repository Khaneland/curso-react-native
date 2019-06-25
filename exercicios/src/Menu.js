import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './components/Simples';
import ParImpar from './components/ParImpar';
import { Inverter, MegaSena } from './components/Multi';
import Contador from './components/Contador';
import Plataformas from './components/plataformas';
import ValidarProps from './components/ValidarProps';
import Evento from './components/evento';
import { Avo } from './components/comunicacaoDireta';

export default createDrawerNavigator({
    ComunicacaoDireta: {
        screen: () => <Avo nome='Nicollor' sobrenome='Paganini'/>,
        navigationOptions: { title: 'Navegação Direta'}
    },
    Evento: {
        screen: () => <Evento />,
        navigationOptions: {title: 'Evento'}
    },
    ValidarProps: {
        screen: () => <ValidarProps label="teste" ano={18} />,
        navigationOptions: { title: 'Validar Props'}
    },
    Plataformas: {
        screen: () => <Plataformas />,
        navigationOptions: { title: 'Plataformas'}
    },
    Contador: {
        screen: () => <Contador numero={8}/>,
        navigationOptions: { title: 'Contador'}
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo!' />
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { title: 'Par & Impar'}
    },
    Simples: {
        screen: () => <Simples texto='Flexivel!!!' />
    }
}, { drawerWidth: 300})