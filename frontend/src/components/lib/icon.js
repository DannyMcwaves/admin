/* eslint-disable */
// contains generic components

import React, { Component } from 'react';

class Icon extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        if (this.props.block) return <div className={this.props.divClass}><i className={`fa fa-${this.props.name} fa-${this.props.size} fa-${this.props.spin} p-x ${this.props.className}`}>{this.props.children}</i></div>
        return <i className={`fa fa-${this.props.name} fa-${this.props.size} fa-${this.props.spin} ${this.props.className}`}>{this.props.children}</i>
    }
}

class Stack extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <span className={`fa-stack fa-${this.props.size || "xl"} ${this.props.className}`}>
                <Icon className="fa-stack-1x" name={this.props.inner}/>
                <Icon className="fa-stack-2x" name={this.props.outer}/>
            </span>
        )
    }
}

export {Icon, Stack}
