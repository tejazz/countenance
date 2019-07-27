import React, { Component } from 'react';
import { Document, Page, View, Text, Stylesheet, PDFViewer } from '@react-pdf/renderer';
import './resume.scss';

class Resume extends Component {
    componentDidMount() {
        localStorage.setItem("currentRoute", "resume");
    }

    render() {
        const ResumeDocument = () => (
            <Document>
                <Page size="A4">
                    <View>
                        <Text>
                        Hello
                        </Text>
                    </View>
                </Page>
            </Document>
        );

        return (
            <div className="resume-container">
                <div className="resume-document">
                    <PDFViewer className="resume-document--pdf-view">
                        <ResumeDocument/>
                    </PDFViewer>
                </div>
                <div className="resume-form">
                    Doc Form
                </div>
            </div>
        );
    }
}

export default Resume;