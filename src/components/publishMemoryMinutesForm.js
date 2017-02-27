import React			from 'react';
import { bindActionCreators } 			from 'redux';
import { connect } 						from 'react-redux';
import * as publishMemoryMinutesActions from '../actions/publishMemoryMinutes.js';
import * as userPointsCounterActions 	from '../actions/userPointsCounter.js';


const PublishMemoryMinutesForm = (props) =>{

	const onClickPublish = (memory_minute) =>{

		var points = document.getElementById(memory_minute.id).value.trim();

		if(points === "" || isNaN(points)){
			alert("Please enter points");
		}else{
			props.action.publishMemoryMinutes.publishMemoryMinutes(memory_minute.id, points);
			props.action.userPointsCounter.userPointsCounter('add_points', points);		
		}
	}

	if(props.memory_minute.published === 1){
		return (
			<div className="publish-memory-minutes">
				Already Published
         	</div>
	)
	}else{
		return (
			<div className="publish-memory-minutes">
				<input name="points" type="text" id={props.memory_minute.id}/>
	         	<button onClick={()=>onClickPublish(props.memory_minute)}>Publish</button>
         	</div>
		)
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