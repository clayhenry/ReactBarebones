import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav';
import Counters from './components/counters'

class App extends Component {

  state = { 

    counters: [
        {id: 1, value:0},
        {id: 2, value:2},
        {id: 3, value:0},
        {id: 4, value:0},
    ]

 };

 //arrow functions inherit this keyword
handleIncrement=(counter)=>{
   
    //theres got to ba a better way
   let counters = [...this.state.counters];
   let index = counters.indexOf(counter);
   counters[index] = { ...counter };
   counters[index].value++;
   this.setState({counters });

}

 handleDelete = (counterId) =>{
   const counters = this.state.counters.filter( c => c.id !==  counterId);
   this.setState({ counters: counters  })
 }


 handleReset = ()=>{
    let counter = this.state.counters.map( c => c.value = 0 );
    this.setState({counter: counter });
 }


  render() {
    return (
      <div className="App">
      <Nav countersCount={this.state.counters.filter(c=> c.value > 0).length} />
      {/* <Nav countersCount={this.state.counters.length} /> */}
       <Counters 
          onReset={this.handleReset} 
          onIncriment={this.handleIncrement}
          onDelete = {this.handleDelete}
          counters= {this.state.counters} />
      </div>
    );
  }
}

export default App;
