import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './components/Simples';
import ParImpar from './components/ParImpar';
import { Inverter, MegaSena } from './components/Multi';
import Contador from './components/Contador';

export default createDrawerNavigator({
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