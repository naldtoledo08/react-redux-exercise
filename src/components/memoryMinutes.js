import React from 'react';
import { connect } 				from 'react-redux';
import SubmitMemoryMinutesForm from './SubmitMemoryMinutesForm';
import PublishMemoryMinutesForm from './PublishMemoryMinutesForm';
import UnlockMemoryMinutesForm from './UnlockMemoryMinutesForm';

const MemoryMinutes = (props) =>{

	const MemoryMinutesItems = props.memory_minutes.map((item, index) => {

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
/*
class MemoryMinutes extends Component{

	render(){

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
}*/

function mapStateToProps(state, prop){
	return {
		memory_minutes : state.memory_minutes
	}
}

export default connect(mapStateToProps)(MemoryMinutes);