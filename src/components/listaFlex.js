import React from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native';

const alunos = [
   {id: 1, nome: 'joão', nota: 7.9},
   {id: 2, nome: 'Ana', nota: 9.1},
   {id: 3, nome: 'Bia', nota: 5.4},
   {id: 4, nome: 'Claudia', nota: 5.1},
   {id: 5, nome: 'Roberto', nota: 2.3},
   {id: 6, nome: 'Rafael', nota: 1.1},
   {id: 7, nome: 'Ruan', nota: 6.6},
   {id: 8, nome: 'Rebeca', nota: 1.6},
   {id: 9, nome: 'Tobias', nota: 5.6},
   {id: 10, nome: 'joão', nota: 7.9},
   {id: 11, nome: 'joão', nota: 7.9},
   {id: 12, nome: 'Ana', nota: 9.1},
   {id: 13, nome: 'Bia', nota: 5.4},
   {id: 14, nome: 'Claudia', nota: 5.1},
   {id: 15, nome: 'Roberto', nota: 2.3},
   {id: 16, nome: 'Rafael', nota: 1.1},
   {id: 17, nome: 'Ruan', nota: 6.6},
   {id: 18, nome: 'Rebeca', nota: 1.6},
   {id: 19, nome: 'Tobias', nota: 5.6}
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222'
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItems = ({item}) => {
        return <Aluno {...item} />
    }

    return(
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItems}
                keyExtractor={(_, index) => index.toString()/* ou `${index}`*/} />
        </ScrollView>
    )
}
