import React from 'react'
import { 
	StyleSheet,
	ScrollView,
	KeyboardAvoidingView,
	View,
	Text,
	TextInput 
} from 'react-native'

export default class App extends React.Component {
	render() {
		return (
			<ScrollView style={styles.scrollView}>
				<KeyboardAvoidingView
					enabled
					behavior="position"
				>
					<View>
						<Text>
							User Name
						</Text>
						<TextInput
							placeholder='user name'
						/>
					</View>
				</KeyboardAvoidingView>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: '#fff',
		// flex: 1,
		// alignItems: 'center',
		// justifyContent: 'center',
	},

	placeholder: {
		backgroundColor: '#f0f',
	}
})
