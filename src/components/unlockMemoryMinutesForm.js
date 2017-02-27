import React 			from 'react';
import { bindActionCreators } 			from 'redux';
import { connect } 						from 'react-redux';
import * as unlockMemoryMinutesActions 	from '../actions/unlockMemoryMinutes.js';
import * as userPointsCounterActions 	from '../actions/userPointsCounter.js';

const UnlockMemoryMinutesForm = (props) =>{
	const onClickUnlock = (id, points) =>{
		props.action.unlockMemoryMinutes.unlockMemoryMinutes(id);
		props.action.userPointsCounter.userPointsCounter('deduct_points', points);
	}

	if(props.memory_minute.published === 1){
		let _mm = props.memory_minute;
		if(props.memory_minute.unlocked === 1){
			return <div className="unlock-memory-minutes">
	         	{_mm.text}
         	</div>
		}else{
			return (
					<div className="unlock-memory-minutes text-center">
			         	<button onClick={()=>onClickUnlock(_mm.id, _mm.points)}>Unlock</button> <br/>
			         	<span>{props.memory_minute.points} points</span>
		         	</div>
			)
		}			
	}else{
		return (
			<div className="unlock-memory-minutes">
	         	Not yet published
         	</div>
		)
	}
}

function mapStateToProps(state, prop){
	return {}
}

function mapDispatchToProps(dispatch){
	return {
		action: {
			unlockMemoryMinutes : bindActionCreators(unlockMemoryMinutesActions, dispatch),
			userPointsCounter : bindActionCreators(userPointsCounterActions, dispatch),
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(UnlockMemoryMinutesForm);