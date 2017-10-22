/* eslint-disable */

import React, { Component } from 'react';
const $ = window.$;

// a generic window container.
// height fits the height of the current window.
class Window extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount () {
        let element = this.Element,
            self = this;
        $(window).ready(() => {
            if (self.props.div) {
                $(element).Height("/", this.props.div);
            } else if (self.props.add) {
                $(element).Height("+", this.props.add);
            } else {
                $(element).Height();
            }
        });
    }

    render () {
        return (
            <div className={this.props.className || ""} id={this.props.id || ""} ref={(div) => {this.Element = div;}}>
                {this.props.children}
            </div>
        )
    }
}

// bootstrap should be available to get this feature working

// this is for the container grid.
class Grid extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <div
                className={`container ${this.props.className || ""}`}
                id={this.props.id || ""}>
                {this.props.children}
            </div>
        )
    }
}

// this is the container-fluid grid
class GridFluid extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <div data-parallax="scroll" data-parallax-src={this.props.parallax}
                className={`container-fluid ${this.props.className || ""}`}
                id={this.props.id || ""}>
                {this.props.children}
            </div>
        )
    }
}

// this is the container grid has the height of the current window.
class WindowGrid extends Component {
    constructor(props) {
        super(props)
    }
    get div() {
        return (
            <Window
                div={this.props.div}
                className={`container ${this.props.className || ""}`} id={this.props.id || ""}>
                {this.props.children}
            </Window>
        )
    }
    get add() {
        return (
            <Window
                add={this.props.add}
                className={`container ${this.props.className || ""}`} id={this.props.id || ""}>
                {this.props.children}
            </Window>
        )
    }
    get main() {
        return (
            <Window className={`container ${this.props.className || ""}`} id={this.props.id || ""}>
                {this.props.children}
            </Window>
        )
    }
    render(){
        return this.props.div ? this.div : this.props.add ? this.add : this.main;
    }
}

// this is the container-fluid and has the height of the window.
class WindowGridFluid extends Component {
    constructor(props) {
        super(props)
    }
    get div() {
        return (
            <Window
                div={this.props.div}
                className={`container-fluid ${this.props.className || ""}`} id={this.props.id || ""}>
                {this.props.children}
            </Window>
        )
    }
    get add() {
        return (
            <Window
                add={this.props.add}
                className={`container-fluid ${this.props.className || ""}`} id={this.props.id || ""}>
                {this.props.children}
            </Window>
        )
    }
    get main() {
        return (
            <Window className={`container-fluid ${this.props.className || ""}`} id={this.props.id || ""}>
                {this.props.children}
            </Window>
        )
    }
    render(){
        return this.props.div ? this.div : this.props.add ? this.add : this.main;
    }
}

// this a row that uses the height of the window as it's min height
class WindowRow extends Component {
    constructor(props) {
        super(props)
    }
    get div() {
        return (
            <Window
                div={this.props.div}
                className={`row ${this.props.className || ""}`} id={this.props.id || ""}>
                {this.props.children}
            </Window>
        )
    }
    get add() {
        return (
            <Window
                add={this.props.add}
                className={`row ${this.props.className || ""}`} id={this.props.id || ""}>
                {this.props.children}
            </Window>
        )
    }
    get main() {
        return (
            <Window className={`row ${this.props.className || ""}`} id={this.props.id || ""}>
                {this.props.children}
            </Window>
        )
    }
    render(){
        return this.props.div ? this.div : this.props.add ? this.add : this.main;
    }
}


// this is a row. just a normal row.
class Row extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={`row ${this.props.className || ""}`} id={this.props.id || ""}>
                {this.props.children}
            </div>
        )
    }
}

// this is a column
// this is column. set the size and the break points to get the functionality.
// eg sm={5} == col-sm-5
// xl="6" == col-xl-6
class Col extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div
            className={`${this.props.className || ""}
            ${this.props.xs ? "col-"+this.props.xs : ""}
            ${this.props.sm ? "col-sm-"+this.props.sm : ""}
            ${this.props.md ? "col-md-"+this.props.md : ""}
            ${this.props.lg ? "col-lg-"+this.props.lg : ""}
            ${this.props.xl ? "col-xl-"+this.props.xl : ""}
            ${this.props.xsOffset ? "offset-"+this.props.xsOffset : ""}
            ${this.props.smOffset ? "offset-sm-"+this.props.smOffset : ""}
            ${this.props.mdOffset ? "offset-md-"+this.props.mdOffset : ""}
            ${this.props.lgOffset ? "offset-lg-"+this.props.lgOffset : ""}
            ${this.props.xlOffset ? "offset-xl-"+this.props.xlOffset : ""}
            ${this.props.xsPull ? "pull-"+this.props.xsPull : ""}
            ${this.props.smPull ? "pull-sm-"+this.props.smPull : ""}
            ${this.props.mdPull ? "pull-md-"+this.props.mdPull : ""}
            ${this.props.lgPull ? "pull-lg-"+this.props.lgPull : ""}
            ${this.props.xlPull ? "pull-xl-"+this.props.xlPull : ""}
            ${this.props.xsPush ? "push-"+this.props.xsPush : ""}
            ${this.props.smPush ? "push-sm-"+this.props.smPush : ""}
            ${this.props.mdPush ? "push-md-"+this.props.mdPush : ""}
            ${this.props.lgPush ? "push-lg-"+this.props.lgPush : ""}
            ${this.props.xlPush ? "push-xl-"+this.props.xlPush : ""} `}
            id={this.props.id || ""}>
                {this.props.children}
            </div>
        )
    }
}

// this is for an auto column
// you can specify the length of the auto column and with specific break-points.
// eg: size='6' == col-6
// size = "md-5" == col col-md-5
class AutoCol extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={`col col${this.props.type?"-"+this.props.type:""}${this.props.size?"-"+this.props.size:""}
             ${this.props.className || ""}`}
            id={this.props.id}>
                {this.props.children}
            </div>
        )
    }
}

// this is a ClearFix
// use the hide to set which break-point the element can be hidden or shown.
class ClearFix extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={`clearfix hidden-${this.props.hide} ${this.props.className || ""}`}>
                {this.props.children}
            </div>
        )
    }
}

export {Window, Grid, GridFluid, WindowGrid, WindowGridFluid, Row, Col, ClearFix, AutoCol, WindowRow};
