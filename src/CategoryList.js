import React, { Component } from "react";

export default class CategoryList extends Component {


  
  render() {
    return (
      <div>
        {this.props.current.map((category) => (
          <li key={category.id}>
            <button onClick={this.props.getItems}>{category.ilan}</button>
          </li>
        ))}
      </div>
    );
  }
}
