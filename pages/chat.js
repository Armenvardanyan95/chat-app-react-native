import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, ImageBackground, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

import MessagesService  from '../services/messages.service';

const MessageBlock = ({text, author}) => (<View style={styles.item}>
    <Text style={styles.message}>{text}</Text>
</View>);

export default class Chat extends Component {

    messagesService: MessagesService = new MessagesService();

    state = {
        messages: [],
        newMessage: ''
    };

    async componentWillMount(): void {
        const messages = await this.messagesService.getMessages();
        this.setState({messages});
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/chat-background.jpg')}
                                 style={{ width: '100%', height: '100%' }}>

                    <ScrollView>
                        <FlatList data={this.state.messages}
                                  renderItem={({item}) => <MessageBlock text={item.text} author={item.author}/>}/>
                    </ScrollView>

                    <View style={styles.inputContainer}>
                        <TextInput onChangeText={newMessage => this.setState({newMessage})} placeholder="Message"
                                   style={styles.input} underlineColorAndroid="transparent"
                                   multiline={true} numberOfLines={4} />
                        <Button title="Send" containerViewStyle={{ alignSelf: 'flex-end', paddingBottom: 25}}
                                backgroundColor="transparent" color="blue"/>
                    </View>
                </ImageBackground>
            </View>
        )
    }

}



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    messagesContainer: {
        backgroundColor: 'gray'
    },
    message: {
        backgroundColor: '#7070FF',
        padding: 8,
        alignSelf: 'flex-end',
        color: 'white',
        borderRadius: 15
    },
    inputContainer: {
        paddingBottom: 5,
        paddingTop: 5,
        marginBottom: -20,
        paddingLeft: 20,
        backgroundColor: 'white',
        width: '100%',
        alignSelf: 'flex-start',
        alignItems: 'stretch',
        flexDirection: 'row'
    },
    input: {
        alignSelf: 'flex-start',
        width: '80%',
        paddingBottom: 0,
        paddingTop: 0
    }
});