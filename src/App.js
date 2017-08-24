import React, { Component } from 'react';
import Editor from './Editor.jsx';
import Preview from './Preview.jsx';

const style = {
    display: 'flex',
    flexDirection: 'row'
}

class App extends Component {
    render() {
        return (
            <div style={style}>
                <Editor />
                <Preview />
            </div>
        );
    }
}
export default App;
