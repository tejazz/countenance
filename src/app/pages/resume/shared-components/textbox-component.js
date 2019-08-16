import React from 'react';
import '../resume.scss';

export default (props) => {
    
    return (
        <textarea
            rows={5}
            className="resume-form_section--input"
            defaultValue={props.stateValue}
            style={{ color: props.secondaryColor }}
            onChange={(e) => props.handleDynamicInput(e, props.index, props.inputItem.stateValue, props.inputItem.stateType)}
        />
    );
}