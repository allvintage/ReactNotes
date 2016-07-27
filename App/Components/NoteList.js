import React, { Component } from 'react';
import {
  Text,
  ListView,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

export default class NoteList extends Component {
	constructor(props) {
		super(props);
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	}

	render() {
		return (
			<ListView
				dataSource={
					this.ds.cloneWithRows([
						{title:"Note 1", body: "Body 1", id:1},
						{title:"Note 2", body: "Body 2", id:2}
					])
				}
				renderRow={(rowData) => {
						return (
							<TouchableHighlight style={styles.listItem} onPress={() => this._onPress(rowData)}>
								<Text style={styles.listItemText}>{rowData.title}</Text>
							</TouchableHighlight>
						);
					}
				}
			/>
		);
	}

	_onPress(rowData) {
		this.props.navigator.push({
			name: 'createNote',
			note: {
				id: rowData.id,
				title: rowData.title,
				body: rowData.body,
			}
		});
	}
}

var styles = StyleSheet.create({
	listItem: {
		flex: 1,
		//backgroundColor: 'yellow',
		justifyContent: 'center',
		padding: 20,
		alignItems: 'stretch',
		borderBottomWidth: 1,
		borderBottomColor: '#5B29C1',
	},
	listItemText: {
		textAlignVertical: 'center',
	}
});