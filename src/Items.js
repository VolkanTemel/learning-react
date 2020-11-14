import React, { Component } from 'react'

export default class Items extends Component {
    render() {
        return (
            <div>
                {this.props.currentItems.map((items)=>(
                    <li key={items.key}>{items.title}</li>
                ))}
            </div>
        )
    }
}