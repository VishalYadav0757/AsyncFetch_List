import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput } from 'react-native';

const Signup = ({navigation}) => {
    return(
         <View style = {styles.container}>
             <StatusBar barStyle="light-content" backgroundColor= '#000000' />
             <Text style = {styles.welcome}>Register Here</Text>
            <TextInput
                style = {styles.input}
                placeholder = "Enter Email (johndoe@example.com)"
                />
            <TextInput
                style = {styles.input}
                placeholder = "Enter Username"
                />
            <TextInput
                style = {styles.input}
                placeholder = "Enter Password"
                secureTextEntry
                />
            <View style = {styles.btnContainer}>
                <TouchableOpacity
                    style = {styles.userBtn}
                    onPress = {() => alert ('Registered Successfully')}>
                    <Text style = {styles.btnTxt}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.userBtn}
                    onPress = {() => navigation.navigate('Login')}>
                    <Text style = {styles.btnTxt}>Go back to Login</Text>
                </TouchableOpacity>
            </View>
         </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E57373',
    },
    welcome: {
        fontSize: 30,
        margin: 10,
        color: '#FFD700',
        textAlign: 'center'
    },
    input: {
        width: '90%',
        backgroundColor: '#ffffff',
        padding: 15,
        marginBottom: 10
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%'
    },
    userBtn: {
        backgroundColor: '#FFD700',
        padding: 15,
        width: '45%'
    },
    btnTxt: {
        fontSize: 18,
        textAlign: 'center'
    },
});

export default Signup;