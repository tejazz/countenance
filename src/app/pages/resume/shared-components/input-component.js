import React from 'react';
import '../resume.scss';

export default (props) => (
    <input
        className="resume-form_section--input"
        value={props.stateValue}
        style={{ color: props.secondaryColor }}
        onChange={(e) => props.handleDynamicInput(e, props.index, props.inputItem.stateValue, props.inputItem.stateType)}
    />
);