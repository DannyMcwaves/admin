
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// THIS PART BELONGS TO THE ANIMATIONS.
// I WILL DEFINE THE CLASSES OF THE ANIMATIONS AND THEN
// EACH ANIMATION WILL END UP USING THOSE NAMES AS THE NAMES
// OF THEIR ANIMATIONS.
// animation definitions: enter and appear.

// the transitionAppear animation
class TransitionAppear extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName={this.props.name}
                transitionAppear={true}
                transitionAppearTimeout={this.props.timeout}
                transitionEnter={false}
                transitionLeave={false}>
                {this.props.children}
            </ReactCSSTransitionGroup>
        );
    }
}

// the transition animation on enter and on leave
class Transition extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }
    render () {
        return (
            <ReactCSSTransitionGroup
                transitionName={this.props.name}
                transitionEnterTimeout={this.props.enter}
                transitionLeaveTimeout={this.props.leave}>
                {this.props.children}
            </ReactCSSTransitionGroup>
        )
    }
}


export {TransitionAppear, Transition}
