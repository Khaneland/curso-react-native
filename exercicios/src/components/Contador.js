import React, {Component} from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class Contador extends Component {

    state = {
        numero: this.props.numero,
    }

    //constructor(props) {
    //    super(props)
    //    this.state = { /* ... */}
    //    this.maisUm = this.maisUm.bind(this)
    //}

    maisUm() {
        this.setState({ numero: this.state.numero + 1 })
    }

    limpar = () => {
        this.setState({ numero: this.props.numero })
    }

    render(){
        this.props.numero++
        return(
            <View style={styles.container}>
                <Text style={{fontSize: 30}}>{this.state.numero}</Text>
                <TouchableHighlight
                    onPress={() => this.maisUm()}
                    onLongPress={this.limpar}
                >
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})