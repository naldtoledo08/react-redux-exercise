import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import MemoryMinutes from './components/MemoryMinutes';

const App = (props) =>{	
	return (
		<div className="App-intro">
			<div className="row">
				Name: Ronald Toledo <br/>
				Points: <span id="user-points">{props.points}</span>
			</div>
			<MemoryMinutes />
		</div>
    );
}

App.propTypes = {
  points: React.PropTypes.number
};

function mapStateToProps(state, prop){
	return {
		points : state.points
	}
}

export default connect(mapStateToProps)(App);



