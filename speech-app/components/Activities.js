import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { TextInput, Button } from 'react-native';

function Activities () {
    const [text, setText] = useState('');

    const sendActivity = ()=> {
        console.log('Here');
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setText(text)}
                placeholder='Activity' 
                value={text}
            ></TextInput>
            
            <Button
                onPress={sendActivity}
                title="Send Task"
            />

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default Activities