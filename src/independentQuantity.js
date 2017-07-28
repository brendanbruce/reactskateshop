import React, { Component } from 'react';

class IndependentQuantity extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>{this.props.itemName}:</h4>
        <input type="text" name="quantity" onChange={this.props.handleDecks} />
      </div>
    );
  }
}

export default IndependentQuantity;
