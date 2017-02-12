import React, { Component } from 'react';


class SubmitMemoryMinutesForm extends Component{
	constructor(props){
		super(props);
		this.onClickAdd = this.onClickAdd.bind(this);
		this.state = {
			memory_minutes :[]
		}
	}
	onClickAdd(){		
		var id = Math.floor((Math.random()*1000000)+1);
		var title = document.getElementById("mm_title").value;
		var text = document.getElementById("mm_text").value;

		this.props.submitMemoryMinutes(id, title, text);
		this.setState({
			points : (this.state + 10)
		});
		document.getElementById('mm_title').value = "";
		document.getElementById('mm_text').value = "";
	}
	render(){

		return (

		        <div className="sumbit-memory-minutes">
		            <h1>Submit Memory Minutes</h1>
		            <div className="row">
		              <label>
			              <input name="mm_title" id="mm_title" type="text"/>
		              </label>
		            </div>
		            <div className="row">
			            <label>
			              Text:
			              <textarea name="mm_text" id="mm_text"/>
			            </label>
		            </div>
		            <div className="row">
		            	<button onClick={()=>this.onClickAdd()}>Submit</button>
		            </div>
		        </div>

		)
	}
}

export default SubmitMemoryMinutesForm;