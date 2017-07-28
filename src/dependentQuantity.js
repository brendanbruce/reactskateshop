import React, { Component } from 'react';

class DependentQuantity extends Component {

  getQuantity() {
    const quantity = this.props.multiplier * this.props.totalDecks;
    return quantity;
  }

  getTotalPrice() {
    const price = this.getQuantity() * this.props.price;
    return price;
  }

  render() {
    return (
      <div>
        <h4>{this.props.itemName}:</h4>
        <p>Included Quantity: {this.getQuantity()}</p>
        <p>Price: {this.getTotalPrice()}</p>
      </div>
    );
  }
}

export default DependentQuantity;
