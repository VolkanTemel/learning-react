import React, { Component } from 'react'

export default class Navi extends Component {
    render() {
        return (
            <div><div className="navi">
                <button onClick={this.props.ilanlar} id="navi">ilanlar.com</button>
                </div>
            </div>
        )
    }
}
