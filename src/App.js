import React from 'react';
import Todos from './components/Todos'


class App extends React.Component {
  state = {
      todos:[
        {
          id:1,
          title:'Meet Boss',
          completed:true
        },
        {
          id:2,
          title:'Sleep',
          completed:true
        },
        {
          id:3,
          title:'Repeat',
          completed:true
        },
      ]
  }
  render(){
   
    return (
      <div className="App">
      <h1>Todos</h1>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
  
}

export default App;
