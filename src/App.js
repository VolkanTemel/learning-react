import Navi from "./Navi";
import CategoryList from "./CategoryList";
import "./styles.css";
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Items from "./Items"

export default class App extends Component  {
  state = {
    current:[],
    currentItems:[],
    currentLink:["konut"]
};

componentDidMount(){
  this.ilanlar();
}
componentDidUpdate(){
  this.getItems();
}

ilanlar = () => {
  fetch("http://localhost:3000/ilanlar")
    .then((Response) => Response.json())
    .then((data) => this.setState({ current: data }));
};
getItems=()=>{
    fetch("http://localhost:3000/"+this.state.currentLink)
    .then((Response) => Response.json())
    .then((data) => this.setState({ currentItems: data }));
  }

changeItems=category=>{
  this.setState({currentLink:category.link})
}

render(){
  return (
    <div>
       <Navi ilanlar={this.ilanlar}/>
      <Container>
      <Row>
      <Col xs="3">
      <CategoryList current={this.state.current}  changeItems={this.changeItems} />
      </Col>
      <Col xs="9">
      <Items currentItems={this.state.currentItems} />
      </Col>
      </Row>
      </Container>
    </div>
  );
}
}

