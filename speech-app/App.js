import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import Activities from './components/Activities';

// Build with eas build -p android --profile preview

export default function App() {
	const [isRecording, setIsRecording] = useState(false);

	const toggleRecording = () => {
		setIsRecording(!isRecording);
	}

	return (
		<View style={styles.container}>
			{
				isRecording ?
				<View>
					<Text>Recording</Text>
					<Pressable style={styles.audioButton} onPress={toggleRecording}> 
						<Text></Text>
					</Pressable>
				</View>
				:
				<Pressable style={styles.audioButton} onPress={toggleRecording}> 
					<Text style={styles.audioButtonText}>Press here!</Text>
				</Pressable>
			}
			<StatusBar style="auto" />

			<Activities/>
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
	audioButton: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 100,
		elevation: 3,
		backgroundColor: '#1e3a8a',
  },
	audioButtonText: {
		color: 'white',
  },
	audioButtonText2: {
		color: 'white',
  }

});
