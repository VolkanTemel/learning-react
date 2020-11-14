import React, { Component } from "react";

export default class CategoryList extends Component {
  render() {
    return (
      <div>
        {this.props.current.map((category) => (
          <li key={category.id}>
            <a href={category.ilan}>{category.ilan}</a>
          </li>
        ))}
      </div>
    );
  }
}
