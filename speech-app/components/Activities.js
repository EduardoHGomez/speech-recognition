import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput, Button } from 'react-native';
import supabase from '../config/supabaseClient';

function Activities () {
    const [category, setCategory] = useState('');
    const [formError, setFormError] = useState(null);

    const handleSubmit = async(e) => {
		e.preventDefault();

        // Get latest timestamp


        // Update latest task with the amount of time spent, in minutes

        // Add another row with created_at now() and finished_at NULL




		
		// Supabase 
		const { data, error } = await supabase
        .from('activities')
		.insert({ category }) 

		if (error) {
			alert(error.message);	
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
                onChangeText={(category) => setCategory(category)}
                placeholder='Activity' 
                value={category}
                />

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