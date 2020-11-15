import React, { Component } from 'react'

export default class Items extends Component {
    render() {
        return (
            <div id="items">
                {this.props.currentItems.map((items)=>(
                    <li key={items.key}><img src={items.pic}></img>{items.title}<br/></li>
                    
                ))}
            </div>
        )
    }
}
