import Navi from "./Navi";
import CategoryList from "./CategoryList";
import "./styles.css";
import React, { Component } from "react";

export default class App extends Component  {
  state = {
    current:[]
};

componentDidMount(){
  this.ilanlar();
}

ilanlar = () => {
  fetch("http://localhost:3000/ilanlar")
    .then((Response) => Response.json())
    .then((data) => this.setState({ current: data }));
};

render(){
  return (
    <div>
      <Navi ilanlar={this.ilanlar}/>
      <CategoryList current={this.state.current}/>
    </div>
  );
}
}

