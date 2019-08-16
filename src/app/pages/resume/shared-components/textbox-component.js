import React, { Component } from 'react';
import '../resume.scss';

class TextBox extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        // checks for text tag render based
        // on previous property value
        return nextProps.stateValue !== this.props.stateValue;
    }

    render() {
        return (
            <textarea
                rows={5}
                className="resume-form_section--input"
                defaultValue={this.props.stateValue}
                style={{ color: this.props.secondaryColor }}
                onChange={(e) => this.props.handleDynamicInput(e, this.props.index, this.props.inputItem.stateValue, this.props.inputItem.stateType)}
            />
        );
    }
}

export default TextBox;