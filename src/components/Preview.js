import React, { Component } from 'react';
import marked from 'marked';

marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();

renderer.link = function(href, title, text){
  return `<a target="_blank" href="${href}">${text}</a>`;
};

class Preview extends Component {
    render() {
        const {markdown} = this.props.attr;
        return (
            <div id="preview" dangerouslySetInnerHTML={{__html: marked(markdown, {renderer: renderer})}}></div>
        );
    }
}

export default Preview;