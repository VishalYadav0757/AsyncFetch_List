import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Switch
} from 'react-native';

const userInfo = { username: 'admin', password: 'pass12345'};

class Login extends Component {
    state = {
      switchValue:false
    }
    constructor(props) {
        super (props);
        this.state = {
            username: '',
            password: ''
        };
    };
    render(){
        return (
          <View style = {styles.container}>
            <StatusBar barStyle="light-content" backgroundColor= '#000000' />
            <Switch
              value = {this.state.switchValue} onValueChange = {(switchValue) => this.setState({switchValue})}
              trackColor = {{ false: 'red' , true: 'black'}}
              thumbColor={"#ffffff"}
            />
            <Text style = {styles.welcome}>Welcome</Text>
            <TextInput
                style = {styles.input}
                placeholder = "Username"
                onChangeText = {(username)=> this.setState({username})}
                value = {this.state.username}
                autoCapitalize = 'none' 
                />
            <TextInput
                style = {styles.input}
                placeholder = "Password"
                secureTextEntry
                onChangeText = {(password)=> this.setState({password})}
                value = {this.state.password}
                />
            <View style = {styles.btnContainer}>
                <TouchableOpacity
                style = {styles.userBtn}
                onPress = {this._login}>
                <Text style = {styles.btnTxt}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style = {styles.userBtn}
                onPress = {() => this.props.navigation.navigate('Signup')}>
                <Text style = {styles.btnTxt}>SignUp</Text>
                </TouchableOpacity>
            </View> 
          </View>
        );
    };
    _login = async() => {
        if(userInfo.username === this.state.username && userInfo.password === this.state.password){
            await AsyncStorage.setItem('isLoggedIn', '1')
            this.props.navigation.navigate('Dashboard')
        } else {
            alert('Username or Password is Incorrect');
        }
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26A69A',
  },
  welcome: {
    fontSize: 30,
    margin: 10,
    color: '#ffffff',
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

export default Login;