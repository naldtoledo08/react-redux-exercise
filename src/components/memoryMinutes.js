import React, { Component } 	from 'react';
//import { bindActionCreators } 	from 'redux';
import { connect } 				from 'react-redux';
//import * as submitMemoryMinutesActions from '../actions/submitMemoryMinutes.js';
//import * as publishMemoryMinutesActions from '../actions/publishMemoryMinutes.js';
//import * as unlockMemoryMinutesActions from '../actions/unlockMemoryMinutes.js';
//import * as userPointsCounterActions from '../actions/userPointsCounter.js';
import SubmitMemoryMinutesForm from './submitMemoryMinutesForm';
import PublishMemoryMinutesForm from './publishMemoryMinutesForm';
import UnlockMemoryMinutesForm from './unlockMemoryMinutesForm';


class MemoryMinutes extends Component{
	/*constructor(props){
		super(props);

	}*/

	render(){
		console.log(this.props);
		const _action = this.props.action;

		const MemoryMinutesItems = this.props.memory_minutes.map((item, index) => {

			return  <tr key={index}>
			            <td>{item.title}</td>
			            <td className="text-center">
			              	<UnlockMemoryMinutesForm memory_minute={item} />
			            </td>
			            <td className="text-center">
			            	<PublishMemoryMinutesForm memory_minute={item}/>
			            </td>
			        </tr>

		});
		
		return (
			<div className="">

				<SubmitMemoryMinutesForm />

				<div className="form">
					<div className="sumbitted-memory-minutes">
   						<h2> List of Memory Minutes</h2>
			            <div className="row">
							<table>
								<thead>
									<tr>
										<th>Title</th>
										<th>Unlock</th>
										<th>Publish</th>
									</tr>
								</thead>
								<tbody>
									{MemoryMinutesItems}
								</tbody>
							</table>
			            </div> 
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state, prop){
	return {
		memory_minutes : state.memory_minutes
	}
}

export default connect(mapStateToProps)(MemoryMinutes);