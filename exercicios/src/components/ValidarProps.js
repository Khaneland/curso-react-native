import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const ValidarProps = props => 
    <View style={styles.container}>
        <Text style={{ fontSize: 35 }}>
            {props.label} 
            {props.ano + 2000}
        </Text>
    </View>

ValidarProps.defaultProps = {
    label: 'Ano: '
}

ValidarProps.propTypes = {
    ano: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ValidarProps