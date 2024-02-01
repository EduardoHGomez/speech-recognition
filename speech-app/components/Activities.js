import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput, Button } from 'react-native';
import supabase from '../config/supabaseClient';

function Activities () {
    const [category, setCategory] = useState('');
    const [formError, setFormError] = useState(null);

    const submitFormat = async(e) => {
		const { data, error } = await supabase
        .from('activities')
		.insert({ category }) 

		if (error) {
			alert(error.message);	
		} else {
            // There was an if here => if (data)
            setCategory('');
            setFormError(null);
        }

    }

    const handleSubmit = async(e) => {
		e.preventDefault();

        // Get latest timestamp
		const { data, error } = await supabase
        .from('get_last_activity')
        .select()

		if (error) {
            console.log(error);
		} else {
            console.log(data);
        }

        // Update latest task with the amount of time spent, in minutes
        let created_at = new Date();
        created_at = created_at.toISOString();

        let minutes_spent;


        


        // Add another row with created_at now() and finished_at NULL


		// Supabase 

		

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
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 20,
                    marginBottom: 20
                }}
            />

            <Pressable
                style={styles.buttonComplete}
                onPress={() => setCategory('Homework')}
            > 
                <Text style={{color: '#125c7a'}}>Homework</Text>
            </Pressable>
            <Pressable
                style={styles.buttonComplete}
                onPress={() => setCategory('Procrastination')}
            > 
                <Text style={{color: '#125c7a'}}>Procrastination</Text>
            </Pressable>
            <Pressable
                style={styles.buttonComplete}
                onPress={() => setCategory('Workout')}
            > 
                <Text style={{color: '#125c7a'}}>Workout</Text>
            </Pressable>


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
	buttonComplete: {
        marginTop: 10,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 100,
		elevation: 3,
		backgroundColor: '#eaf1f4',
  },
});

export default Activities