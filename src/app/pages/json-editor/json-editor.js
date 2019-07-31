import React, { Component } from 'react';
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';
import './json-editor.scss';

class JsonEditor extends Component {
    render() {
        return (
            <div className="jsonedit-container">
                <Editor
                    value={this.props.mainJsonData}
                />
            </div>
        );
    }
}

export default JsonEditor;