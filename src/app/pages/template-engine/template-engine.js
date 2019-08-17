import React, { Component, Fragment } from 'react';
import './template-engine.scss';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import TemplateOne from './templates/template-1';

class TemplateEngine extends Component {

    printTemplate = () => {
        const input = document.getElementById("main-document");

        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'PNG', 0, 0);
                pdf.save("countenance-resume.pdf");
            });

    }

    render() {

        // sort work experience in descending order
        let sortedWorkExperience = this.props.mainJsonData.ExpertisePage.WorkExperience.sort((curr, next) => {
            let currTime = new Date(curr.From);
            let nextTime = new Date(next.From);
            return nextTime - currTime;
        });

        // company lists
        // more than three experiences
        let companyLists = sortedWorkExperience.slice(3, sortedWorkExperience.length).map((item, index) => (`${item.Company}` + ((index === (sortedWorkExperience.length - 4)) ? '' : ', ')));

        // enlist all certifications
        let allCertifications = this.props.mainJsonData.Certifications.map((item, index) => (`${item.CertificateName}` + ((index === (this.props.mainJsonData.Certifications.length - 1)) ? '' : ', ')));

        return (
            <div>
                <button onClick={() => this.printTemplate()}>Print</button>
                <TemplateOne companyLists={companyLists} allCertifications={allCertifications} sortedWorkExperience={sortedWorkExperience} mainJsonData={this.props.mainJsonData} />
            </div>
        );
    }
}

export default TemplateEngine;