//import Libraries
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

//create component
class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    return <ListView dataSource={this.dataSource} renderRow={this.renderRow} />;
  }
}

//gets state from the app state and maps it to props object for component
const mapStateToProps = state => ({ libraries: state.libraries });

//make it available to the app
//calls connect then LibraryList
export default connect(mapStateToProps)(LibraryList);
