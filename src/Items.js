import React, { Component } from "react";
import { Table } from "reactstrap";

export default class Items extends Component {
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th> </th>
              <th>İlan Başlığı</th>
             
              <th>Fiyat</th>
              <th>İl</th>
            </tr>
          </thead>
          <tbody>
            {this.props.currentItems.map((items) => (
              <tr key={items.id}>
                <td>
                  <img src={items.pic}></img>
                </td>
                <td>{items.title}</td>
                <td>{items.fiyat}TL</td>
                <td>{items.sehir}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
