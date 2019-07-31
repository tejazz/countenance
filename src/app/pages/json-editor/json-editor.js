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

    /* changes the current JSON displayed and 
    enables the same JSON changes to be reflected 
    in portfolio */
    updateJsonData = (newJson) => {
        this.setState({
            currentJsonData: newJson
        });

        this.props.modifyMainJsonData(this.state.currentJsonData);
    }

    render() {
        console.log(this.state);
        return (
            <div className="jsonedit-container">
                <div className="jsonedit_section">
                    <Editor
                        value={this.state.currentJsonData}
                        onChange={this.updateJsonData}
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