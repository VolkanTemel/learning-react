import Navi from "./Navi";
import CategoryList from "./CategoryList";
import "./styles.css";
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Items from "./Items"

export default class App extends Component  {
  state = {
    current:[],
    currentItems:[]
};


componentDidMount(){
  this.ilanlar();
}

ilanlar = () => {
  fetch("http://localhost:3000/ilanlar")
    .then((Response) => Response.json())
    .then((data) => this.setState({ current: data }));
};
getItems=()=>{
    fetch("http://localhost:3000/konut")
    .then((Response) => Response.json())
    .then((data) => this.setState({ currentItems: data }));
  }


render(){
  return (
    <div>
      <Container>
      <Navi ilanlar={this.ilanlar}/>
      <Row>
      <Col xs="3">
      <CategoryList current={this.state.current}  getItems={this.getItems} />
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

