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
				<View style={styles.inputContainer}>
					<TextInput
						ref="title"
						autoFocus={true}
						autoCapitalize="sentences"
						placeholder="Untitled"
						style={[styles.textInput, styles.title]}
						onEndEditing={(text) => {this.refs.body.focus()}}
					/>
					<TextInput
						ref="body"
						multiline={true}
						placeholder="Start typing"
						style={[styles.textInput, styles.body]}
						textAlignVertical="top"
						underlineColorAndroid="transparent"
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
		alignItems: 'stretch',
		marginTop: 64,
		backgroundColor: 'gray'
	},
	title: {
		height: 40,
	},
	body: {
		flex: 1,
	},
	inputContainer: {
		borderBottomColor: '#9E7CE3',
		borderBottomWidth: 1,
		flex: 1,
		backgroundColor: 'red',
		flexDirection: 'row',
		marginBottom: 10,
	},
	textInput: {
		flex: 1,
		fontSize: 16,
	},
});