import React, { Component } from 'react';
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';
import './json-editor.scss';
import { TitleHelmet } from '../../components/helmet/helmet';

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
        return (
            <div className="jsonedit-container">
                <div className="jsonedit_section">
                    <div className="jsonedit-header"  style={{ backgroundColor: this.props.secondaryColor }}>
                        <p style={{fontWeight: 800}}>Form Your Portfolio</p>
                        <p>You can edit the JSON data so as to reflect in the main portfolio.</p>
                    </div>
                    <Editor
                        value={this.state.currentJsonData}
                        onChange={this.updateJsonData}
                    />
                </div>
                <div
                    className="jsonedit_form"
                    style={{ backgroundColor: this.props.secondaryColor }}
                >
                    <div className="jsonedit_form_container">
                        <p className="jsonedit_form--title">Form Your Portfolio</p>
                        <p className="jsonedit_form--caption">The JSON data can be edited directly to reflect upon the portfolio. It is a simple one-stop data source, changes made will easily reflect on the main site.<br /><br />As far as the images are concerned, it is preferred if you have a hosted image whose url can be easily shared in the JSON data. Please try to provide hosted links for the other images, as much as is feasible for creating a more seamless experience.<br /><br /><b>(Note: The main display image should have a transparent background in order to conform with the design pattern of the portfolio)</b><br /></p>
                    </div>
                </div>

                <TitleHelmet title={"Countenance - Edit Your JSON"} />
            </div>
        );
    }
}

export default JsonEditor;