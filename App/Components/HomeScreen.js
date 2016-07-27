import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';


import SimpleButton from './SimpleButton';
import NoteList from './NoteList';

export default class HomeScreen extends Component {
	render() {
		return (
			<View style={styles.container}>

				<View style={styles.noteList}><NoteList navigator={this.props.navigator} /></View>
				<View style={styles.centralNavigation}>
					<Text style={styles.noNotesText}>You haven't created any notes!</Text>
					<SimpleButton
						style={styles.simpleButton}
						textStyle={styles.simpleButtonText}
						onPress={() => {
							this.props.navigator.push({name: 'createNote'});
						}}
						customText="Create Note"
					/>
				</View>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 60,
		alignItems: 'stretch',
	},
	centralNavigation: {
		flex: 1,
		//backgroundColor: 'green',
		alignItems: 'center',
	},
	noteList: {
		flex: 1,
		//backgroundColor: 'gray',
	},
	noNotesText: {
		color: '#48209A',
		marginBottom: 10
	},
	simpleButton: {
		backgroundColor: '#5B29C1',
		paddingHorizontal: 20,
		paddingVertical: 15,
		borderColor: '#48209A',
		borderWidth: 1,
		borderRadius: 4,
		shadowColor: 'darkgrey',
		shadowOffset: {
			width: 1,
			height: 1,
		},
		shadowOpacity: 0.8,
		shadowRadius: 1,
	},
	simpleButtonText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 16,
		textAlign: 'center',
	}
});