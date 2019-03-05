import React, { Component } from 'react';   
import Counter from './counter';
class Counters  extends Component {

    render() { 

        const { onDelete, onIncriment, onReset } = this.props;
        return ( 

            <div>
                {this.props.counters.map( c => 
                <Counter 
                key={c.id} 
                counter={c}
                onDeleteReference = {onDelete}
                onIncrement = {onIncriment}
                >
                <h1>Counter {c.id}</h1>
                </Counter>)}
                
                <button onClick={onReset } >Reset</button>    
             </div>
         );
    }
}
 
export default Counters;