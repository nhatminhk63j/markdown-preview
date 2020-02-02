import React, { Component } from 'react';
import Toolbar from './components/Toolbar';
import Editor from './components/Editor';
import Preview from './components/Preview';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markeddown: placeholder,
      editorMaximized: false,
      previewMaximized: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleEditorMaximize = this.handleEditorMaximize.bind(this);
    this.handlePreviewMaximize = this.handlePreviewMaximize.bind(this);
  }

  handleChange(event){
    this.setState({markeddown: event.target.value});
  }

  handleEditorMaximize(){
    this.setState({editorMaximized: !this.state.editorMaximized});
  }

  handlePreviewMaximize(){
    this.setState({previewMaximized: !this.state.previewMaximized});
  }
  
  render() {
    const classes = this.state.editorMaximized ?
    ['editorWrap maximized', 'previewWrap hide', 'fa fa-compress'] :
    this.state.previewMaximized ?
    ['editorWrap hide', 'previewWrap maximized', 'fa fa-compress'] :
    ['editorWrap', 'previewWrap', 'fa fa-arrows-alt'];

    const toolbarEditorAttr = {
      icon: classes[2],
      onClick: this.handleEditorMaximize,
      text: 'Editor'
    };

    const toolbarPreviewAttr = {
      icon: classes[2],
      onClick: this.handlePreviewMaximize,
      text: 'Preview'
    };

    const editorAttr = {
      markdown: this.state.markeddown,
      onChange: this.handleChange
    }

    const previewAttr = {
      markdown: this.state.markeddown
    }

    return (
      <div>
        <div>
          <div className={classes[0]}>
            <Toolbar attr={toolbarEditorAttr} />
            <Editor attr={editorAttr} />
          </div>
        </div>
        <div className="converter">
          <div className={classes[1]}>
            <Toolbar attr={toolbarPreviewAttr} />
            <Preview attr={previewAttr} />
          </div>
        </div>
      </div>
    );
  }
}

const placeholder =
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

export default App;