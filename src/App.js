import React, { Component } from 'react';
import './App.css';

import MemoryMinutes from './components/memoryMinutes';

class App extends Component {
 
  render() {

    return (
      <div className="App-intro">
          <MemoryMinutes />
        </div>
    );
  }
}

export default App;
