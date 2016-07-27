import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  View
} from 'react-native';

export default class NoteScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			note: {
				title: this.props.note.title,
				body: this.props.note.body,
			}
		}
	}

	render() {
		return (
			<View style={

				(this.props.os == 'android') ? [styles.container,styles.androidMargin] : [styles.container,styles.iosMargin]

			}>
				<View style={styles.inputContainer}>
					<TextInput
						ref="title"
						autoFocus={true}
						autoCapitalize="sentences"
						placeholder="Untitled"
						style={[styles.textInput, styles.title]}
						onEndEditing={(text) => {this.refs.body.focus()}}
						underlineColorAndroid='transparent'
						value={this.state.note.title}
						onChangeText={(text) => {this.setState({note: {title: text}})}}
					/>
					<TextInput
						ref="body"
						multiline={true}
						placeholder="Start typing"
						style={[styles.textInput, styles.body]}
						value={this.state.note.body}
						onChangeText={(text) => {this.setState({note: {body: text}})}}
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
	},
	androidMargin: {
	},
	iosMargin: {
	},
	title: {
		height: 40,
	},
	body: {
		flex: 1,
		borderBottomColor: '#9E7CE3',
		borderBottomWidth: 1,
		borderTopColor: '#9E7CE3',
		borderTopWidth: 1,
	},
	inputContainer: {
		flex: 1,
		marginBottom: 100,
		marginLeft: 10,
		marginRight: 10,
		marginTop: 10,
	},
	textInput: {
		fontSize: 16,
		padding: 10,
		textAlignVertical: 'top',
	},
});