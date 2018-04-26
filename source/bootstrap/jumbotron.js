import React from 'react';
export default class Jumbotron extends React.Component{
    render(){
        return <div className={this.props.className} style={this.props.style}>
        {this.props.children}
        </div>;
    }
}