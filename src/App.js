import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import MemoryMinutes from './components/memoryMinutes';

class App extends Component {
 
  /*constructor(props){
  	super(props);
  }*/
  render() {
    return (
		<div className="App-intro">
			<div className="row">
				Name: Ronald Toledo <br/>
				Points: <span id="user-points">{this.props.points}</span>
			</div>
			<MemoryMinutes />
		</div>
    );
  }
}

function mapStateToProps(state, prop){
	
	return {
		points : state.points
	}
}


export default connect(mapStateToProps)(App);
//export default App;
