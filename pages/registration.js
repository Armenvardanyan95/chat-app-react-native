import React, { Component } from 'react';
import { ImageBackground, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import UserService from '../services/user.service';

export default class Registration extends Component {

    userService = new UserService();
    user = {
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <ImageBackground
                source={require('../assets/images/registration-background.jpg')}
                style={{width: '100%', height: '100%'}}
            >
                <View style={styles.card}>
                    <TextInput placeholder="Full Name" onChangeText={value => this.user.fullName = value}/>
                    <TextInput placeholder="Email" onChangeText={value => this.user.email = value}/>
                    <TextInput secureTextEntry={true} placeholder="Password"
                               onChangeText={value => this.user.password = value} type="password"/>
                    <TextInput secureTextEntry={true} placeholder="Confirm Password"
                               onChangeText={value => this.user.confirmPassword = value} type="password"/>
                    <Button style={styles.submit} title="Submit" onPress={() => this.submit()}/>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.actions} onPress={() => Actions.replace('login')}>Already a member? Sign in</Text>
                    </View>
                </View>

            </ImageBackground>
        );
    }

    async submit() {
        await this.userService.signUp(this.user);
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