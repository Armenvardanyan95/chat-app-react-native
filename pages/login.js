import React, { Component } from 'react';
import { ImageBackground, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import UserService from '../services/user.service';
import Storage from '../services/storage.service';


export default class Login extends Component {

    userService =  new UserService();
    storage = new Storage();
    credentials = {
        email: '',
        password: ''
    };

    constructor(props) {
        super(props);
    }

    async componentWillMount() {
        const token = await this.storage.get('auth-token');
        if (token) {
            Actions.replace('chat');
        }
    }


    render() {
        return (
            <ImageBackground
                source={require('../assets/images/login-background.jpg')}
                style={{width: '100%', height: '100%'}}
            >
                <View style={styles.card}>
                    <TextInput placeholder="Email" onChangeText={value => this.credentials.email = value}/>
                    <TextInput secureTextEntry={true} onChangeText={value => this.credentials.password = value}
                               placeholder="Password" type="password"/>
                    <Button style={styles.submit} title="Submit" onPress={() => this.submit()}/>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.actions} onPress={() => Actions.replace('registration')}>
                            Not a member? Sign up
                        </Text>
                        <Text style={styles.actions}>
                            Forgot your password?
                        </Text>
                    </View>
                </View>

            </ImageBackground>
        );
    }

    async submit() {
        try {
            await this.userService.signIn(this.credentials);
            Actions.replace('chat');
        } catch(e) {
            alert(e.message);
        }
    }

}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 10,
        margin: 15,
        marginTop: 90,
        borderRadius: 5
    },
    submit: {
        marginTop: 5
    },
    actions: {
        color: 'green'
    }
})