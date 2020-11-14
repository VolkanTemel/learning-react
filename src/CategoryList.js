import React, { Component } from "react";

export default class CategoryList extends Component {


  
  render() {
    return (
      <div>
        {this.props.current.map((category) => (
          <li>
            <button onClick={()=>this.props.changeItems(category)} key={category.id} >{category.ilan}</button>
          </li>
        ))}
      </div>
    );
  }
}
