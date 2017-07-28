import React, { Component } from 'react';

class Tax extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <input type="text" name="tax" onChange={this.props.handleTax} />
        <div>tax</div>
      </div>
    );
  }
}

export default Tax;
