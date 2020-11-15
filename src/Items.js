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
              <th>Oda Sayısı</th>
              <th>Metrekare</th>
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
                <td>{items.oda}</td>
                <td>{items.metrekare}</td>
                <td>{items.fiyat}</td>
                <td>{items.sehir}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
