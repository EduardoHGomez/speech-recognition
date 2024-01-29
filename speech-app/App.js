import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
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
				<Pressable
					style={styles.recordButton}
					onPress={updateCount}
					title='Press me'
					>
				</Pressable>	
				<Text>Current count: {count}</Text>
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
	recordButton: {
		backgroundColor: 'red',
	}

});
