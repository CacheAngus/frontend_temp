import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';

class loginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
            <TextInput
            placeholder="username"
            placeholderTextColor="rgb(48,48,48)"
            style={styles.input}
            />
            <TextInput
            placeholder="password"
            placeholderTextColor="rgb(48,48,48)"
            secureTextEntry
            style={styles.input}
            />
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding:20
    },
    input: {
        height: 40,
        backgroundColor: 'rgb(245,245,245)',
        marginBottom: 20,
        paddingHorizontal: 10

    },
    buttonContainer: {
        backgroundColor: 'rgb(128,128,128)',
        paddingVertical: 15
    },
buttonText: {
    textAlign: 'center',
    color: '#00000',
    fontWeight: '700'
}
});

export default loginForm;