import React, { Component } from 'react';
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';
import './json-editor.scss';

class JsonEditor extends Component {
    render() {
        return (
            <div className="jsonedit-container">
                <div className="jsonedit-container--header"></div>
                <Editor
                    value={this.props.mainJsonData}
                    className="jsonedit-container--editor"
                />
            </div>
        );
    }
}

export default JsonEditor;