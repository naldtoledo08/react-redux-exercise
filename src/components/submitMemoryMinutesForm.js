import React		from 'react';
import { bindActionCreators } 			from 'redux';
import { connect } 						from 'react-redux';
import * as submitMemoryMinutesActions 	from '../actions/submitMemoryMinutes.js';


const SubmitMemoryMinutesForm = (props) =>{
	const onClickAdd = () =>{
		
		var id = Math.floor((Math.random()*1000000)+1);
		var title = document.getElementById("mm_title").value;
		var text = document.getElementById("mm_text").value;

		props.action.submitMemoryMinutes.submitMemoryMinutes(id, title, text);
		
		document.getElementById('mm_title').value = "";
		document.getElementById('mm_text').value = "";
	}

	return (

      		<div className="form">
		        <div className="sumbit-memory-minutes">
		            <h2>Submit Memory Minutes</h2>
		            <div className="row">
		              <label>
	              		Title:&nbsp;
			              <input name="mm_title" id="mm_title" type="text"/>
		              </label>
		            </div>
		            <div className="row">
			            <label>
			              Text:&nbsp;
			              <textarea name="mm_text" id="mm_text"/>
			            </label>
		            </div>
		            <div className="row">
		            	<button onClick={()=>onClickAdd()}>Submit</button>
		            </div>
		        </div>
		    </div>

		)

}

function mapStateToProps(state, prop){
	return {}
}

function mapDispatchToProps(dispatch){
	return {
		action: {
			submitMemoryMinutes : bindActionCreators(submitMemoryMinutesActions, dispatch),
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitMemoryMinutesForm);