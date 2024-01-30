import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { TextInput, Button } from 'react-native';
import supabase from "../config/supabaseClient";


function Activities () {
    const [text, setText] = useState('');
    const [formError, setFormError] = useState(null);

    const handleSubmit = async(e) => {
		e.preventDefault();
		
		// Supabase 
		const { data, error } = await supabase
		.from('quotes')
		.insert([{ quote, author }])

		if (error) {
			console.log(error);	
		}
		if (data) {
            setText('');
            alert('Success');
            setFormError(null);
		}

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
                onPress={handleSubmit}
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