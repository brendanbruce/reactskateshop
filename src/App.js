import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DependentQuantity from './dependentQuantity';
import IndependentQuantity from './independentQuantity';
import Tax from './tax';
import TotalPrice from './totalPrice';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalDecks: 0,
      totalCost: 0,
      taxRate: 0
    };

    this.items = {
      trucks: {
        price: 20,
        multiplier: 2,
        name: "Trucks"
      },
      wheels: {
        price: 5,
        multiplier: 4,
        name: "Wheels"
      },
      bearings: {
        price: 4,
        multiplier: 8,
        name: "Bearings"
      }
    }

    this.handleDecks = this.handleDecks.bind(this);
    this.handleTax = this.handleTax.bind(this);
  }


  calculateSubtotal() {
    const totalDecks = this.state.totalDecks;
    const deckPrice = totalDecks * 50;
    const truckPrice = totalDecks * this.items.trucks.multiplier * this.items.trucks.price;
    const wheelsPrice = totalDecks * this.items.wheels.multiplier * this.items.wheels.price;
    const bearingsPrice = totalDecks * this.items.bearings.multiplier * this.items.bearings.price;
    const subtotal = deckPrice + truckPrice + wheelsPrice + bearingsPrice;
    return subtotal;
  }

  calculateTotal() {
    const subtotal = this.calculateSubtotal();
    const total = subtotal + (subtotal * this.state.taxRate);
    return total;
  }

  handleDecks(event) {
    this.setState({
      totalDecks: event.target.value
    });
  }

  handleTax(event) {
    this.setState({
      taxRate: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>{this.state.totalDecks}</h2>
        </div>

        <IndependentQuantity
          itemName = "Decks"
          handleDecks = {this.handleDecks}
          totalItems = {this.state.totalDecks} />

        <h3>Associated Parts</h3>

        <DependentQuantity
          itemName={this.items.trucks.name}
          multiplier={this.items.trucks.multiplier}
          price={this.items.trucks.price}
          totalDecks={this.state.totalDecks} />

        <DependentQuantity
          itemName={this.items.wheels.name}
          multiplier={this.items.wheels.multiplier}
          price={this.items.wheels.price}
          totalDecks={this.state.totalDecks} />

        <DependentQuantity
          itemName={this.items.bearings.name}
          multiplier={this.items.bearings.multiplier}
          price={this.items.bearings.price}
          totalDecks={this.state.totalDecks} />

        <Tax taxRate={this.state.taxRate}
          handleTax={this.handleTax} />

        <div>
          Subtotal: {this.calculateSubtotal()}
          Total Cost: {this.calculateTotal()}
        </div>
      </div>
    );
  }
}

export default App;
