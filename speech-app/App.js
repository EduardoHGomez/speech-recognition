import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native';

export default function App() {
	const [count, setCount] = useState(0);

	const updateCount = () => {
		setCount(count + 1);
		console.log('here');
	}

	return (
		<View style={styles.container}>
				<Text>Welcome to Edu App!</Text>
				<Button
					onClick={updateCount}
					title='Press me update count'
					>
				</Button>	
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
});
