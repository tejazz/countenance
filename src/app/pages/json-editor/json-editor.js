import React, { Component } from 'react';
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';
import './json-editor.scss';

class JsonEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentJsonData: props.mainJsonData
        };
    }

    render() {
        return (
            <div className="jsonedit-container">
                <div className="jsonedit_section">
                    <Editor
                        value={this.state.currentJsonData}
                    />
                </div>
                <div
                    className="jsonedit_form"
                    style={{ backgroundColor: this.props.secondaryColor }}
                ></div>
            </div>
        );
    }
}

export default JsonEditor;