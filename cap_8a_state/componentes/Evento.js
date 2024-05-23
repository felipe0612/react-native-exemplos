import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

class Evento extends React.Component {
state = {
input: 'O rafael é gatão'
}
render() {
    return (
    <View style={estilos.container}>
    <TextInput
    style={estilos.input}
    value={this.state.input}
    onChangeText={text => this.setState({ input: text })}
    />
    </View>
    )
    }
    }

const estilos = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    input: {
    height: 50,
    width: 300,
    fontSize: 28,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'purple'
    },
    font30: {
    fontSize: 30
    }
    });

export default Evento;