import React, { Component } from 'react'

export default class Spinner extends Component {
    render() {
        return (
            <div className="text-center my-3">
                <div className="spinner-border text-primary" role="status">
                </div>
            </div>
        )
    }
}
