import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Pressable } from 'react-native';

export default function App() {
	const [count, setCount] = useState(0);

	const updateCount = () => {
		setCount(count + 1);
		console.log('here');
	}

	return (
		<View style={styles.container}>
				<Text>Welcome to Edu App!</Text>
				<Text>Current count: {count}</Text>
			<Pressable style={styles.button} onPress={updateCount}> 
				<Text>Press me!</Text>
			</Pressable>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
    },
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: 'black',
  },

});
