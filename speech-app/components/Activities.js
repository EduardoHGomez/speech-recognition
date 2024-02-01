import { Pressable, StyleSheet, Text, View } from 'react-native';
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
		} else {
            // There was an if here => if (data)
            setCategory('');
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
                <Text style={{color: '#125c7a'}}>Press Here</Text>
            </Pressable>
            <Pressable
                style={styles.buttonComplete}
                onPress={() => setCategory('Homework')}
            > 
                <Text style={{color: '#125c7a'}}>Press Here</Text>
            </Pressable>
            <Pressable
                style={styles.buttonComplete}
                onPress={() => setCategory('Homework')}
            > 
                <Text style={{color: '#125c7a'}}>Press Here</Text>
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