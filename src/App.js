import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class SubmitMemoryMinutes extends Component{
  constructor(props){
    super(props);
  }

  render(){

    return(
      <div className="form">
        <div className="sumbit-memory-minutes">
          <form>
            <h1>{this.props.title}</h1>
            <div className="row">
              <label>
              Is going:
              <input
              name="title"
              type="text"
              onChange={this.props.onChange}/>
              </label>
            </div>
            <div className="row">
            <label>
              Text:
              <textarea name="description" onChange={this.props.onChange}/>
            </label>
            </div>
            <div className="row">
              <button onClick={this.props.onClick}>Submit</button>
            </div>
          </form>
        </div>
      </div>
  )}
}



class SubmittedMemoryMinutes extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let memory_minutes = this.props.memory_minutes;
    let thMMinutes = "";
    if(memory_minutes.length > 0){
        thMMinutes = memory_minutes.map((row, index) =>
          <tr key={index}>
            <td>{row.title}</td>
            <td>
              <button 
                onClick={this.props.unlock}
                data-id={this.props.id}
              >Unlock</button>
            </td>
            <td>
              <button 
                onClick={this.props.publish}
                data-id={this.props.id}
              >Unlock</button>
            </td>
          </tr>
        );
    }
  
    return(
      <div className="form">
        <div className="sumbitted-memory-minutess">
          <form>
            <h1>{this.props.title}</h1>
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
                  {thMMinutes}
                </tbody>
              </table>
            </div>      
          </form>
        </div>
      </div>
  )}
}

function UserInfo(props){
  return (
    <div className='user-info'>      
      <div className='name'>Name: {props.name}</div>
      <div className='points'>Points: {props.points}</div>
    </div>
  )
}



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        points : 10,
        memory_minutes : [

        ],
        mm_form: {
          title: "",
          description : "s"
        }
    }
  }

  handleInputChange  = (e) =>{
    
    e.preventDefault();
    const m_form = this.state.mm_form;
    m_form[e.target.name] = e.target.value;
    this.setState({
      mm_form : m_form
    });
    console.log(this.state.memory_minutes);
  }

  handleSubmitMemoryMinutes = (e) => {
    e.preventDefault();
    
    const mm_form = this.state.mm_form;
    mm_form["points"]     = 0;
    mm_form["is_unlock"]  = 0;

    const memory_minutes = this.state.memory_minutes;
    const id = Math.floor((Math.random()*1000000)+1);
    memory_minutes[id] = mm_form;

    this.setState({
      memory_minutes: memory_minutes
    });
 
    console.log(this.state.memory_minutes);
  }

  handleUnlock = (e) => {
    e.preventDefault();
  }

  handlePublish = (e) => {
    e.preventDefault();
  }

  render() {
    const user = {
      name:'Ronald Toledo'
    }

    return (
      <div className="App">
        <UserInfo name={user.name} points={this.state.points}/>
        
        <SubmitMemoryMinutes 
          title="Submit Memory Minutes - Form"
          onClick={this.handleSubmitMemoryMinutes}
          onChange={this.handleInputChange}/>

        <SubmittedMemoryMinutes
          title="Submitted Memory Minutes"
          memory_minutes={this.state.memory_minutes}
          unlock={this.handleUnlock}
          publish={this.handlePublish}
        />

        
      </div>
    );
  }
}

export default App;
