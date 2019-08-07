import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { ResumeDocument } from './pdf-document';

class PDFView extends React.Component {
    constructor(props) {
        super(props);

        if (props.location.state === undefined) {
            props.history.push(`/${localStorage.getItem('currentRoute')}`);
        }
    }
    
    render() {
        // check to ensure undefined document data
        // prevents rendering of page
        if (this.props.location.state === undefined) {
            return(<div>Document data is undefined</div>);
        }

        return (
            <PDFViewer style={{ width: "100%", height: "100%" }}>
                <ResumeDocument PortfolioData={this.props.location.state.PortfolioData}/>
            </PDFViewer>
        );
    }
};

export default PDFView;