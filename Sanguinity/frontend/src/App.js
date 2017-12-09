import React, { Component } from 'react';
import './App.css';
import Table from './Components/Table/table';
import store from './store';


class App extends Component {
  render() {
    return (
      <div className="App">
       		<Table store={store} />        
      </div>
    );
  }
}

export default App;
