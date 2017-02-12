import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MemoryMinutesActions from '../actions/submitMemoryMinutes.js'
import SubmitMemoryMinutesForm from './submitMemoryMinutesForm';


class MemoryMinutes extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const MemoryMinutesItems = this.props.memory_minutes.map((item, index) => {
			return  <tr key={index}>
			            <td>{item.title}</td>
			            <td>
			              <button >Unlock</button>
			            </td>
			            <td>
			            	<input name="points" type="text" value=""/>
			             	<button >Publish</button>
			            </td>
			          </tr>
		});

		return (
			<div className="">

				<SubmitMemoryMinutesForm submitMemoryMinutes={this.props.action.submitMemoryMinutes} />

				
				<div className="sumbitted-memory-minutes">
      

					<h1> List of Memory Minutes</h1>
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
		action: bindActionCreators(MemoryMinutesActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MemoryMinutes);