import React, { Component } 			from 'react';
import { bindActionCreators } 			from 'redux';
import { connect } 						from 'react-redux';
import * as publishMemoryMinutesActions from '../actions/publishMemoryMinutes.js';
import * as userPointsCounterActions 	from '../actions/userPointsCounter.js';

class PublishMemoryMinutesForm extends Component{
	constructor(props){
		super(props);
		this.onClickPublish = this.onClickPublish.bind(this);
	}
	onClickPublish(memory_minute){
		
		var points = document.getElementById(memory_minute.id).value.trim();

		if(points === "" || isNaN(points)){
			alert("Please enter points");
		}else{
			this.props.action.publishMemoryMinutes.publishMemoryMinutes(memory_minute.id, points);
			this.props.action.userPointsCounter.userPointsCounter('add_points', points);
			//this.props.points = points;			
		}
		
	}
	render(){
		//console.log(this.props.action);
		//var isPublished = (this.props.memory_minute.published == 1) ? true : false;
		if(this.props.memory_minute.published === 1){
			return (
				<div className="publish-memory-minutes">
					Already Published
	         	</div>
		)
		}else{
			return (
				<div className="publish-memory-minutes">
					<input name="points" type="text" id={this.props.memory_minute.id}/>
		         	<button onClick={()=>this.onClickPublish(this.props.memory_minute)}>Publish</button>
	         	</div>
			)
		}
		
	}
}

function mapStateToProps(state, prop){
	return {
		memory_minutes : state.memory_minutes
	}
}

function mapDispatchToProps(dispatch){
	return {
		action: {
			publishMemoryMinutes : bindActionCreators(publishMemoryMinutesActions, dispatch),
			userPointsCounter 	 : bindActionCreators(userPointsCounterActions, dispatch),
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PublishMemoryMinutesForm);
//export default PublishMemoryMinutesForm;