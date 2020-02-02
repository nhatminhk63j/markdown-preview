import React, { Component } from 'react';

class Editor extends Component {
    
    render() {
        const {markdown, onChange} = this.props.attr;
        return (
            <textarea name="" id="editor" value={markdown} onChange={onChange} type="text"></textarea>
        );
    }
}

export default Editor;