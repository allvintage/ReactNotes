import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  View
} from 'react-native';

export default class NoteScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TextInput
					ref="title"
					autoFocus={true}
					placeholder="Untitled"
					style={styles.title}
					onEndEditing={(text) => {this.refs.body.focus()}}
				/>
				<TextInput
					ref="body"
					multiline={true}
					placeholder="Start typing"
					style={styles.body}
				/>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
		marginTop: 64,
		backgroundColor: 'white'
	},
	title: {
		height: 40,
	},
	body: {
		flex: 1,
	}
});