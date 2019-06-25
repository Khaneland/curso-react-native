import React from 'react';
import { Button, Alert, ToastAndroid, Platform, View, StyleSheet} from 'react-native';
import styles from '../styles/Padrao';

export default props => {
    const notificar = msg => {
        if(Platform.OS === 'android'){
            ToastAndroid.show(msg, ToastAndroid.LONG)
        }
        else{
            Alert.alert('Informação', msg);   
        }
    }

    return (
        <View style={styles.ex}>
            <Button title='Plataforma ?' style={{paddingTop: 90}}
                onPress={() => notificar('Parabens !')}/>
        </View>
    )
}
