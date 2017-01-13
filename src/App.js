// Bring in React & Component instance from React lib
import React, { Component } from 'react';

// Local variables
const buttonStyle = {
  marginRight: 16,
};

// Component definition
class Hello extends Component {

  // when our component is initialized
  // the constructor is called
  constructor(props) {
    // make a call to the parent class's Component constructor
    super();

    // define an initial state
    this.state = {
      counter: 0,  // initialize this.state.counter to be 0
      newName: '',
    };
  }

  handleClick(event) {
    // setState will explicitly mutate the state
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  handleResetCounter(event) {
    this.setState({
      counter: 0,
    });
  }

  handleCountByTen(event) {
    this.setState({
      counter: this.state.counter + 10,
    });
  }

  handleChangeName(event) {
    this.setState({
      newName: event.target.value,
    });
  }

  // the component will render this
  render() {
    return (
      <div>
        <h1>O hai {this.state.newName || this.props.name}!</h1>
        <p>You are {this.props.age} years old</p>
        <p>Counter is → {this.state.counter}</p>

        <button className="awesome-sauce" style={buttonStyle} onClick={(event) => this.handleClick(event)}>
          CLICK ME!
        </button>

        <button style={buttonStyle} onClick={(event) => this.handleResetCounter(event)}>
          Reset
        </button>

        <button style={buttonStyle} onClick={(event) => this.handleCountByTen(event)}>
          Increment by ten
        </button>
        <input type="text" onChange={(event) => this.handleChangeName(event)} />
      </div>
    );
  }
}

export default Hello;
