import React, { Component } from 'react';

class Toolbar extends Component {
    render() {
        const {icon, onClick, text} = this.props.attr;
        return (
            <div className="toolbar">
                <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>
                {text}
                <i className={icon} onClick ={onClick}></i>
            </div>
        );
    }
}

export default Toolbar;