import React, { Component } from 'react';

class Counter extends Component {


    
state = {
    count: this.props.counter.value,
    tags: [1,2,3]
};

styles = {
};

//old way to bind this
// constructor(){

//     //calls the constructor of the parent class
//     super();
//     this.handleIncrement = this.handleIncrement.bind(this);

// }

formatCount(){
    return this.props.counter.value === 0 ? "zero" : this.props.counter.value;
}

renderTags (){

    if(this.state.tags.length === 0){
        return <p>There are no tags</p>
    } else {
        return this.state.tags.map( tag=> <li key={tag}>{tag}</li> )
    }
}

    render() { 

        let classess = "badge m-2 ";
        classess += (this.props.counter.value === 0) ? "badge-warning" : "badge-primary";


        return (
        <React.Fragment>
 
            <span span={ {fontWeight: "bold"} } className={classess} >{this.formatCount()}</span>
            <button onClick={()=>this.props.onIncrement(this.props.counter)} className= "btn btn-secondary btn-sm">Incriment</button>
            <button className="btn m-2" onClick={()=> this.props.onDeleteReference(this.props.counter.id)} >Delete</button>
<ul>
    {this.renderTags()}
</ul>

                {this.props.children}

        </React.Fragment>
        );
    }
}
 
export default Counter;